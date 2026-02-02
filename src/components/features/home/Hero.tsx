'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);

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
                    <source src="/images/Background.mp4" type="video/mp4" />
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
                <motion.p
                    className={styles.subtitle}
                    variants={textVariant(0.4)}
                >
                    Premium marble and granite from our quarries in India, delivered to architects and builders worldwide.
                </motion.p>

                <motion.div
                    className={styles.actions}
                    variants={fadeIn('up', 0.6)}
                >
                    <Link
                        href="/products"
                        className="btn btn-primary"
                        style={{ backgroundColor: 'var(--accent)', borderColor: 'var(--accent)' }}
                    >
                        View Catalog
                    </Link>
                    <Link
                        href="/contact"
                        className="btn btn-outline"
                        style={{ color: 'white', borderColor: 'white' }}
                    >
                        Request Quote
                    </Link>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
