import Link from 'next/link';
import Image from 'next/image';
import styles from './CategoryGrid.module.css';

const categories = [
    { name: 'Marble', image: '/images/6.jpeg' },
    { name: 'Granite', image: '/images/7.jpeg' },
    { name: 'Onyx', image: '/images/8.jpeg' },
    { name: 'Travertine', image: '/images/9.jpeg' },
];

export default function CategoryGrid() {
    return (
        <section className={styles.section} style={{ padding: '5rem 0' }}>
            <div className="container">
                <div className={styles.heading}>
                    <h2>Fine Stone Collection</h2>
                    <p>Curated from the best quarries across India.</p>
                </div>

                <div className={styles.grid}>
                    {categories.map((cat, index) => (
                        <Link
                            key={cat.name}
                            href={`/products?category=${cat.name}`}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                className={styles.image}
                                fill
                                sizes="(max-width: 768px) 100vw, 25vw"
                                quality={70}
                            />
                            <div className={styles.overlay}>
                                <h3 className={styles.name}>{cat.name}</h3>
                                <span className={styles.linkText}>View Collection</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
