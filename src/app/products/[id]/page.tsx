import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PRODUCTS, FACTORIES } from '@/lib/data';
import { Share2, Download, Truck } from 'lucide-react';
import styles from './productDetail.module.css';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';
import type { Metadata } from 'next';

interface Props {
    params: Promise<{ id: string }>;
}

export function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return { title: 'Product Not Found' };

    const factory = FACTORIES.find(f => f.id === product.factoryId);

    return {
        title: `${product.name} — Premium Indian ${product.category} | Gouri Exports`,
        description: `${product.description} ${product.finish} finish, ${product.dimensions}. Direct from ${factory?.location || 'India'}. Factory pricing for architects, builders & distributors.`,
        keywords: [
            `${product.name}`,
            `${product.name} ${product.category.toLowerCase()}`,
            `Indian ${product.category.toLowerCase()}`,
            `${product.category.toLowerCase()} exporter India`,
            `${product.category.toLowerCase()} slab India`,
            `premium ${product.category.toLowerCase()} India`,
            `buy ${product.name} India`,
        ],
        openGraph: {
            title: `${product.name} — Premium Indian ${product.category}`,
            description: product.description,
            images: [{ url: product.image, alt: product.altText || product.name }],
        },
    };
}

export default async function ProductDetail({ params }: Props) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    const factory = FACTORIES.find(f => f.id === product.factoryId);

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "category": product.category,
        "brand": {
            "@type": "Brand",
            "name": "Gouri Exports"
        },
        "manufacturer": {
            "@type": "Organization",
            "name": "Gouri Exports",
            "url": "https://gourigroupindia.com"
        },
        "material": product.category,
        "countryOfOrigin": "IN",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD"
            },
            "seller": {
                "@type": "Organization",
                "name": "Gouri Exports"
            }
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gourigroupindia.com" },
            { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://gourigroupindia.com/products" },
            { "@type": "ListItem", "position": 3, "name": product.name, "item": `https://gourigroupindia.com/products/${product.id}` }
        ]
    };

    return (
        <main className={styles.pageContainer}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className={`container ${styles.content}`}>
                <Link href="/products" className={styles.backLink}>
                    &larr; Back to Catalog
                </Link>

                <div className={styles.productGrid}>
                    {/* Image Section */}
                    <div className={styles.imageSection}>
                        <div className={styles.mainImage}>
                            <Image
                                src={getOptimizedCloudinaryUrl(product.image, 1000)}
                                alt={product.altText || product.name}
                                width={1000}
                                height={750}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                priority
                            />
                        </div>
                        <div className={styles.thumbnails}>
                            <div className={styles.thumbnail}></div>
                            <div className={styles.thumbnail}></div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className={styles.detailsSection}>
                        <h1>{product.name}</h1>
                        <p className={styles.category}>{product.category} Series</p>

                        <p className={styles.description}>
                            {product.description}
                        </p>

                        <div className={styles.specsSection}>
                            <h2>Technical Specifications</h2>
                            <div className={styles.specsGrid}>
                                <div>
                                    <span className={styles.specLabel}>Finish</span>
                                    <span className={styles.specValue}>{product.finish}</span>
                                </div>
                                <div>
                                    <span className={styles.specLabel}>Dimensions</span>
                                    <span className={styles.specValue}>{product.dimensions}</span>
                                </div>
                                <div>
                                    <span className={styles.specLabel}>Origin</span>
                                    <span className={styles.specValue}>{factory?.location || 'India'}</span>
                                </div>
                                <div>
                                    <span className={styles.specLabel}>Usage</span>
                                    <span className={styles.specValue}>Interior / Exterior</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <Link href={`/lead-generation?product=${encodeURIComponent(product.name)}`} className="btn btn-primary" aria-label={`Get custom estimate for ${product.name}`}>
                                Get Custom Estimate
                            </Link>
                            <Link href={`/contact?sample=${encodeURIComponent(product.name)}`} className="btn btn-outline" aria-label={`Request sample of ${product.name}`}>
                                Request Sample
                            </Link>
                        </div>

                        {/* Direct Lead Gen Banner */}
                        <div className={styles.leadGenBanner}>
                            <h2>Wholesale Project Supply?</h2>
                            <p>We process container-load orders directly from quarries with inspection reports.</p>
                            <Link href={`/lead-generation?product=${encodeURIComponent(product.name)}`} className={styles.leadGenLink}>
                                Request Factory Volume Rates &rarr;
                            </Link>
                        </div>

                        <div className={styles.features}>
                            <span className={styles.feature}><Truck size={18} /> Global Shipping</span>
                            <span className={styles.feature}><Download size={18} /> Download Spec Sheet</span>
                            <span className={styles.feature}><Share2 size={18} /> Share</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
