const https = require('https');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local if not already present
const envPath = path.resolve(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const value = trimmed.slice(idx + 1).trim();
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    }
  });
}

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'qj1hesmj';
const apiKey = process.env.CLOUDINARY_API_KEY || '438361699874672';
const apiSecret = process.env.CLOUDINARY_API_SECRET || 'GL1rd9fCe6umCgGuYEhGfziQtoI';

async function fetchAllCloudinaryImages() {
  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
  let allResources = [];
  let nextCursor = null;

  do {
    const bodyObj = {
      expression: 'resource_type:image',
      max_results: 500
    };
    if (nextCursor) {
      bodyObj.next_cursor = nextCursor;
    }

    const data = await new Promise((resolve, reject) => {
      const req = https.request(
        `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
        {
          method: 'POST',
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/json'
          }
        },
        (res) => {
          let body = '';
          res.on('data', chunk => body += chunk);
          res.on('end', () => {
            if (res.statusCode >= 200 && res.statusCode < 300) {
              try {
                resolve(JSON.parse(body));
              } catch (e) {
                reject(e);
              }
            } else {
              reject(new Error(`Cloudinary API returned ${res.statusCode}: ${body}`));
            }
          });
        }
      );
      req.on('error', reject);
      req.write(JSON.stringify(bodyObj));
      req.end();
    });

    if (data.resources) {
      allResources = allResources.concat(data.resources);
    }
    nextCursor = data.next_cursor || null;
  } while (nextCursor);

  return allResources;
}

async function run() {
  console.log(`Connecting to Cloudinary (${cloudName})...`);
  const resources = await fetchAllCloudinaryImages();
  console.log(`Found ${resources.length} image resources.`);

  const sortNum = (id) => parseInt(id.replace(/\D/g, ''), 10) || 0;

  const granite = [];
  const marbleQuartz = [];

  resources.forEach(r => {
    const f = (r.folder || r.asset_folder || '').toLowerCase();
    const idLower = r.public_id.toLowerCase();
    const isMQ = f.includes('marble') || f.includes('quartz') || idLower.includes('marble') || idLower.includes('quartz');
    
    const num = sortNum(r.public_id);
    const item = {
      id: r.public_id,
      url: r.secure_url,
      category: isMQ ? 'Marble & Quartz' : 'Granite',
      title: isMQ ? `Marble & Quartz #${num}` : `Granite #${num}`
    };

    if (isMQ) {
      marbleQuartz.push(item);
    } else {
      granite.push(item);
    }
  });

  granite.sort((a, b) => sortNum(a.id) - sortNum(b.id));
  marbleQuartz.sort((a, b) => sortNum(a.id) - sortNum(b.id));

  console.log(`Classified: ${granite.length} Granite stones, ${marbleQuartz.length} Marble & Quartz stones.`);

  // Combine stones: alternating or all together
  const allStones = [...granite, ...marbleQuartz];
  const allUrls = allStones.map(s => s.url);
  const graniteUrls = granite.map(s => s.url);
  const marbleQuartzUrls = marbleQuartz.map(s => s.url);

  const dataFilePath = path.resolve(__dirname, '../src/lib/data.ts');

  const content = `import { Product, Factory, Owner, ClientLocation, StoneItem } from './types';
export type { StoneItem } from './types';

export const CATEGORIES = ['All', 'Granite', 'Marble & Quartz'] as const;
export type StoneCategory = typeof CATEGORIES[number];

// All stones with category classification
export const ALL_STONES: StoneItem[] = ${JSON.stringify(allStones, null, 4)};

// Category specific stones
export const GRANITE_STONES: StoneItem[] = ${JSON.stringify(granite, null, 4)};
export const MARBLE_QUARTZ_STONES: StoneItem[] = ${JSON.stringify(marbleQuartz, null, 4)};

// All unique gallery image URLs for backward compatibility
export const GALLERY_IMAGES: string[] = ${JSON.stringify(allUrls, null, 4)};

// Category specific image URLs
export const GRANITE_IMAGES: string[] = ${JSON.stringify(graniteUrls, null, 4)};
export const MARBLE_QUARTZ_IMAGES: string[] = ${JSON.stringify(marbleQuartzUrls, null, 4)};

// Keep PRODUCTS for backward compatibility with other pages (product detail, etc.)
export const PRODUCTS: Product[] = [
    {
        id: 'p1',
        name: 'Statuario Maximus',
        category: 'Marble',
        finish: 'Polished',
        dimensions: '3200 x 1600 mm',
        description: 'Premium white marble with bold grey veining, perfect for luxury interiors.',
        image: '${marbleQuartz[0]?.url || allUrls[0]}',
        factoryId: 'f1',
        featured: true,
        color: 'White',
        applications: ['Countertops', 'Wall Panels', 'Flooring'],
        altText: 'Statuario Maximus polished white marble slab with grey veining',
    },
    {
        id: 'p2',
        name: 'Black Galaxy',
        category: 'Granite',
        finish: 'Polished',
        dimensions: '3000 x 1800 mm',
        description: 'Iconic deep black granite with gold speckles, durable and elegant.',
        image: '${granite[0]?.url || allUrls[1]}',
        factoryId: 'f2',
        featured: true,
        color: 'Black',
        applications: ['Countertops', 'Flooring', 'Cladding'],
        altText: 'Black Galaxy granite polished slab with gold mineral speckles',
    },
    {
        id: 'p3',
        name: 'Tan Brown',
        category: 'Granite',
        finish: 'Polished',
        dimensions: '3000 x 1800 mm',
        description: 'Classic dark brown granite with black and reddish-brown flecks.',
        image: '${granite[1]?.url || allUrls[2]}',
        factoryId: 'f3',
        featured: false,
    },
    {
        id: 'p4',
        name: 'Absolute Black',
        category: 'Granite',
        finish: 'Honed',
        dimensions: '3200 x 1900 mm',
        description: 'The deepest, darkest black granite for a sleek modern look.',
        image: '${granite[2]?.url || allUrls[3]}',
        factoryId: 'f2',
        featured: true,
    },
    {
        id: 'p5',
        name: 'Rainforest Green',
        category: 'Marble',
        finish: 'Polished',
        dimensions: '2800 x 1500 mm',
        description: 'Exotic green marble with intricate brown branching veins.',
        image: '${marbleQuartz[1]?.url || allUrls[4]}',
        factoryId: 'f1',
        featured: true,
    },
    {
        id: 'p6',
        name: 'Tan Brown Countertops',
        category: 'Granite',
        finish: 'Polished',
        dimensions: 'Custom',
        description: 'Exquisite Tan Brown Granite applied in luxury countertop settings.',
        image: '${granite[3]?.url || allUrls[5]}',
        factoryId: 'f3',
        featured: true,
    },
    {
        id: 'p7',
        name: 'Tan Brown (Slab)',
        category: 'Granite',
        finish: 'Polished',
        dimensions: '3000 x 1800 mm',
        description: 'Classic dark brown granite with black and reddish-brown flecks, showcasing an entire slab.',
        image: '${granite[4]?.url || allUrls[6]}',
        factoryId: 'f3',
        featured: true,
    }
];

export const FACTORIES: Factory[] = [
    {
        id: 'f1',
        name: 'Kishangarh Facilities – Gouri Marble Udhyog',
        location: 'Kishangarh, Kali Dungri, Rajasthan - 305801',
        coordinates: { lat: 26.5741, lng: 74.8601 },
        mapUrl: 'https://maps.app.goo.gl/ggibYwvYEDWYS5Yk8?g_st=aw',
        capacity: '80,000 sq.ft / month',
        image: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790198/factory1_uzv7wd.jpg',
        altText: 'Gouri Marble Udhyog manufacturing facility in Kishangarh, Rajasthan',
        yearEstablished: 2000,
        specialization: 'Marble',
        machinery: ['CNC Cutting Machines', 'Polishing Units', 'Calibrating Lines', 'Bundling Equipment'],
        certifications: ['Export House Certificate', 'Eco-Friendly Operations', 'Govt. Recognized']
    },
    {
        id: 'f2',
        name: 'Kishangarh – Gouri Granites (Ralawta)',
        location: 'Kishangarh, Ralawta, Rajasthan - 305801',
        coordinates: { lat: 26.5850, lng: 74.8720 },
        mapUrl: 'https://maps.app.goo.gl/HWKuyNAYBQkWXsd8A?g_st=aw',
        capacity: '95,000 sq.ft / month',
        image: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790198/factory2_gihyqc.jpg',
        altText: 'Gouri Granites state-of-the-art facility for granite processing',
        yearEstablished: 2005,
        specialization: 'Granite & Quartz',
        machinery: ['Multi-Saw Cutting Lines', 'High-Precision Edge Profilers', 'Waterjet Cutting', 'Flaming Equipment'],
        certifications: ['Export House Certificate', 'Bureau of Indian Standards', 'Govt. Recognized']
    },
    {
        id: 'f3',
        name: 'Karimnagar – Gouri Granito',
        location: 'Baopet, Karimnagar, Telangana - 505401',
        coordinates: { lat: 18.4386, lng: 78.4872 },
        mapUrl: 'https://maps.app.goo.gl/UpymoQSWa3gJERVs6?g_st=aw',
        capacity: '1,50,000 sq.ft / month',
        image: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790199/factory3_ulddda.jpg',
        altText: 'Gouri Granito advanced stone processing facility in Telangana',
        yearEstablished: 2010,
        specialization: 'Granite & Tiles',
        machinery: ['Large Format Saws', 'Grinding Machines', 'Tile Production Lines', 'Quality Control Systems'],
        certifications: ['Export House Certificate', 'Environmental Compliance', 'Govt. Recognized']
    }
];

export const CLIENT_LOCATIONS: ClientLocation[] = [
    { id: 'c1', country: 'United States', coordinates: { lat: 37.0902, lng: -95.7129 }, projectName: 'Luxury Hotel, NY' },
    { id: 'c2', country: 'UAE', coordinates: { lat: 23.4241, lng: 53.8478 }, projectName: 'Residential Tower, Dubai' },
    { id: 'c3', country: 'United Kingdom', coordinates: { lat: 55.3781, lng: -3.4360 }, projectName: 'Commercial Plaza, London' },
    { id: 'c4', country: 'Australia', coordinates: { lat: -25.2744, lng: 133.7751 }, projectName: 'Resort, Gold Coast' },
];

export const OWNERS: Owner[] = [
    {
        id: 'o1',
        name: 'Rajesh Gupta',
        role: 'Founder & CEO',
        bio: 'Over 30 years of experience in the natural stone industry, pioneering new extraction techniques.',
        image: 'https://placehold.co/300x300?text=RG'
    },
    {
        id: 'o2',
        name: 'Vikram Singh',
        role: 'Director of Exports',
        bio: 'Spearheading global expansion and ensuring international quality standards.',
        image: 'https://placehold.co/300x300?text=VS'
    }
];
`;

  fs.writeFileSync(dataFilePath, content, 'utf8');
  console.log(`Successfully updated src/lib/data.ts with ${allStones.length} categorized stones!`);
}

run().catch(err => {
  console.error('Sync failed:', err);
  process.exit(1);
});
