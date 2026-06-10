import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, FACTORIES } from '@/lib/data';
import { Share2, Download, Truck } from 'lucide-react';
import styles from './productDetail.module.css';

interface Props {
    params: Promise<{ id: string }>;
}

export function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductDetail({ params }: Props) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    const factory = FACTORIES.find(f => f.id === product.factoryId);

    return (
        <main className={styles.pageContainer}>
            <div className={`container ${styles.content}`}>
                <Link href="/products" className={styles.backLink}>
                    &larr; Back to Catalog
                </Link>

                <div className={styles.productGrid}>
                    {/* Image Section */}
                    <div className={styles.imageSection}>
                        <div className={styles.mainImage}>
                            <img src={product.image} alt={product.name} />
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
                            <h3>Technical Specifications</h3>
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
                            <h4>Wholesale Project Supply?</h4>
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
