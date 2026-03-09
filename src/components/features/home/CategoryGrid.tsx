'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import styles from './CategoryGrid.module.css';
import { fadeIn, staggerContainer } from '@/lib/animations';

interface Slide {
    id: string;
    src: string;
    alt: string;
}

const slides: Slide[] = [
    { id: 'fine-1', src: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790204/fine_1_sbu8mz.png', alt: 'Black Galaxy Granite - Premium polished granite with gold speckles' },
    { id: 'fine-2', src: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790198/fine_2_iyetda.avif', alt: 'Statuario Marble - Premium white marble with bold grey veining' },
    { id: 'fine-3', src: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790199/fine_3_x4ksci.jpg', alt: 'Honey Onyx - Translucent stone with warm amber tones' },
    { id: 'fine-4', src: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790200/fine_4_fck0fe.jpg', alt: 'Silver Travertine - Contemporary silver-grey travertine' },
    { id: 'fine-5', src: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790199/fine_5_jkote4.jpg', alt: 'Rainforest Green - Exotic green marble with brown veins' },
    { id: 'fine-6', src: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790200/fine_6_w4s3if.jpg', alt: 'Imperial Red - Deep red granite with blue-black accents' },
    { id: 'fine-7', src: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790201/fine_7_jcq1dn.jpg', alt: 'Alaska White - Frosty pale silver and white granite' },
    { id: 'fine-8', src: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790201/fine_8_vmbbce.jpg', alt: 'Ocean Blue - Deep blue granite with white wave patterns' },
];

export default function CategoryGrid() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);

    // Use first 4 images and create seamless duplicates
    const visibleSlides = [...slides.slice(0, 4)];
    // Create exactly 2 sets for perfect infinite loop
    const duplicatedSlides = [...visibleSlides, ...visibleSlides];

    // Auto-scroll the marquee with perfect infinite loop
    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        const slideWidth = 450; // Match your new slide width
        const gap = 40; // Match your new gap
        const totalWidth = (slideWidth + gap) * visibleSlides.length;
        let animationFrameId: number;
        let currentScroll = 0;
        let lastTimestamp = 0;

        // Initialize position
        marquee.style.transform = 'translateX(0)';

        const animate = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const deltaTime = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            // Calculate scroll speed (pixels per millisecond)
            const scrollSpeed = 0.05; // Adjust for desired speed
            currentScroll += scrollSpeed * deltaTime;

            // Create seamless loop - reset when reaching the end
            if (currentScroll >= totalWidth) {
                // Instantly reset to start position
                currentScroll = currentScroll % totalWidth;
                marquee.style.transition = 'none';
                marquee.style.transform = `translateX(-${currentScroll}px)`;
                // Force reflow
                void marquee.offsetHeight;
                // Continue animation immediately
                marquee.style.transition = 'transform 0.1s linear';
            }

            // Apply smooth transform
            marquee.style.transform = `translateX(-${currentScroll}px)`;

            // Request next frame
            animationFrameId = requestAnimationFrame(animate);
        };

        // Start animation
        animationFrameId = requestAnimationFrame(animate);
        animationRef.current = animationFrameId;

        // Cleanup
        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [visibleSlides.length]);

    return (
        <motion.section
            className={styles.section}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
        >
            <div className="container">
                <motion.div className={styles.layout} variants={staggerContainer(0.15, 0.05)}>
                    <motion.div className={styles.left} variants={fadeIn('up', 0)}>
                        <div className={styles.kicker}>Collections</div>
                        <h2 className={styles.title}>Fine Stone Collection</h2>
                        <p className={styles.desc}>Curated from the best quarries across India.</p>

                        <div className={styles.tabs}>
                            <div className={styles.tab}>Popular Collection</div>
                            <div className={styles.tab}>Stone by Colours</div>
                            <div className={styles.tab}>Stone by Spaces</div>
                        </div>

                        <Link href="/products" className={styles.cta}>
                            View all
                        </Link>
                    </motion.div>

                    <motion.div
                        className={styles.right}
                        variants={fadeIn('up', 0.05)}
                    >
                        <div className={styles.viewport}>
                            <div ref={marqueeRef} className={styles.marquee}>
                                {duplicatedSlides.map((s, i) => (
                                    <div key={`${s.id}-${i}`} className={styles.slide}>
                                        <Image
                                            src={s.src}
                                            alt={s.alt}
                                            fill
                                            className={styles.slideImage}
                                            sizes="360px"
                                            priority={i < 4}
                                            quality={100}
                                            placeholder="blur"
                                            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23f0f0f0' width='400' height='400'/%3E%3C/svg%3E"
                                            onError={(e) => {
                                                e.currentTarget.src = '/images/placeholder.png'; // Fallback image
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
