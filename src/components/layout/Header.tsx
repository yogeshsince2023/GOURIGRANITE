'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Header.module.css';

import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={styles.header} role="banner">
            <nav className={styles.nav} aria-label="Main Navigation">
                <div className={styles.left}> {/* Left side links */}
                    <ul className={styles.links}>
                        <li><Link href="/products" prefetch={false} className={styles.link}>Gallery</Link></li>
                        <li><Link href="/factories" prefetch={false} className={styles.link}>Global Factories</Link></li>
                    </ul>
                </div>

                <Link href="/" className={styles.logoCenter} aria-label="Gouri Exports Home"> {/* Centered logo */}
                    <Image
                        src={getOptimizedCloudinaryUrl("https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790200/Company_logo_e8ehxq.png", 300)}
                        alt="Gouri Exports"
                        width={260}
                        height={130}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                <div className={styles.right}> {/* Right side links */}
                    <ul className={styles.links}>
                        <li><Link href="/about" prefetch={false} className={styles.link}>About Us</Link></li>
                        <li><Link href="/contact" prefetch={false} className={styles.link}>Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.extremeRight}> {/* Extreme right actions */}
                    <Link href="/catalogue" prefetch={false} className={`btn btn-outline ${styles.desktopOnly}`}>
                        Catalogue
                    </Link>
                    <Link href="/contact" prefetch={false} className={`btn btn-primary ${styles.desktopOnly}`}>
                        Request Quote
                    </Link>
                </div>

                {/* Hamburger Button */}
                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        id="mobile-navigation"
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                        <ul className={styles.mobileLinksList}>
                            <li className={styles.mobileItem}>
                                <Link 
                                    href="/products" 
                                    prefetch={false} 
                                    className={styles.mobileLink} 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span>Products</span>
                                    <ChevronRight size={18} className={styles.mobileArrow} aria-hidden="true" />
                                </Link>
                            </li>
                            <li className={styles.mobileItem}>
                                <Link 
                                    href="/factories" 
                                    prefetch={false} 
                                    className={styles.mobileLink} 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span>Global Factories</span>
                                    <ChevronRight size={18} className={styles.mobileArrow} aria-hidden="true" />
                                </Link>
                            </li>
                            <li className={styles.mobileItem}>
                                <Link 
                                    href="/about" 
                                    prefetch={false} 
                                    className={styles.mobileLink} 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span>About Us</span>
                                    <ChevronRight size={18} className={styles.mobileArrow} aria-hidden="true" />
                                </Link>
                            </li>
                            <li className={styles.mobileItem}>
                                <Link 
                                    href="/contact" 
                                    prefetch={false} 
                                    className={styles.mobileLink} 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span>Contact</span>
                                    <ChevronRight size={18} className={styles.mobileArrow} aria-hidden="true" />
                                </Link>
                            </li>
                            <li className={styles.mobileItem}>
                                <Link 
                                    href="/catalogue" 
                                    prefetch={false} 
                                    className={styles.mobileLink} 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span>Catalogue</span>
                                    <ChevronRight size={18} className={styles.mobileArrow} aria-hidden="true" />
                                </Link>
                            </li>
                            <li className={styles.mobileCtaItem}>
                                <Link 
                                    href="/contact" 
                                    prefetch={false}
                                    className={`btn btn-primary ${styles.mobileCtaBtn}`} 
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Request Quote
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
