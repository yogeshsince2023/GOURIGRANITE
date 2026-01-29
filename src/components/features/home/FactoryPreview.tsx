'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import styles from './FactoryPreview.module.css';
import { FACTORIES } from '@/lib/data';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';

export default function FactoryPreview() {
    useEffect(() => {
        console.log('Factory Images:', FACTORIES.map(factory => factory.image));
    }, []);

    return (
        <motion.section
            className={styles.section}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
        >
            <div className="container">
                <motion.div className={styles.heading} variants={staggerContainer(0.12, 0.05)}>
                    <motion.h2 variants={textVariant(0.05)}>Manufacturing Excellence</motion.h2>
                    <motion.p variants={textVariant(0.12)}>State-of-the-art facilities processing over 2M sq. ft. annually.</motion.p>
                </motion.div>

                <motion.div className={styles.grid} variants={staggerContainer(0.1, 0.15)}>
                    {FACTORIES.map((factory, index) => (
                        <motion.div
                            key={factory.id}
                            className={styles.card}
                            variants={fadeIn('up', index * 0.05)}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                        >
                            <div className={styles.media}>
                                {/* Debugging with a simple img tag */}
                                <img
                                    src={factory.image}
                                    alt={factory.name}
                                    style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                                />
                                <Image
                                    src={factory.image}
                                    alt={factory.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className={styles.image}
                                    quality={70}
                                />
                                <div className={styles.mediaOverlay} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${factory.name}, ${factory.location}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        {factory.name}
                                    </a>
                                </h3>
                                <p className={styles.subtitle}>{factory.location}</p>
                                <span className={styles.capacity}>Capacity: {factory.capacity}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className={styles.cta}>
                    <Link href="/factories" className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>
                        Explore Global Presence
                    </Link>
                </div>
            </div>
        </motion.section>
    );
}
