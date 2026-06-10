'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
                        <li><Link href="/products" className={styles.link}>Gallery</Link></li>
                        <li><Link href="/factories" className={styles.link}>Global Factories</Link></li>
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
                        <li><Link href="/about" className={styles.link}>About Us</Link></li>
                        <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.extremeRight}> {/* Extreme right actions */}
                    <Link href="/catalogue" className={`btn btn-outline ${styles.desktopOnly}`} aria-label="View Our Premium Marble and Granite Catalog">
                        Catalogue
                    </Link>
                    <Link href="/contact" className={`btn btn-primary ${styles.desktopOnly}`} aria-label="Request a Quote for Premium Marble and Granite">
                        Request Quote
                    </Link>
                </div>

                {/* Hamburger Button */}
                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menu"
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <ul className={styles.mobileLinksList}>
                            <li>
                                <Link href="/products" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Products</Link>
                            </li>
                            <li>
                                <Link href="/factories" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Global Factories</Link>
                            </li>
                            <li>
                                <Link href="/about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                            </li>
                            <li>
                                <Link href="/catalogue" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Catalogue</Link>
                            </li>
                            <li style={{ padding: '1rem 0' }}>
                                <Link 
                                    href="/contact" 
                                    className="btn btn-primary" 
                                    style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }} 
                                    onClick={() => setMobileMenuOpen(false)}
                                    aria-label="Request a Quote for Premium Marble and Granite"
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
