import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, FACTORIES } from '@/lib/data';
import { Share2, Download, Truck } from 'lucide-react';
import styles from './productDetail.module.css';

interface Props {
    params: { id: string };
}

export function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id,
    }));
}

export default function ProductDetail({ params }: Props) {
    const product = PRODUCTS.find((p) => p.id === params.id);

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
                            <Link href="/contact" className="btn btn-primary">Request Quote</Link>
                            <button className="btn btn-outline">Request Sample</button>
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
