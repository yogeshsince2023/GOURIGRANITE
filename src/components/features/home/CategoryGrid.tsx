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
    { id: 'fine-1', src: '/images/fine_1.png', alt: 'Fine Stone 1' },
    { id: 'fine-2', src: '/images/fine_2.jpg', alt: 'Fine Stone 2' },
    { id: 'fine-3', src: '/images/fine_3.jpg', alt: 'Fine Stone 3' },
    { id: 'fine-4', src: '/images/fine_4.jpg', alt: 'Fine Stone 4' },
    { id: 'fine-5', src: '/images/fine_5.jpg', alt: 'Fine Stone 5' },
    { id: 'fine-6', src: '/images/fine_6.jpg', alt: 'Fine Stone 6' },
    { id: 'fine-7', src: '/images/fine_7.jpg', alt: 'Fine Stone 7' },
    { id: 'fine-8', src: '/images/fine_8.jpg', alt: 'Fine Stone 8' },
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
                            <button className={`${styles.tab} ${styles.tabActive}`}>Popular Stone</button>
                            <button className={styles.tab}>Stone by Colours</button>
                            <button className={styles.tab}>Stone by Spaces</button>
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
