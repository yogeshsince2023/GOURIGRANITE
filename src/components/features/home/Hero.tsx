import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Image
                src="/images/10.jpeg"
                alt="Premium Stone Texture"
                className={styles.background}
                fill
                priority
                quality={75}
                sizes="100vw"
            />

            <div className={styles.content}>
                <h1 className={styles.title}>Exporting Earth's Finest Stone Globally</h1>
                <p className={styles.subtitle}>
                    Premium marble and granite from our quarries in India, delivered to architects and builders worldwide.
                </p>

                <div className={styles.actions}>
                    <Link href="/products" className="btn btn-primary" style={{ backgroundColor: 'var(--accent)', borderColor: 'var(--accent)' }}>
                        View Catalog
                    </Link>
                    <Link href="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                        Request Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}
