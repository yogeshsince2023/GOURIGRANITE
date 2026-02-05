'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import styles from './ProductGallery.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion, Variants } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface ProductGalleryProps {
    products: Product[];
}

export default function ProductGallery({ products }: ProductGalleryProps) {
    const featuredProducts = products.filter(p => p.featured);
    const galleryProducts = products; // Show all products in the gallery grid

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
            {/* Hero Carousel */}
            <section className={styles.carouselSection}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    effect={'fade'}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    className="h-full w-full"
                    style={{ height: '100%' }}
                >
                    {featuredProducts.map((product) => (
                        <SwiperSlide key={product.id} className={styles.swiperSlide}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                priority
                                className={styles.slideImage}
                            />
                            <div className={styles.slideContent}>
                                <h2 className={styles.slideTitle}>{product.name}</h2>
                                <p className={styles.slideDescription}>{product.description}</p>
                                {/* <Link href={`/products/${product.id}`}>
                                    <button className={styles.slideButton}>View Stone</button>
                                </Link> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Gallery Grid */}
            <section className={styles.gridSection}>
                <div className={styles.gridHeader}>
                    <h2 className={styles.gridTitle}>Complete Collection</h2>
                    <p className={styles.gridSubtitle}>
                        Discover our comprehensive range of nature's finest masterpieces, ethically sourced and processed to perfection.
                    </p>
                </div>

                <motion.div 
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {galleryProducts.map((product) => (
                        <motion.div key={product.id} variants={itemVariants}>
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}
