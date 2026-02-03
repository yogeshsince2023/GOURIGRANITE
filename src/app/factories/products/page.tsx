import { PRODUCTS } from '@/lib/data';
import Catalog from '@/components/features/products/Catalog';

export default function ProductsPage() {
    return (
        <main>
            <div style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', marginBottom: '1rem' }}>Our Collection</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: '#ccc' }}>
                    Explore our premium range of ethically sourced natural stones.
                </p>
            </div>
            <Catalog products={PRODUCTS} />
        </main>
    );
}
