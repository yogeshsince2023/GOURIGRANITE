'use client';

import { useState } from 'react';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import styles from './Catalog.module.css';

interface CatalogProps {
    products: Product[];
}

export default function Catalog({ products }: CatalogProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedFinish, setSelectedFinish] = useState<string | null>(null);

    const categories = Array.from(new Set(products.map(p => p.category)));
    const finishes = Array.from(new Set(products.map(p => p.finish)));

    const filteredProducts = products.filter(product => {
        if (selectedCategory && product.category !== selectedCategory) return false;
        if (selectedFinish && product.finish !== selectedFinish) return false;
        return true;
    });

    return (
        <div className={`container ${styles.container}`}>
            <aside className={styles.sidebar}>
                <div className={styles.filterGroup}>
                    <h3 className={styles.filterTitle}>Category</h3>
                    <label className={styles.filterOption}>
                        <input
                            type="radio"
                            name="category"
                            className={styles.checkbox}
                            checked={selectedCategory === null}
                            onChange={() => setSelectedCategory(null)}
                        />
                        All Categories
                    </label>
                    {categories.map(cat => (
                        <label key={cat} className={styles.filterOption}>
                            <input
                                type="radio"
                                name="category"
                                className={styles.checkbox}
                                checked={selectedCategory === cat}
                                onChange={() => setSelectedCategory(cat)}
                            />
                            {cat}
                        </label>
                    ))}
                </div>

                <div className={styles.filterGroup}>
                    <h3 className={styles.filterTitle}>Finish</h3>
                    <label className={styles.filterOption}>
                        <input
                            type="radio"
                            name="finish"
                            className={styles.checkbox}
                            checked={selectedFinish === null}
                            onChange={() => setSelectedFinish(null)}
                        />
                        All Finishes
                    </label>
                    {finishes.map(finish => (
                        <label key={finish} className={styles.filterOption}>
                            <input
                                type="radio"
                                name="finish"
                                className={styles.checkbox}
                                checked={selectedFinish === finish}
                                onChange={() => setSelectedFinish(finish)}
                            />
                            {finish}
                        </label>
                    ))}
                </div>
            </aside>

            <div className={styles.grid}>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
                {filteredProducts.length === 0 && (
                    <p>No products found matching your filters.</p>
                )}
            </div>
        </div>
    );
}
