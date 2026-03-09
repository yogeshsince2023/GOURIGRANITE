'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Award, Cpu, AlertCircle } from 'lucide-react';
import styles from './FactoryPreview.module.css';
import { FACTORIES } from '@/lib/data';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';

export default function FactoryPreview() {
    const [loadedFactories, setLoadedFactories] = useState<Set<string>>(new Set());

    const handleFactoryImageLoad = (factoryId: string) => {
        setLoadedFactories(prev => new Set(prev).add(factoryId));
    };

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
                    <motion.p variants={textVariant(0.12)}>State-of-the-art facilities processing over 2M sq. ft. annually across India.</motion.p>
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
                                {!loadedFactories.has(factory.id) && <div className={styles.skeleton}></div>}
                                <Image
                                    src={factory.image}
                                    alt={factory.altText || factory.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className={`${styles.image} ${loadedFactories.has(factory.id) ? styles.imageLoaded : styles.imageLoading}`}
                                    quality={100}
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23b0b0b0' width='400' height='300'/%3E%3C/svg%3E"
                                    loading="lazy"
                                    onLoad={() => handleFactoryImageLoad(factory.id)}
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

                                {/* Capacity */}
                                <span className={styles.capacity}>Capacity: {factory.capacity}</span>

                                {/* Certifications */}
                                {factory.certifications && factory.certifications.length > 0 && (
                                    <div className={styles.certifications}>
                                        {factory.certifications.map((cert, idx) => (
                                            <span key={idx} className={styles.certBadge}>
                                                <Award size={12} /> {cert}
                                            </span>
                                        ))}
                                    </div>
                                )}
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
