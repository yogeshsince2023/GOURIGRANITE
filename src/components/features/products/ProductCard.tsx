import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/products/${product.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={70}
                />
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
