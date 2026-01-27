'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    <img src="/logo.jpeg" alt="Gouri Granite" className={styles.logoImage} />
                </Link>

                {/* Desktop Navigation */}
                <ul className={styles.links}>
                    <li><Link href="/products" className={styles.link}>Products</Link></li>
                    <li><Link href="/factories" className={styles.link}>Global Factories</Link></li>
                    <li><Link href="/about" className={styles.link}>About Us</Link></li>
                    <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                </ul>

                <div className={styles.actions}>
                    <ThemeToggle />
                    <Link href="/catalogue" className={`btn btn-outline ${styles.desktopOnly}`}>
                        Catalogue
                    </Link>
                    <Link href="/contact" className={`btn btn-primary ${styles.desktopOnly}`}>
                        Request Quote
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/products" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Products</Link>
                    <Link href="/factories" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Global Factories</Link>
                    <Link href="/about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                    <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    <Link href="/catalogue" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Catalogue</Link>
                    <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>
                        Request Quote
                    </Link>
                </div>
            )}
        </header>
    );
}
