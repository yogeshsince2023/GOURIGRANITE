'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Link from 'next/link';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
    {
        quote: "Gouri Exports supplied the Statuario marble slabs for our luxury residence project in Lake Como. The vein alignment and mirror polish were pristine, exceeding our high standards. Their direct manufacturer communication was exemplary.",
        name: "Architect Marco Rossini",
        role: "Lead Architect, Rossini & Partners",
        location: "Milan, Italy"
    },
    {
        quote: "We ordered 40,000 sq ft of Black Galaxy granite for a commercial plaza. Not only was the thickness perfectly uniform, but they also delivered ahead of schedule. Truly a reliable premium marble and granite exporter from India.",
        name: "Faisal Al-Mansoori",
        role: "Project Director, Emirates Developments",
        location: "Dubai, UAE"
    },
    {
        quote: "Sourcing Colonial White and Alaska White granite directly from Gouri's factories cut our material costs by 30% compared to local distributors. The quality is flawless, and our clients love the countertops.",
        name: "Sarah Jenkins",
        role: "Custom Builder, Jenkins Craft Homes",
        location: "Texas, USA"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [activeIndex]);

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setActiveIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    };

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring' as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        },
        exit: (dir: number) => ({
            x: dir < 0 ? 100 : -100,
            opacity: 0,
            transition: {
                x: { type: 'spring' as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        })
    };

    const current = TESTIMONIALS[activeIndex];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.kicker}>Global Trust</span>
                    <h2>What Architects & Builders Say</h2>
                    <p className={styles.desc}>
                        We have supplied premium natural stones for luxury hotels, commercial plazas, and residential projects worldwide.
                    </p>
                </div>

                {/* Testimonial Box */}
                <div className={styles.sliderContainer}>
                    <button className={`${styles.navBtn} ${styles.prev}`} onClick={handlePrev} aria-label="Previous testimonial">
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.slideViewport}>
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                className={styles.slide}
                            >
                                <Quote className={styles.quoteIcon} size={48} />
                                <blockquote className={styles.quoteText}>
                                    "{current.quote}"
                                </blockquote>
                                <div className={styles.authorInfo}>
                                    <cite className={styles.authorName}>{current.name}</cite>
                                    <span className={styles.authorRole}>{current.role}</span>
                                    <span className={styles.authorLoc}>{current.location}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className={`${styles.navBtn} ${styles.next}`} onClick={handleNext} aria-label="Next testimonial">
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className={styles.dots}>
                    {TESTIMONIALS.map((_, idx) => (
                        <button
                            key={idx}
                            className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
                            onClick={() => {
                                setDirection(idx > activeIndex ? 1 : -1);
                                setActiveIndex(idx);
                            }}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Contextual CTA */}
                <div className={styles.ctaWrapper}>
                    <Link href="/lead-generation" className="btn btn-primary" aria-label="Get a custom quote today">
                        Get Your Free Stone Quote Today
                    </Link>
                </div>
            </div>
        </section>
    );
}
