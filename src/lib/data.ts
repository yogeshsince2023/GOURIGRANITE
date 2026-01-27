import { Product, Factory, Owner, ClientLocation } from './types';

export const PRODUCTS: Product[] = [
    {
        id: 'p1',
        name: 'Statuario Maximus',
        category: 'Marble',
        finish: 'Polished',
        dimensions: '3200 x 1600 mm',
        description: 'Premium white marble with bold grey veining, perfect for luxury interiors.',
        image: '/images/2.jpeg',
        factoryId: 'f1',
        featured: true,
    },
    {
        id: 'p2',
        name: 'Black Galaxy',
        category: 'Granite',
        finish: 'Polished',
        dimensions: '3000 x 1800 mm',
        description: 'Iconic deep black granite with gold speckles, durable and elegant.',
        image: '/images/3.jpeg',
        factoryId: 'f2',
        featured: true,
    },
    {
        id: 'p3',
        name: 'Honey Onyx',
        category: 'Onyx',
        finish: 'Backlit',
        dimensions: '2400 x 1400 mm',
        description: 'Translucent stone with warm amber tones, ideal for statement features.',
        image: '/images/4.jpeg',
        factoryId: 'f1',
        featured: false,
    },
    {
        id: 'p4',
        name: 'Silver Travertine',
        category: 'Travertine',
        finish: 'Honed',
        dimensions: '2800 x 1600 mm',
        description: 'Contemporary silver-grey travertine with linear veining.',
        image: '/images/5.jpeg',
        factoryId: 'f3',
        featured: true,
    }
];

export const FACTORIES: Factory[] = [
    {
        id: 'f1',
        name: 'Gouri Marble Udhyog',
        location: 'Kishangarh, Kali Dungri, Rajasthan - 305801',
        coordinates: { lat: 26.5741, lng: 74.8601 },
        capacity: '50,000 sq.ft / month',
        image: '/images/factory_photo.jpeg'
    },
    {
        id: 'f2',
        name: 'Gouri Granites',
        location: 'Kishangarh, Ralawta, Rajasthan - 305801',
        coordinates: { lat: 26.5850, lng: 74.8720 },
        capacity: '80,000 sq.ft / month',
        image: '/images/factory_photo.jpeg'
    },
    {
        id: 'f3',
        name: 'Gouri Granito',
        location: 'Baopet, Karimnagar, Telangana - 505401',
        coordinates: { lat: 18.4386, lng: 78.4872 },
        capacity: '60,000 sq.ft / month',
        image: '/images/factory_photo.jpeg'
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
