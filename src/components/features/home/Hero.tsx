'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Globe, CheckCircle } from 'lucide-react';
import styles from './Hero.module.css';
import { fadeIn } from '@/lib/animations';
import { getOptimizedCloudinaryVideoUrl } from '@/lib/cloudinary';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);

    const trustItems = [
        { icon: CheckCircle, text: 'Direct from 3 Indian quarries' },
        { icon: Globe, text: 'Shipped to 50+ countries' },
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
                >
                    <source src={getOptimizedCloudinaryVideoUrl("https://res.cloudinary.com/dvlapdn5x/video/upload/v1770790212/Background_ozszff.mp4")} type="video/mp4" />
                </video>
            </motion.div>

            <motion.div
                className={styles.content}
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <h1 className={styles.title}>
                    Exporting Earth's Finest Stone Globally
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
                    Premium marble, granite, and natural stone from our manufacturing facilities in Rajasthan and Telangana. Trusted by architects and builders worldwide.
                </p>

                <div className={styles.actions}>
                    <Link
                        href="/products"
                        className={`btn ${styles.primaryCta}`}
                    >
                        View Catalog
                    </Link>
                    <Link
                        href="/contact"
                        className={`btn ${styles.secondaryCta}`}
                    >
                        Request Quote
                    </Link>
                </div>

                {/* Certification Badges */}
                <div className={styles.certifications}>
                    <div className={styles.badge}>
                        <Globe size={24} />
                        <span>Export House</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
