'use client';

import { Phone, Mail, MapPin, Navigation } from 'lucide-react';
import { useState } from 'react';

// Google Maps URLs that work on all devices and open native apps when available
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
        address: 'Baopet, Karimnagar, Telangana - 505401',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=18.4386,78.4872'
    }
];

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <main>
            <div style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: '#ccc' }}>
                    Get a quote or request samples. We ship globally.
                </p>
            </div>

            <div className="container" style={{ padding: '4rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <div>
                    <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '2rem' }}>Get in Touch</h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Phone size={20} style={{ color: '#d4af37' }} /> Phone / WhatsApp
                        </h3>
                        <p style={{ marginLeft: '1.75rem', color: '#555' }}>
                            <a href="tel:+918619521711" style={{ color: '#555' }}>+91 86195 21711</a>
                        </p>
                        <p style={{ marginLeft: '1.75rem', color: '#555' }}>
                            <a href="tel:+917689995457" style={{ color: '#555' }}>+91 76899 95457</a>
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Mail size={20} style={{ color: '#d4af37' }} /> Email
                        </h3>
                        <p style={{ marginLeft: '1.75rem' }}>
                            <a href="mailto:docs.gouri57@gmail.com" style={{ color: '#555' }}>docs.gouri57@gmail.com</a>
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <MapPin size={20} style={{ color: '#d4af37' }} /> Our Locations
                        </h3>

                        {locations.map((loc, index) => (
                            <a
                                key={index}
                                href={loc.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'block',
                                    marginLeft: '1.75rem',
                                    marginBottom: '1.5rem',
                                    padding: '1rem',
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.2s, transform 0.2s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f0f0f0';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f9f9f9';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}
                            >
                                <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1a1a1a', marginBottom: '0.25rem' }}>
                                    {loc.name}
                                    <Navigation size={14} style={{ color: '#d4af37' }} />
                                </strong>
                                <p style={{ color: '#555', fontSize: '0.95rem', margin: 0 }}>{loc.address}</p>
                            </a>
                        ))}
                    </div>
                </div>

                <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px' }}>
                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <h3 style={{ color: 'green', marginBottom: '1rem' }}>Message Sent!</h3>
                            <p>We will get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Name</label>
                                <input required type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Email</label>
                                <input required type="email" placeholder="email@company.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Message / Requirement</label>
                                <textarea required rows={5} placeholder="I am interested in..." style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}></textarea>
                            </div>

                            <button disabled={status === 'submitting'} type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </main>
    );
}
