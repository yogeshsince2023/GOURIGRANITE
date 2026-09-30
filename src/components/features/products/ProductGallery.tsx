'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductGallery.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Zoom } from 'swiper/modules';
import { ALL_STONES, CATEGORIES, StoneCategory, StoneItem } from '@/lib/data';
import { STONE_BLUR_DATA_URL } from '@/lib/cloudinary';
import { ArrowRight, BookOpen } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

// Build lightweight, responsive Cloudinary URL (f_auto, q_auto for 70%+ bandwidth savings on mobile)
function getOptimizedGalleryUrl(url: string, width: number = 650): string {
    if (!url || !url.includes('res.cloudinary.com')) return url;

    const uploadMarker = '/upload/';
    const index = url.indexOf(uploadMarker);
    if (index === -1) return url;

    const preUpload = url.substring(0, index + uploadMarker.length);
    const postUpload = url.substring(index + uploadMarker.length);

    // Using f_auto,q_auto gives optimal mobile & iPad compression (AVIF/WebP, ultra-low bytes)
    return `${preUpload}f_auto,q_auto,w_${width}/${postUpload}`;
}

// Fisher-Yates shuffle
function shuffleStones<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const INITIAL_LOAD_COUNT = 12;
const LOAD_MORE_COUNT = 12;

export default function ProductGallery() {
    const [activeCategory, setActiveCategory] = useState<StoneCategory>('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [initialSlide, setInitialSlide] = useState(0);
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
    const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD_COUNT);
    const [shuffledAllStones, setShuffledAllStones] = useState<StoneItem[]>([]);
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    // Shuffle stones randomly for the 'All' tab on mount
    useEffect(() => {
        setShuffledAllStones(shuffleStones(ALL_STONES));
    }, []);

    // Filter stones by active category:
    // - 'All': beautifully shuffled mix of all stones
    // - 'Granite': ordered Granite stones
    // - 'Marble & Quartz': ordered Marble & Quartz stones
    const filteredStones = useMemo(() => {
        if (activeCategory === 'All') {
            return shuffledAllStones.length > 0 ? shuffledAllStones : ALL_STONES;
        }
        if (activeCategory === 'Granite') {
            return ALL_STONES.filter(stone => stone.category === 'Granite');
        }
        return ALL_STONES.filter(stone => stone.category === 'Marble & Quartz');
    }, [activeCategory, shuffledAllStones]);

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

    const visibleStones = filteredStones.slice(0, visibleCount);
    const hasMore = visibleCount < filteredStones.length;

    // Load progressively only when user scrolls near the bottom of the grid
    useEffect(() => {
        if (!hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    setVisibleCount(prev => Math.min(prev + LOAD_MORE_COUNT, filteredStones.length));
                }
            },
            { rootMargin: '300px 0px' }
        );

        const sentinel = sentinelRef.current;
        if (sentinel) {
            observer.observe(sentinel);
        }

        return () => {
            if (sentinel) {
                observer.unobserve(sentinel);
            }
        };
    }, [hasMore, filteredStones.length]);

    const handleCategoryChange = (cat: StoneCategory) => {
        if (activeCategory !== cat) {
            setActiveCategory(cat);
            setVisibleCount(INITIAL_LOAD_COUNT);
            setLoadedImages(new Set());
        }
    };

    return (
        <div className={styles.galleryContainer}>
            {/* Gallery Header */}
            <div className={styles.galleryHeader}>
                <h1 className={styles.galleryTitle}>Our Stone Collection</h1>
                <p className={styles.gallerySubtitle}>
                    Explore our premium range of natural stones — curated direct from Indian quarries in exceptional quality.
                </p>

                {/* Category Navigation Tabs */}
                <div className={styles.categoryNav} role="tablist" aria-label="Stone Categories">
                    {CATEGORIES.map((cat) => {
                        const count = cat === 'All'
                            ? ALL_STONES.length
                            : ALL_STONES.filter(s => s.category === cat).length;
                        return (
                            <button
                                key={cat}
                                role="tab"
                                aria-selected={activeCategory === cat}
                                className={`${styles.categoryTab} ${activeCategory === cat ? styles.categoryTabActive : ''}`}
                                onClick={() => handleCategoryChange(cat)}
                            >
                                <span>{cat}</span>
                                <span className={styles.categoryBadge}>{count}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Image Grid */}
            <div className={styles.galleryGrid}>
                {visibleStones.map((stone, index) => (
                    <div
                        key={`${stone.id}-${index}`}
                        className={styles.imageContainer}
                        onClick={() => openLightbox(index)}
                        style={{ animationDelay: `${Math.min(index * 0.04, 0.5)}s` }}
                    >
                        {/* Category Tag */}
                        <div className={styles.cardTag}>
                            <span className={stone.category === 'Granite' ? styles.tagGranite : styles.tagMarble}>
                                {stone.category}
                            </span>
                        </div>

                        {/* Luxury Skeleton Loader */}
                        <div className={`${styles.skeleton} ${loadedImages.has(index) ? styles.skeletonHidden : ''}`}>
                            <div className={styles.skeletonSpinner}></div>
                        </div>

                        {/* High Quality Optimized Image */}
                        <Image
                            src={getOptimizedGalleryUrl(stone.url, 650)}
                            alt={`${stone.title} - ${stone.category}`}
                            fill
                            className={`${styles.galleryImage} ${loadedImages.has(index) ? styles.imageLoaded : styles.imageLoading}`}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            placeholder="blur"
                            blurDataURL={STONE_BLUR_DATA_URL}
                            priority={index < 2}
                            loading={index < 2 ? "eager" : "lazy"}
                            onLoad={() => handleImageLoad(index)}
                        />
                    </div>
                ))}
            </div>

            {/* Infinite Scroll Sentinel: triggers next batch as user scrolls */}
            <div ref={sentinelRef} className={styles.sentinel}>
                {hasMore && (
                    <div className={styles.scrollLoadingIndicator}>
                        <div className={styles.scrollSpinner}></div>
                        <span>Loading more {activeCategory === 'All' ? 'stones' : activeCategory}...</span>
                    </div>
                )}
            </div>

            {/* Catalogue CTA */}
            <div className={styles.galleryFooter}>
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
                        {filteredStones.map((stone, index) => (
                            <SwiperSlide key={`lightbox-${stone.id}-${index}`} className={styles.lightboxSlide}>
                                <div className="swiper-zoom-container">
                                    <Image
                                        src={getOptimizedGalleryUrl(stone.url, 1400)}
                                        alt={`${stone.title} - ${stone.category}`}
                                        width={1600}
                                        height={1200}
                                        className={styles.lightboxImage}
                                        priority={false}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={STONE_BLUR_DATA_URL}
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

