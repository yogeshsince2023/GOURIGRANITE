'use client';

import { Phone, Mail, MapPin, Navigation } from 'lucide-react';
import { useState } from 'react';
import styles from './contact.module.css';

import MapLink from '@/components/ui/MapLink';

// Google Maps URLs that work on all devices and open native apps when available
const locations = [
    {
        name: 'Gouri Exports (Registered Head Office)',
        address: 'Teli Mohalla, Borawar, Nagaur, Rajasthan - 341502',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Teli+Mohalla,+Borawar,+Nagaur,+Rajasthan',
        lat: 27.0250, // rough approx since we don't have exact
        lng: 74.6750
    },
    {
        name: 'Gouri Marble Udhyog',
        address: 'Kishangarh, Kali Dungri - 305801',
        mapUrl: 'https://maps.app.goo.gl/ggibYwvYEDWYS5Yk8?g_st=aw',
        lat: 26.5741,
        lng: 74.8601
    },
    {
        name: 'Gouri Granites',
        address: 'Kishangarh, Ralawta - 305801',
        mapUrl: 'https://maps.app.goo.gl/HWKuyNAYBQkWXsd8A?g_st=aw',
        lat: 26.5850,
        lng: 74.8720
    },
    {
        name: 'Gouri Granito',
        address: 'Baopet, Karimnagar, Telangana - 505401',
        mapUrl: 'https://maps.app.goo.gl/UpymoQSWa3gJERVs6?g_st=aw',
        lat: 18.4386,
        lng: 78.4872
    }
];

import { WEB3FORMS_ACCESS_KEY } from '../../lib/web3forms';

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        formData.append('access_key', WEB3FORMS_ACCESS_KEY);
        formData.append('subject', 'New Contact Message - Gouri Granite');
        formData.append('from_name', 'Gouri Granite Website');

        const domain = 'api.web3' + 'forms.com';
        const endpoint = `https://${domain}/submit`;

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setStatus('success');
            } else {
                alert(data.message || 'Something went wrong. Please try again.');
                setStatus('idle');
            }
        } catch (err) {
            console.error(err);
            alert('Failed to send message. Please check your connection and try again.');
            setStatus('idle');
        }
    };

    return (
        <main>
            <div className={styles.contactBackground}>
                <div className={styles.heroSection}>
                    <h1>Contact Us</h1>
                    <p>Get a quote or request samples. We ship globally.</p>
                </div>

                <div className={`container ${styles.contentGrid}`}>
                    <div className={styles.infoSection}>
                        <h2>Get in Touch</h2>

                        <div className={styles.contactBlock}>
                            <h3>
                                <Phone size={20} className={styles.accentIcon} /> Phone / WhatsApp
                            </h3>
                            <p>
                                <a href="tel:+918619521711">+91 86195 21711</a>
                            </p>
                            <p>
                                <a href="tel:+917689995457">+91 76899 95457</a>
                            </p>
                        </div>

                        <div className={styles.contactBlock}>
                            <h3>
                                <Mail size={20} className={styles.accentIcon} /> Email
                            </h3>
                            <p>
                                <a href="mailto:gouriexports2022@gmail.com">gouriexports2022@gmail.com</a>
                            </p>
                        </div>

                        <div className={styles.contactBlock}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)' }}>
                                Business Identifiers
                            </h3>
                            <p style={{ margin: '0.25rem 0', color: '#bbb' }}><strong>GSTIN:</strong> 08BYQPG1619E1ZG</p>
                            <p style={{ margin: '0.25rem 0', color: '#bbb' }}><strong>IEC Code:</strong> BYQPG1619E</p>
                        </div>

                        <div className={styles.contactBlock}>
                            <h3>
                                <MapPin size={20} className={styles.accentIcon} /> Our Locations
                            </h3>

                            {locations.map((loc, index) => (
                                <MapLink
                                    key={index}
                                    googleMapsUrl={loc.mapUrl}
                                    lat={loc.lat}
                                    lng={loc.lng}
                                    label={loc.name}
                                    className={styles.locationCard}
                                >
                                    <strong>
                                        <MapPin size={16} className={styles.accentIcon} aria-hidden="true" />
                                        {loc.name}
                                        <Navigation size={14} className={styles.accentIcon} />
                                    </strong>
                                    <p>{loc.address}</p>
                                </MapLink>
                            ))}
                        </div>
                    </div>

                    <div className={styles.formContainer}>
                        {status === 'success' ? (
                            <div className={styles.successMessage}>
                                <h3>Message Sent!</h3>
                                <p>We will get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label>Name</label>
                                    <input name="name" required type="text" placeholder="Your Name" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Email</label>
                                    <input name="email" required type="email" placeholder="email@company.com" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Phone / WhatsApp</label>
                                    <input name="phone" required type="tel" placeholder="+1 555 123 4567" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Message / Requirement</label>
                                    <textarea name="message" required rows={5} placeholder="I am interested in..."></textarea>
                                </div>

                                <button disabled={status === 'submitting'} type="submit" className="btn btn-primary">
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
