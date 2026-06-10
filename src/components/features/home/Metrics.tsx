'use client';

import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import styles from './Metrics.module.css';

const metrics = [
    { label: 'Years in Business', value: '25+', num: 25, suffix: '+', tooltip: 'Established in 2000, exporting natural stone with trust.', delay: 0.1 },
    { label: 'Countries Served', value: '40+', num: 40, suffix: '+', tooltip: 'Serving clients globally across US, UK, Europe, Australia, and UAE.', delay: 0.2 },
    { label: 'Factories', value: '3', num: 3, suffix: '', tooltip: 'State-of-the-art facilities in Kishangarh (Rajasthan) and Karimnagar (Telangana).', delay: 0.3 },
    { label: 'Sq. Ft. Annually', value: '2M+', num: 2, suffix: 'M+', tooltip: 'Processing over 2 million sq. ft. of premium stone every year.', delay: 0.4 },
];

const counterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: custom,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    }),
};

function CountUp({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1500; // ms
        const steps = end;
        if (steps === 0) return;
        const stepTime = Math.max(Math.floor(duration / steps), 30);

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [inView, end]);

    return (
        <span>{inView ? count : 0}{suffix}</span>
    );
}

export default function Metrics() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <section className={styles.metrics} ref={ref}>
            <div className={`container ${styles.grid}`}>
                {metrics.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className={styles.item}
                        variants={counterVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        custom={item.delay}
                        whileHover={{
                            y: -5,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <h4 className={styles.value}>
                            <CountUp end={item.num} suffix={item.suffix} inView={inView} />
                        </h4>
                        <p className={styles.label}>{item.label}</p>
                        
                        {/* Hover Tooltip */}
                        <div className={styles.tooltip} role="tooltip">
                            {item.tooltip}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Case Study Gallery Link */}
            <div className={styles.linkWrapper}>
                <Link href="/products" className={styles.caseStudyLink} aria-label="Explore Our Global Projects and Case Studies">
                    Explore Our Global Projects & Case Studies &rarr;
                </Link>
            </div>
        </section>
    );
}
