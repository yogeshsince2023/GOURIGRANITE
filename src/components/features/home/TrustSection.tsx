'use client';

import { motion } from 'framer-motion';
import styles from './TrustSection.module.css';
import { Building2, Globe2, Award, CheckCircle } from 'lucide-react';
import { fadeIn, staggerContainer, textVariant } from '@/lib/animations';

export default function TrustSection() {
    return (
        <motion.section
            className={styles.trust}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container">
                <motion.p
                    className={styles.kicker}
                    variants={textVariant(0.05)}
                >
                    Trusted by Industry Leaders Worldwide
                </motion.p>

                <motion.div className={styles.logos} variants={staggerContainer(0.12, 0.1)}>
                    <motion.div className={styles.logo} variants={fadeIn('up', 0)} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                        <Building2 /> ARCHITEX
                    </motion.div>
                    <motion.div className={styles.logo} variants={fadeIn('up', 0)} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                        <Globe2 /> GLOBAL STONE
                    </motion.div>
                    <motion.div className={styles.logo} variants={fadeIn('up', 0)} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                        <Award /> PREMIER BUILD
                    </motion.div>
                    <motion.div className={styles.logo} variants={fadeIn('up', 0)} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                        <CheckCircle /> QUALITY FIRST
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
