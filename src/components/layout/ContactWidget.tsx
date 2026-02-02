'use client';

import { useState, useEffect } from 'react';
import styles from './ContactWidget.module.css';
import { Phone, Mail, MessageCircle, Facebook, Instagram, MessageSquare, X } from 'lucide-react';

export default function ContactWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleWidget = () => setIsOpen(!isOpen);

    // Prevent hydration mismatch
    if (!mounted) return null;

    return (
        <div
            className={`${styles.widget} ${isOpen ? styles.expanded : ''}`}
            role="complementary"
            aria-label="Quick contact options"
        >

            {/* Main Toggle Button */}
            <button
                className={`${styles.button} ${styles.toggleButton}`}
                onClick={toggleWidget}
                aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
                aria-expanded={isOpen}
                aria-controls="contact-menu"
            >
                {isOpen ? <X size={28} aria-hidden="true" /> : <MessageSquare size={28} aria-hidden="true" />}
            </button>

            {/* Action Buttons */}
            <div id="contact-menu" role="menu" aria-hidden={!isOpen}>
                <a
                    href="https://wa.me/918619521711"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button} ${styles.actionButton} ${styles.whatsapp}`}
                    role="menuitem"
                    aria-label="Contact us on WhatsApp"
                    tabIndex={isOpen ? 0 : -1}
                >
                    <MessageCircle size={24} aria-hidden="true" />
                    <span className={styles.label}>WhatsApp</span>
                </a>

                <a
                    href="https://www.facebook.com/share/1E1oey2LtC/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button} ${styles.actionButton} ${styles.facebook}`}
                    role="menuitem"
                    aria-label="Visit our Facebook page"
                    tabIndex={isOpen ? 0 : -1}
                >
                    <Facebook size={24} aria-hidden="true" />
                    <span className={styles.label}>Facebook</span>
                </a>

                <a
                    href="https://www.instagram.com/gourigranites.in?igsh=MThyNjA3MjhiY2wyMA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button} ${styles.actionButton} ${styles.instagram}`}
                    role="menuitem"
                    aria-label="Visit our Instagram page"
                    tabIndex={isOpen ? 0 : -1}
                >
                    <Instagram size={24} aria-hidden="true" />
                    <span className={styles.label}>Instagram</span>
                </a>

                <a
                    href="mailto:gouriexports2022@gmail.com"
                    className={`${styles.button} ${styles.actionButton} ${styles.email}`}
                    role="menuitem"
                    aria-label="Send us an email"
                    tabIndex={isOpen ? 0 : -1}
                >
                    <Mail size={24} aria-hidden="true" />
                    <span className={styles.label}>Email Us</span>
                </a>

                <a
                    href="tel:+918619521711"
                    className={`${styles.button} ${styles.actionButton} ${styles.call}`}
                    role="menuitem"
                    aria-label="Call us now"
                    tabIndex={isOpen ? 0 : -1}
                >
                    <Phone size={24} aria-hidden="true" />
                    <span className={styles.label}>Call Now</span>
                </a>
            </div>
        </div>
    );
}
