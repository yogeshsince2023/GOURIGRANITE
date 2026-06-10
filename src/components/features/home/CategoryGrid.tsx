'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Maximize2, X } from 'lucide-react';
import styles from './CategoryGrid.module.css';
import { GALLERY_IMAGES } from '@/lib/data';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';

// Pick a curated subset of 12 images for the homepage showcase
// We'll pick specific indices that represent diverse stone types
const HOMEPAGE_IMAGE_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default function CategoryGrid() {
    const [homepageImages, setHomepageImages] = useState<string[]>([]);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

    useEffect(() => {
        // Shuffle all gallery images and pick 12 for the homepage
        const shuffled = shuffleArray(GALLERY_IMAGES);
        setHomepageImages(shuffled.slice(0, 12));
    }, []);

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
                            <Link href="/products" className={styles.cta} aria-label="View full gallery of stones">
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
                                        {/* Skeleton */}
                                        {!loadedImages.has(index) && (
                                            <div className={styles.skeleton}></div>
                                        )}
                                        <Image
                                            src={getOptimizedCloudinaryUrl(imageUrl, 600)}
                                            alt={`Premium natural stone - ${index + 1}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 30vw"
                                            className={`${styles.stoneImage} ${loadedImages.has(index) ? styles.imageLoaded : styles.imageLoading}`}
                                            placeholder="blur"
                                            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23d4c5a9' width='400' height='400'/%3E%3C/svg%3E"
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
                                View All {GALLERY_IMAGES.length}+ Stones in Gallery
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
