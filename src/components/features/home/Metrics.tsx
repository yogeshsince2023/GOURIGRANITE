'use client';

import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Metrics.module.css';

const metrics = [
    { label: 'Years in Business', value: '25+', delay: 0.1 },
    { label: 'Countries Served', value: '40+', delay: 0.2 },
    { label: 'Factories', value: '3', delay: 0.3 },
    { label: 'Sq. Ft. Annually', value: '2M+', delay: 0.4 },
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
                            {item.value}
                        </h4>
                        <p className={styles.label}>{item.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
