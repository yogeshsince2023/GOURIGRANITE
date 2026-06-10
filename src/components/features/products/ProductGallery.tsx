'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductGallery.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Zoom } from 'swiper/modules';
import { GALLERY_IMAGES } from '@/lib/data';
import { ArrowRight, BookOpen } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Deduplicate URLs by their filename (last path segment)
function deduplicateByFilename(urls: string[]): string[] {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const url of urls) {
        const filename = url.split('/').pop() || url;
        if (!seen.has(filename)) {
            seen.add(filename);
            result.push(url);
        }
    }
    return result;
}

// Build high-quality Cloudinary URL
function getHighQualityUrl(url: string, width?: number): string {
    if (!url || !url.includes('res.cloudinary.com')) return url;

    const uploadMarker = '/upload/';
    const index = url.indexOf(uploadMarker);
    if (index === -1) return url;

    const preUpload = url.substring(0, index + uploadMarker.length);
    const postUpload = url.substring(index + uploadMarker.length);

    const transforms = ['f_auto', 'q_90'];
    if (width) {
        transforms.push(`w_${width}`);
    }

    return `${preUpload}${transforms.join(',')}/${postUpload}`;
}

const INITIAL_LOAD_COUNT = 24;
const LOAD_MORE_COUNT = 12;

export default function ProductGallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [initialSlide, setInitialSlide] = useState(0);
    const [shuffledImages, setShuffledImages] = useState<string[]>([]);
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
    const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD_COUNT);

    // Deduplicate and shuffle on mount
    useEffect(() => {
        const unique = deduplicateByFilename(GALLERY_IMAGES);
        const randomized = shuffleArray(unique);
        setShuffledImages(randomized);
    }, []);

    // Handle body scroll locking for lightbox
    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [lightboxOpen]);

    const openLightbox = (index: number) => {
        setInitialSlide(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const handleImageLoad = useCallback((index: number) => {
        setLoadedImages(prev => new Set(prev).add(index));
    }, []);

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + LOAD_MORE_COUNT, shuffledImages.length));
    };

    const visibleImages = shuffledImages.slice(0, visibleCount);
    const hasMore = visibleCount < shuffledImages.length;

    return (
        <div className={styles.galleryContainer}>
            {/* Gallery Header */}
            <div className={styles.galleryHeader}>
                <h1 className={styles.galleryTitle}>Our Stone Collection</h1>
                <p className={styles.gallerySubtitle}>
                    Explore our premium range of natural stones — each image in full, uncompromised quality.
                </p>
                <span className={styles.imageCount}>
                    Showing {visibleImages.length} of {shuffledImages.length} stones
                </span>
            </div>

            {/* Image Grid */}
            <div className={styles.galleryGrid}>
                {visibleImages.map((imageUrl, index) => (
                    <div
                        key={`gallery-${index}`}
                        className={styles.imageContainer}
                        onClick={() => openLightbox(index)}
                        style={{ animationDelay: `${Math.min(index * 0.05, 1)}s` }}
                    >
                        {/* Skeleton Loader */}
                        {!loadedImages.has(index) && (
                            <div className={styles.skeleton}></div>
                        )}

                        {/* High Quality Image */}
                        <Image
                            src={getHighQualityUrl(imageUrl, 800)}
                            alt={`Premium natural stone - ${index + 1}`}
                            fill
                            className={`${styles.galleryImage} ${loadedImages.has(index) ? styles.imageLoaded : styles.imageLoading}`}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 75'%3E%3Crect fill='%23d4c5a9' width='100' height='75'/%3E%3C/svg%3E"
                            loading="lazy"
                            onLoad={() => handleImageLoad(index)}
                        />
                    </div>
                ))}
            </div>

            {/* Load More / Catalogue CTA */}
            <div className={styles.galleryFooter}>
                {hasMore && (
                    <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
                        Load More Stones
                        <span className={styles.loadMoreCount}>
                            +{Math.min(LOAD_MORE_COUNT, shuffledImages.length - visibleCount)} more
                        </span>
                    </button>
                )}

                <Link href="/catalogue" className={styles.catalogueCta}>
                    <BookOpen size={20} />
                    <span>View Complete Catalogue with Specifications</span>
                    <ArrowRight size={18} />
                </Link>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className={styles.lightboxOverlay}>
                    <button className={styles.lightboxClose} onClick={closeLightbox}>
                        &times;
                    </button>
                    <Swiper
                        modules={[Navigation, Pagination, Zoom, Keyboard]}
                        initialSlide={initialSlide}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        zoom={{ maxRatio: 3 }}
                        keyboard={{ enabled: true }}
                        loop={true}
                        className={styles.lightboxSwiper}
                    >
                        {shuffledImages.map((imageUrl, index) => (
                            <SwiperSlide key={`lightbox-${index}`} className={styles.lightboxSlide}>
                                <div className="swiper-zoom-container">
                                    <Image
                                        src={getHighQualityUrl(imageUrl, 1600)}
                                        alt={`Premium natural stone full view - ${index + 1}`}
                                        width={1600}
                                        height={1200}
                                        className={styles.lightboxImage}
                                        priority={false}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 75'%3E%3Crect fill='%23333333' width='100' height='75'/%3E%3C/svg%3E"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}
