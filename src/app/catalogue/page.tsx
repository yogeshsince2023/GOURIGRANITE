'use client';

import { useState, useEffect } from 'react';
import styles from './catalogue.module.css';
import { Download, X, FileText, Mail, Phone, MapPin, Check } from 'lucide-react';

export default function CataloguePage() {
    const [showModal, setShowModal] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        location: ''
    });

    useEffect(() => {
        // Check if user already has download access
        const access = localStorage.getItem('catalogue_access');
        if (access) {
            setHasAccess(true);
        }
    }, []);

    const handleDownloadClick = () => {
        if (hasAccess) {
            // Direct download if already has access
            window.open('/catalogue.pdf', '_blank');
        } else {
            // Show modal to collect info
            setShowModal(true);
            // Try to get location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        try {
                            const res = await fetch(
                                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
                            );
                            const data = await res.json();
                            setFormData(prev => ({
                                ...prev,
                                location: `${data.city || data.locality || ''}, ${data.countryName || ''}`
                            }));
                        } catch (e) {
                            console.log('Could not get location name');
                        }
                    },
                    () => {
                        console.log('Location permission denied');
                    }
                );
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate saving lead data (in real app, send to backend)
        const leadData = {
            ...formData,
            timestamp: new Date().toISOString(),
            source: 'catalogue_download'
        };

        // Store in localStorage for now (would be sent to backend in production)
        const existingLeads = JSON.parse(localStorage.getItem('catalogue_leads') || '[]');
        existingLeads.push(leadData);
        localStorage.setItem('catalogue_leads', JSON.stringify(existingLeads));

        // Grant access
        localStorage.setItem('catalogue_access', 'true');
        localStorage.setItem('catalogue_access_date', new Date().toISOString());

        setTimeout(() => {
            setIsSubmitting(false);
            setHasAccess(true);
            setShowModal(false);
            // Auto-download
            window.open('/catalogue.pdf', '_blank');
        }, 1000);
    };

    return (
        <main style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <FileText size={24} />
                    <h1>Product Catalogue 2025</h1>
                </div>
                <button
                    onClick={handleDownloadClick}
                    className={styles.downloadBtn}
                >
                    <Download size={18} />
                    {hasAccess ? 'Download PDF' : 'Get PDF'}
                </button>
            </div>

            <iframe
                src="/catalogue.pdf"
                style={{ flex: 1, width: '100%', border: 'none' }}
                title="Gouri Granite Catalogue"
            />

            {/* Lead Capture Modal */}
            {showModal && (
                <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <button
                            className={styles.closeBtn}
                            onClick={() => setShowModal(false)}
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        <div className={styles.modalHeader}>
                            <div className={styles.modalIcon}>
                                <FileText size={32} />
                            </div>
                            <h2>Download Product Catalogue</h2>
                            <p>Please provide your details to download our complete catalogue</p>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label><Mail size={14} /> Email *</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label><Phone size={14} /> Phone *</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="+91 XXXXX XXXXX"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Your company (optional)"
                                    value={formData.company}
                                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label><MapPin size={14} /> Location</label>
                                <input
                                    type="text"
                                    placeholder="City, Country"
                                    value={formData.location}
                                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    'Processing...'
                                ) : (
                                    <>
                                        <Download size={18} />
                                        Download Catalogue
                                    </>
                                )}
                            </button>

                            <p className={styles.privacy}>
                                🔒 Your information is secure and will never be shared.
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}
