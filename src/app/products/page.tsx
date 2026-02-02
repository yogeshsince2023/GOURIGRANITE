import { PRODUCTS } from '@/lib/data';
import Catalog from '@/components/features/products/Catalog';
import styles from './products.module.css';

export default function ProductsPage() {
    return (
        <main className={styles.pageContainer}>
            <div className={styles.hero}>
                <h1>Our Collection</h1>
                <p>
                    Explore our premium range of ethically sourced natural stones.
                </p>
            </div>
            <Catalog products={PRODUCTS} />
        </main>
    );
}
