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
                {products.map((product, index) => (
                    <motion.div 
                        key={product.id} 
                        variants={itemVariants}
                        className={styles.imageContainer}
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className={styles.galleryImage}
                            sizes="(max-width: 768px) 100vw, 33vw"
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
                        {products.map((product) => (
                            <SwiperSlide key={product.id} className={styles.lightboxSlide}>
                                <div className="swiper-zoom-container">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={1600}
                                        height={1200}
                                        className={styles.lightboxImage}
                                        priority={false} // Lazy load inside swiper except active? Swiper handles this decently.
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
