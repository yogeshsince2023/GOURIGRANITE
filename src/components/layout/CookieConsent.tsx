'use client';

import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user already consented
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        localStorage.setItem('cookie_consent_date', new Date().toISOString());
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'declined');
        localStorage.setItem('cookie_consent_date', new Date().toISOString());
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.banner} role="dialog" aria-label="Cookie consent">
            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <Cookie size={28} />
                </div>
                <div className={styles.text}>
                    <h4>We value your privacy</h4>
                    <p>
                        We use cookies to enhance your browsing experience, serve personalized content,
                        and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                    </p>
                </div>
                <div className={styles.actions}>
                    <button
                        className={styles.declineBtn}
                        onClick={handleDecline}
                        aria-label="Decline cookies"
                    >
                        Decline
                    </button>
                    <button
                        className={styles.acceptBtn}
                        onClick={handleAccept}
                        aria-label="Accept all cookies"
                    >
                        Accept All
                    </button>
                </div>
                <button
                    className={styles.closeBtn}
                    onClick={handleDecline}
                    aria-label="Close cookie banner"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
}
