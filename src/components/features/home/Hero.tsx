import Link from 'next/link';
import { Globe, CheckCircle } from 'lucide-react';
import styles from './Hero.module.css';

const POSTER_URL = "https://res.cloudinary.com/dvlapdn5x/image/upload/f_auto,q_75,w_800/v1770790198/factory1_uzv7wd.jpg";

export default function Hero() {
    const trustItems = [
        { icon: CheckCircle, text: 'Direct from 3 Indian quarries' },
        { icon: Globe, text: 'Shipped to 40+ countries' },
    ];

    return (
        <section className={styles.hero}>
            <div className={styles.backgroundWrapper}>
                <video
                    className={styles.backgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={POSTER_URL}
                    {...{ fetchPriority: 'high' }}
                    style={{ backgroundColor: '#2b261b' }}
                >
                    {/* Mobile (< 768px): Lightweight 480p WebM (600KB) */}
                    <source
                        src="https://res.cloudinary.com/dvlapdn5x/video/upload/f_webm,q_auto,vc_vp9,w_480/v1770790212/Background_ozszff.mp4"
                        type="video/webm"
                        media="(max-width: 768px)"
                    />
                    <source
                        src="https://res.cloudinary.com/dvlapdn5x/video/upload/f_auto,q_auto,vc_auto,w_480/v1770790212/Background_ozszff.mp4"
                        type="video/mp4"
                        media="(max-width: 768px)"
                    />

                    {/* Desktop / Tablet: Optimized 720p WebM (~1MB) & MP4 fallback */}
                    <source
                        src="https://res.cloudinary.com/dvlapdn5x/video/upload/f_webm,q_auto,vc_vp9,w_720/v1770790212/Background_ozszff.mp4"
                        type="video/webm"
                    />
                    <source
                        src="https://res.cloudinary.com/dvlapdn5x/video/upload/f_auto,q_auto,vc_auto,w_720/v1770790212/Background_ozszff.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>
                    Premium Indian Granite, Marble &amp; Quartzite Exporters — Gouri Exports
                </h1>

                {/* Trust Bullets */}
                <div className={styles.trustBullets}>
                    {trustItems.map((item, index) => (
                        <div key={index} className={styles.trustItem}>
                            <item.icon size={20} />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>

                <p className={styles.subtitle}>
                    Gouri Exports offers premium Indian natural stones, including Granite, Marble and Quartzite, carefully selected and processed for quality, beauty and durability. We provide blocks, slabs, tiles and cut-to-size solutions for residential, commercial and luxury architectural projects worldwide.
                </p>

                <div className={styles.actions}>
                    <Link
                        href="/contact"
                        prefetch={false}
                        className={`btn ${styles.primaryCta}`}
                    >
                        Get Your Free Stone Quote Today
                    </Link>
                    <Link
                        href="/products"
                        prefetch={false}
                        className={`btn ${styles.secondaryCta}`}
                    >
                        Explore Our Fine Stone Collection
                    </Link>
                </div>

                <div className={styles.ctaSubtitle}>
                    <span>From Indian quarries to global projects</span>
                    <span className={styles.divider}>|</span>
                    <span>Quality is our First Priority</span>
                </div>

                {/* Certification Badges */}
                <div className={styles.certifications}>
                    <div className={styles.badge}>
                        <Globe size={24} />
                        <span>Export House</span>
                    </div>
                </div>

                {/* Hero Quick Navigation Block */}
                <nav className={styles.quickNav} aria-label="Hero Quick Links">
                    <Link href="/products" prefetch={false} className={styles.quickNavLink}>
                        Premium Marble Catalog
                    </Link>
                    <span className={styles.quickNavDot}>&bull;</span>
                    <Link href="/factories" prefetch={false} className={styles.quickNavLink}>
                        Granite Export Factories
                    </Link>
                    <span className={styles.quickNavDot}>&bull;</span>
                    <Link href="/about" prefetch={false} className={styles.quickNavLink}>
                        Why Gouri Exports
                    </Link>
                    <span className={styles.quickNavDot}>&bull;</span>
                    <Link href="/contact" prefetch={false} className={styles.quickNavLink}>
                        Request a Quote
                    </Link>
                </nav>
            </div>
        </section>
    );
}
