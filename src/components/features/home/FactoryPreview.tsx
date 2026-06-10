'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Award } from 'lucide-react';
import styles from './FactoryPreview.module.css';
import { FACTORIES } from '@/lib/data';
import { fadeIn } from '@/lib/animations';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';

const getFactorySlug = (id: string) => {
    switch (id) {
        case 'f1': return 'kishangarh-marble-udhyog';
        case 'f2': return 'kishangarh-granites';
        case 'f3': return 'karimnagar-granito';
        default: return '';
    }
};

export default function FactoryPreview() {
    const [loadedFactories, setLoadedFactories] = useState<Set<string>>(new Set());

    const handleFactoryImageLoad = (factoryId: string) => {
        setLoadedFactories(prev => new Set(prev).add(factoryId));
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <h2>Manufacturing Excellence – State-of-the-Art Stone Processing Facilities</h2>
                    <p>Manufacturing Excellence. State-of-the-art facilities processing over 2 million sq ft annually across India.</p>
                </div>

                <div className={styles.grid}>
                    {FACTORIES.map((factory, index) => (
                        <motion.div
                            key={factory.id}
                            className={styles.card}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className={styles.media}>
                                {!loadedFactories.has(factory.id) && <div className={styles.skeleton}></div>}
                                <Image
                                    src={getOptimizedCloudinaryUrl(factory.image, 800)}
                                    alt={factory.altText || factory.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className={`${styles.image} ${loadedFactories.has(factory.id) ? styles.imageLoaded : styles.imageLoading}`}
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23b0b0b0' width='400' height='300'/%3E%3C/svg%3E"
                                    loading="lazy"
                                    onLoad={() => handleFactoryImageLoad(factory.id)}
                                />
                                <div className={styles.mediaOverlay} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>
                                    <Link
                                        href={`/factories/${getFactorySlug(factory.id)}`}
                                        className={styles.link}
                                    >
                                        {factory.name}
                                    </Link>
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
                                
                                <div style={{ marginTop: '1.5rem' }}>
                                    <Link
                                        href={`/factories/${getFactorySlug(factory.id)}`}
                                        className="btn btn-outline"
                                        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                                    >
                                        View Factory Profile
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="/factories" className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>
                        Explore Global Presence
                    </Link>
                </div>
            </div>
        </section>
    );
}
