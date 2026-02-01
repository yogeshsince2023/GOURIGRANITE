'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.left}> {/* Left side links */}
                    <ul className={styles.links}>
                        <li><Link href="/products" className={styles.link}>Products</Link></li>
                        <li><Link href="/factories" className={styles.link}>Global Factories</Link></li>
                    </ul>
                </div>

                <Link href="/" className={styles.logoCenter} aria-label="Gouri Granite Home"> {/* Centered logo */}
                    <Image
                        src="/images/Company_logo.png"
                        alt="Gouri Granite"
                        width={260}
                        height={130}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                <div className={styles.right}> {/* Right side links */}
                    <ul className={styles.links}>
                        <li><Link href="/about" className={styles.link}>About Us</Link></li>
                        <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.extremeRight}> {/* Extreme right actions */}
                    <Link href="/catalogue" className={`btn btn-outline ${styles.desktopOnly}`}>
                        Catalogue
                    </Link>
                    <Link href="/contact" className={`btn btn-primary ${styles.desktopOnly}`}>
                        Request Quote
                    </Link>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                        <Link href="/products" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Products</Link>
                        <Link href="/factories" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Global Factories</Link>
                        <Link href="/about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                        <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                        <Link href="/catalogue" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Catalogue</Link>
                        <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>
                            Request Quote
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
