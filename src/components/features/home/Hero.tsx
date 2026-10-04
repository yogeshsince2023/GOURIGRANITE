'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Globe, CheckCircle } from 'lucide-react';
import styles from './Hero.module.css';
import { getOptimizedCloudinaryUrl, getOptimizedCloudinaryVideoUrl } from '@/lib/cloudinary';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);

    const trustItems = [
        { icon: CheckCircle, text: 'Direct from 3 Indian quarries' },
        { icon: Globe, text: 'Shipped to 40+ countries' },
    ];

    return (
        <section className={styles.hero}>
            <motion.div
                className={styles.backgroundWrapper}
                style={{ y }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
            >
                <video
                    className={styles.backgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={getOptimizedCloudinaryUrl("https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790198/factory1_uzv7wd.jpg", 1920)}
                    style={{ backgroundColor: '#2b261b' }}
                >
                    <source src={getOptimizedCloudinaryVideoUrl("https://res.cloudinary.com/dvlapdn5x/video/upload/v1770790212/Background_ozszff.mp4")} type="video/mp4" />
                </video>
            </motion.div>

            <div
                className={styles.content}
            >
                <h1 className={styles.title}>
                    Premium Indian Granite, Marble & Quartzite Exporters — Gouri Exports
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
