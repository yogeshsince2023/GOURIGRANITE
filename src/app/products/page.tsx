import ProductGallery from '@/components/features/products/ProductGallery';
import styles from './products.module.css';

export default function ProductsPage() {
    return (
        <main className={styles.pageContainer}>
            <ProductGallery />
        </main>
    );
}
