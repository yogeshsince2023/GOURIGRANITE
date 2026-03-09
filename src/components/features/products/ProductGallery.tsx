'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types';
import styles from './ProductGallery.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Zoom } from 'swiper/modules';
import { motion, Variants } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

interface ProductGalleryProps {
    products: Product[];
}

export default function ProductGallery({ products }: ProductGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [initialSlide, setInitialSlide] = useState(0);
    const [randomizedProducts, setRandomizedProducts] = useState<Product[]>([]);
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

    // Shuffle function for random pattern
    const shuffleArray = (array: Product[]): Product[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Filter out factory photos and randomize products on mount and on every page reload
    useEffect(() => {
        // Filter products that don't use factory photos
        const filteredProducts = products.filter(
            product => !product.image.toLowerCase().includes('factory')
        );
        
        // Randomize the filtered products
        const randomized = shuffleArray(filteredProducts);
        setRandomizedProducts(randomized);
    }, []);

    // Handle body scroll locking
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

    // Handle image load completion
    const handleImageLoad = (productId: string) => {
        setLoadedImages(prev => new Set(prev).add(productId));
    };

    // Animation variants for grid items
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={styles.galleryContainer}>
            <motion.div 
                className={styles.galleryGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {randomizedProducts.map((product, index) => (
                    <motion.div 
                        key={product.id} 
                        variants={itemVariants}
                        className={styles.imageContainer}
                        onClick={() => openLightbox(index)}
                    >
                        {/* Skeleton Loader */}
                        {!loadedImages.has(product.id) && (
                            <div className={styles.skeleton}></div>
                        )}
                        
                        {/* Progressive Image Loading */}
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className={`${styles.galleryImage} ${loadedImages.has(product.id) ? styles.imageLoaded : styles.imageLoading}`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={100}
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 75'%3E%3Crect fill='%23e5e5e5' width='100' height='75'/%3E%3C/svg%3E"
                            loading="lazy"
                            onLoad={() => handleImageLoad(product.id)}
                        />
                    </motion.div>
                ))}
            </motion.div>

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
                        {randomizedProducts.map((product) => (
                            <SwiperSlide key={product.id} className={styles.lightboxSlide}>
                                <div className="swiper-zoom-container">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={1600}
                                        height={1200}
                                        className={styles.lightboxImage}
                                        quality={100}
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
