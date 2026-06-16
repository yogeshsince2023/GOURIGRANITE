'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Globe, CheckCircle } from 'lucide-react';
import styles from './Hero.module.css';
import { fadeIn } from '@/lib/animations';
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
                    preload="auto"
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
                    Premium Marble & Granite Exporters from India – Gouri Exports
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
                    We offer premium marble, granite, and natural stone from our Rajasthan and Telangana facilities. As a leading granite exporter Rajasthan and marble exporter India, we are trusted by architects and builders worldwide.
                </p>

                <div className={styles.actions}>
                    <Link
                        href="/contact"
                        className={`btn ${styles.primaryCta}`}
                        aria-label="Request a free quote for premium marble and granite"
                    >
                        Get Your Free Stone Quote Today
                    </Link>
                    <Link
                        href="/products"
                        className={`btn ${styles.secondaryCta}`}
                        aria-label="Explore our premium marble and granite collections catalog"
                    >
                        Explore Our Fine Stone Collection
                    </Link>
                </div>

                <div className={styles.ctaSubtitle}>
                    <span>Premium marble & granite for architects and builders</span>
                    <span className={styles.divider}>|</span>
                    <span>Trusted by 40+ countries</span>
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
                    <Link href="/products" className={styles.quickNavLink} aria-label="View premium marble and granite catalog">
                        Premium Marble Catalog
                    </Link>
                    <span className={styles.quickNavDot}>&bull;</span>
                    <Link href="/factories" className={styles.quickNavLink} aria-label="Explore our global granite export factories">
                        Granite Export Factories
                    </Link>
                    <span className={styles.quickNavDot}>&bull;</span>
                    <Link href="/about" className={styles.quickNavLink} aria-label="Learn about Gouri Exports natural stone manufacturer info">
                        Why Gouri Exports
                    </Link>
                    <span className={styles.quickNavDot}>&bull;</span>
                    <Link href="/contact" className={styles.quickNavLink} aria-label="Request a marble and granite export quote">
                        Request a Quote
                    </Link>
                </nav>
            </div>
        </section>
    );
}
