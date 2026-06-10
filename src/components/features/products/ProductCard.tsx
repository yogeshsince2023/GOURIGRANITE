import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/lib/types';
import { Download } from 'lucide-react';
import styles from './ProductCard.module.css';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <Link href={`/products/${product.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                {!isImageLoaded && <div className={styles.skeleton}></div>}
                <Image
                    src={getOptimizedCloudinaryUrl(product.image, 600)}
                    alt={product.altText || product.name}
                    className={`${styles.image} ${isImageLoaded ? styles.imageLoaded : styles.imageLoading}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect fill='%23e0e0e0' width='300' height='400'/%3E%3C/svg%3E"
                    loading="lazy"
                    onLoad={() => setIsImageLoaded(true)}
                />
                {/* Hover Overlay */}
                <div className={styles.hoverOverlay}>
                    <div className={styles.hoverContent}>
                        <h4>{product.name}</h4>
                        {product.color && <p><strong>Color:</strong> {product.color}</p>}
                        <p><strong>Finish:</strong> {product.finish}</p>
                        <p><strong>Size:</strong> {product.dimensions}</p>
                        {product.applications && product.applications.length > 0 && (
                            <p><strong>Uses:</strong> {product.applications.join(', ')}</p>
                        )}
                        <button className={styles.sampleBtn}>
                            <Download size={16} />
                            Request Sample
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                <div className={styles.details}>
                    <span className={styles.badge}>{product.category}</span>
                    <span className={styles.badge}>{product.finish}</span>
                </div>
                <span className={styles.cta}>View Details &rarr;</span>
            </div>
        </Link>
    );
}
