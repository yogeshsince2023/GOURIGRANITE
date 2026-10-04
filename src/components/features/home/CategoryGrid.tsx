'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Maximize2, X } from 'lucide-react';
import styles from './CategoryGrid.module.css';
import { GALLERY_IMAGES } from '@/lib/data';
import { getOptimizedCloudinaryUrl, STONE_BLUR_DATA_URL } from '@/lib/cloudinary';


// Deterministic seeded shuffle (Mulberry32) for zero layout shift and identical SSR/client rendering
function seededShuffle<T>(array: T[], seed: number = 2026): T[] {
    const shuffled = [...array];
    let s = seed;
    const random = () => {
        let t = (s += 0x6D2B79F5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const INITIAL_HOMEPAGE_IMAGES = seededShuffle(GALLERY_IMAGES, 2026).slice(0, 12);

export default function CategoryGrid() {
    const [homepageImages] = useState<string[]>(INITIAL_HOMEPAGE_IMAGES);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

    useEffect(() => {
        if (lightboxImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [lightboxImage]);

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => new Set(prev).add(index));
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.layout}>

                    {/* Left Column: Title & Description */}
                    <div className={styles.left}>
                        <div className={styles.kicker}>Premium Collection</div>
                        <h2 className={styles.title}>
                            Fine Stone Collection – Curated Indian Quarries & Colors
                        </h2>
                        <p className={styles.desc}>
                            Explore our finest selection of premium natural stones, sourced directly 
                            from Indian quarries. Each stone is hand-picked for exceptional quality, 
                            color consistency, and natural beauty.
                        </p>

                        {/* Direct Collections Links */}
                        <div className={styles.collectionLinks} aria-label="Direct Collections Links">
                            <Link href="/products" className={styles.collectionLink}>
                                Premium Granite Collection &rarr;
                            </Link>
                            <Link href="/products" className={styles.collectionLink}>
                                Luxury Marble Collection &rarr;
                            </Link>
                            <Link href="/catalogue" className={styles.collectionLink}>
                                Download Full Catalogue &rarr;
                            </Link>
                        </div>

                        {/* View All Gallery Button */}
                        <div style={{ marginTop: '2.5rem' }}>
                            <Link href="/products" className={styles.cta}>
                                Explore Full Gallery <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Image Grid */}
                    <div className={styles.right}>
                        <div className={styles.explorerGrid}>
                            {homepageImages.map((imageUrl, index) => (
                                <div
                                    key={`home-stone-${index}`}
                                    className={styles.stoneCard}
                                    style={{ animationDelay: `${index * 0.08}s` }}
                                >
                                    <div className={styles.imageWrapper}>
                                        {/* Luxury Skeleton Loader */}
                                        <div className={`${styles.skeleton} ${loadedImages.has(index) ? styles.skeletonHidden : ''}`}>
                                            <div className={styles.skeletonSpinner}></div>
                                        </div>
                                        <Image
                                            src={getOptimizedCloudinaryUrl(imageUrl, 600)}
                                            alt={`Premium natural stone - ${index + 1}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 30vw"
                                            className={`${styles.stoneImage} ${loadedImages.has(index) ? styles.imageLoaded : styles.imageLoading}`}
                                            placeholder="blur"
                                            blurDataURL={STONE_BLUR_DATA_URL}
                                            loading="lazy"
                                            onLoad={() => handleImageLoad(index)}
                                        />

                                        {/* Hover Overlay */}
                                        <div className={styles.cardHoverOverlay}>
                                            <div className={styles.overlayActions}>
                                                <button
                                                    className={styles.overlayBtn}
                                                    onClick={() => setLightboxImage(imageUrl)}
                                                    aria-label={`View full size stone image ${index + 1}`}
                                                >
                                                    <Maximize2 size={16} /> Quick View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View More CTA below the grid */}
                        <div className={styles.gridFooter}>
                            <Link href="/products" className={styles.viewMoreBtn}>
                                View All Stones in Gallery
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Lightbox */}
            {lightboxImage && (
                <div className={styles.modalBackdrop} onClick={() => setLightboxImage(null)}>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={() => setLightboxImage(null)} aria-label="Close lightbox">
                            <X size={24} />
                        </button>
                        <Image
                            src={getOptimizedCloudinaryUrl(lightboxImage, 1400)}
                            alt="Premium stone full view"
                            width={1400}
                            height={1050}
                            className={styles.lightboxImage}
                            priority
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
