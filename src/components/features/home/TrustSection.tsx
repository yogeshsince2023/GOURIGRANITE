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
                        <Globe2 className="text-accent mb-2" size={32} />
                        <span style={{fontWeight: 600, marginTop: '0.5rem'}}>Global Export House</span>
                    </motion.div>
                    <motion.div className={styles.logo} variants={fadeIn('up', 0)} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                        <Building2 className="text-accent mb-2" size={32} />
                        <span style={{fontWeight: 600, marginTop: '0.5rem'}}>Govt. Recognized</span>
                    </motion.div>
                    <motion.div className={styles.logo} variants={fadeIn('up', 0)} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                        <CheckCircle className="text-accent mb-2" size={32} />
                        <span style={{fontWeight: 600, marginTop: '0.5rem'}}>100% Quality Check</span>
                    </motion.div>
                    <motion.div className={styles.logo} variants={fadeIn('up', 0)} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                        <Award className="text-accent mb-2" size={32} />
                        <span style={{fontWeight: 600, marginTop: '0.5rem'}}>Ethical Sourcing</span>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
