import styles from './Footer.module.css';
import { Phone, Mail, Globe, Facebook, Instagram, Navigation } from 'lucide-react';

const locations = [
    {
        name: 'Gouri Marble Udhyog',
        address: 'Kishangarh, Kali Dungri - 305801',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=26.5741,74.8601'
    },
    {
        name: 'Gouri Granites',
        address: 'Kishangarh, Ralawta - 305801',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=26.5850,74.8720'
    },
    {
        name: 'Gouri Granito',
        address: 'Baopet, Karimnagar - 505401',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=18.4386,78.4872'
    }
];

export default function Footer() {
    return (
        <footer className={styles.footer} role="contentinfo" aria-label="Site footer">
            <div className={styles.grid}>
                <div className={styles.column}>
                    <h3>Gouri Granite</h3>
                    <p>
                        Premium manufacturing and export of natural stone.
                        Serving architects and builders worldwide from our facilities in India.
                    </p>
                    <nav aria-label="Social media links" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <a
                            href="https://www.facebook.com/share/1E1oey2LtC/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#1877F2' }}
                            aria-label="Visit our Facebook page"
                        >
                            <Facebook size={24} aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.instagram.com/gourigranites.in?igsh=MThyNjA3MjhiY2wyMA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#E4405F' }}
                            aria-label="Visit our Instagram page"
                        >
                            <Instagram size={24} aria-hidden="true" />
                        </a>
                    </nav>
                </div>

                <div className={styles.column}>
                    <h3>Our Locations</h3>
                    <nav aria-label="Factory locations">
                        {locations.map((loc, index) => (
                            <a
                                key={index}
                                href={loc.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'block', marginBottom: '1rem', textDecoration: 'none' }}
                                aria-label={`View ${loc.name} on map`}
                            >
                                <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                                    {loc.name} <Navigation size={12} aria-hidden="true" />
                                </strong>
                                <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>{loc.address}</span>
                            </a>
                        ))}
                    </nav>
                </div>

                <div className={styles.column}>
                    <h3>Contact Us</h3>
                    <address style={{ fontStyle: 'normal' }}>
                        <p>
                            <a href="tel:+918619521711" style={{ color: '#a0a0a0' }} aria-label="Call us at +91 86195 21711">
                                <Phone size={16} style={{ display: 'inline', marginRight: 8 }} aria-hidden="true" /> +91 86195 21711
                            </a>
                        </p>
                        <p>
                            <a href="tel:+917689995457" style={{ color: '#a0a0a0' }} aria-label="Call us at +91 76899 95457">
                                <Phone size={16} style={{ display: 'inline', marginRight: 8 }} aria-hidden="true" /> +91 76899 95457
                            </a>
                        </p>
                        <p>
                            <a href="mailto:gouriexports2022@gmail.com" style={{ color: '#a0a0a0' }} aria-label="Email us at gouriexports2022@gmail.com">
                                <Mail size={16} style={{ display: 'inline', marginRight: 8 }} aria-hidden="true" /> gouriexports2022@gmail.com
                            </a>
                        </p>
                        <p><Globe size={16} style={{ display: 'inline', marginRight: 8 }} aria-hidden="true" /> Worldwide Shipping</p>
                    </address>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; 2000 Gouri Granite. All rights reserved.</p>
            </div>
        </footer>
    );
}
