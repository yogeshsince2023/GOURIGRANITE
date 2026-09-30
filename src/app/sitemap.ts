import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gourigroupindia.com';

    // Static pages
    const staticPages = [
        { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
        { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/products/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.95 },
        { url: `${baseUrl}/factories/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/catalogue/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
        { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/lead-generation/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    ];

    // Product detail pages
    const productIds = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'];
    const productPages = productIds.map(id => ({
        url: `${baseUrl}/products/${id}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Factory profile pages
    const factorySlugs = ['kishangarh-marble-udhyog', 'kishangarh-granites', 'karimnagar-granito'];
    const factoryPages = factorySlugs.map(slug => ({
        url: `${baseUrl}/factories/${slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }));

    return [...staticPages, ...productPages, ...factoryPages];
}
