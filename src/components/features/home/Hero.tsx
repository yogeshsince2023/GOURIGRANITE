'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Award, Globe, CheckCircle } from 'lucide-react';
import styles from './Hero.module.css';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);

    const trustItems = [
        { icon: CheckCircle, text: 'Direct from 3 Indian quarries' },
        { icon: Globe, text: 'Shipped to 50+ countries' },
    ];

    return (
        <motion.section
            className={styles.hero}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
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
                    <source src="https://res.cloudinary.com/dvlapdn5x/video/upload/v1770790212/Background_ozszff.mp4" type="video/mp4" />
                </video>
            </motion.div>

            <motion.div
                className={styles.content}
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <motion.h1
                    className={styles.title}
                    variants={textVariant(0.2)}
                >
                    Exporting Earth's Finest Stone Globally
                </motion.h1>

                {/* Trust Bullets */}
                <motion.div
                    className={styles.trustBullets}
                    variants={fadeIn('up', 0.3)}
                >
                    {trustItems.map((item, index) => (
                        <div key={index} className={styles.trustItem}>
                            <item.icon size={20} />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </motion.div>

                <motion.p
                    className={styles.subtitle}
                    variants={textVariant(0.4)}
                >
                    Premium marble, granite, and natural stone from our manufacturing facilities in Rajasthan and Telangana. Trusted by architects and builders worldwide.
                </motion.p>

                <motion.div
                    className={styles.actions}
                    variants={fadeIn('up', 0.6)}
                >
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
                </motion.div>

                {/* Certification Badges */}
                <motion.div
                    className={styles.certifications}
                    variants={fadeIn('up', 0.8)}
                >
                    <div className={styles.badge}>
                        <Globe size={24} />
                        <span>Export House</span>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
