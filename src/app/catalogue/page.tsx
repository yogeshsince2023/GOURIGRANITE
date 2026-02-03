'use client';

import { useState, useEffect } from 'react';
import styles from './catalogue.module.css';
import { Download, X, FileText, Mail, Phone, Lock, Eye, Layers, Image as ImageIcon, Ruler, Check, ChevronRight } from 'lucide-react';

export default function CataloguePage() {
    const [showModal, setShowModal] = useState(false);
    const [showPdf, setShowPdf] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false); // New state for post-submission
    const [actionType, setActionType] = useState<'view' | 'download'>('view');
    
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });

    useEffect(() => {
        // Hydration check for access
        if (typeof window !== 'undefined') {
            const access = localStorage.getItem('catalogue_access');
            if (access) {
                setHasAccess(true);
            }
        }
    }, []);

    const handleAction = (type: 'view' | 'download') => {
        setActionType(type);
        
        if (hasAccess) {
            executeAction(type);
        } else {
            setShowModal(true);
            setIsSuccess(false); // Reset success state if reopening
        }
    };

    const executeAction = (type: 'view' | 'download') => {
        if (type === 'view') {
            setShowPdf(true);
        } else {
            // Trigger direct download
            const link = document.createElement('a');
            link.href = '/catalogue.pdf';
            link.download = 'Gouri_Granite_Catalogue_2025.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 800));

            // Store Lead Data
            const leadData = {
                ...formData,
                timestamp: new Date().toISOString(),
                source: 'catalogue_page',
                initialAction: actionType
            };

            const existingLeads = JSON.parse(localStorage.getItem('catalogue_leads') || '[]');
            existingLeads.push(leadData);
            localStorage.setItem('catalogue_leads', JSON.stringify(existingLeads));

            // Grant Access
            localStorage.setItem('catalogue_access', 'true');
            setHasAccess(true);
            setIsSuccess(true); // Show success state instead of auto-closing
        } catch (error) {
            console.error('Submission failed', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSuccessAction = (type: 'view' | 'download') => {
        executeAction(type);
        setShowModal(false);
    };

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.label}>Product Catalogue 2025</span>
                    <h1 className={styles.title}>The Definitive Stone Collection</h1>
                    <p className={styles.subtitle}>
                        Discover our comprehensive range of premium granites, marbles, and exotic stones. 
                        Engineered for architects, customized for visionaries.
                    </p>
                    
                    <div className={styles.buttonGroup}>
                        <button 
                            onClick={() => handleAction('view')}
                            className={styles.primaryBtn}
                        >
                            <Eye size={20} />
                            View Online
                        </button>
                        <button 
                            onClick={() => handleAction('download')}
                            className={styles.secondaryBtn}
                        >
                            <Download size={20} />
                            Download PDF
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>
                        <Layers size={24} />
                    </div>
                    <h3 className={styles.featureTitle}>50+ Premium Varieties</h3>
                    <p className={styles.featureText}>
                        Explore our extensive collection of North and South Indian granites, curated for exceptional quality and color consistency.
                    </p>
                </div>

                <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>
                        <ImageIcon size={24} />
                    </div>
                    <h3 className={styles.featureTitle}>High-Res Gallery</h3>
                    <p className={styles.featureText}>
                        Detailed high-resolution textures and application shots to help you visualize the perfect stone for your project.
                    </p>
                </div>

                <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>
                        <Ruler size={24} />
                    </div>
                    <h3 className={styles.featureTitle}>Technical Specifications</h3>
                    <p className={styles.featureText}>
                        Complete physical and chemical properties, sizing options, and recommended applications for every stone.
                    </p>
                </div>
            </section>

            {/* PDF Viewer Overlay */}
            {showPdf && (
                <div className={styles.pdfViewer}>
                    <div className={styles.viewerHeader}>
                        <div className={styles.headerTitle}>Product Catalogue 2025</div>
                        <button onClick={() => setShowPdf(false)} className={styles.closeViewerBtn}>
                            <X size={18} /> Close Viewer
                        </button>
                    </div>
                    <object
                        data="/catalogue.pdf"
                        type="application/pdf"
                        className={styles.pdfObject}
                    >
                        <div className={styles.fallback} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-primary)' }}>
                            <p style={{ marginBottom: '1rem' }}>Your browser does not support embedded PDFs.</p>
                            <button onClick={() => executeAction('download')} className={styles.primaryBtn}>
                                Download PDF instead
                            </button>
                        </div>
                    </object>
                </div>
            )}

            {/* Modal */}
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

                        {!isSuccess ? (
                            <>
                                <div className={styles.modalHeader}>
                                    <div className={styles.modalIcon}>
                                        <FileText size={32} />
                                    </div>
                                    <h2>Access the Collection</h2>
                                    <p>Please share your details to {actionType} the complete product catalogue.</p>
                                </div>

                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="name@company.com"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="+91..."
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Company (Optional)</label>
                                        <input
                                            type="text"
                                            placeholder="Your Company Name"
                                            value={formData.company}
                                            onChange={e => setFormData({ ...formData, company: e.target.value })}
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
                                                Continue <ChevronRight size={18} />
                                            </>
                                        )}
                                    </button>

                                    <p className={styles.privacy}>
                                        <Lock size={12} /> Your information is secure and private.
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div className={styles.successMessage}>
                                <div className={styles.successIcon}>
                                    <Check size={32} />
                                </div>
                                <div className={styles.modalHeader} style={{ marginBottom: '1rem' }}>
                                    <h2>Youre all set!</h2>
                                    <p>Thank you for your interest in Gouri Granite.</p>
                                </div>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                                    <button 
                                        onClick={() => handleSuccessAction('view')}
                                        className={styles.submitBtn}
                                        style={{ marginTop: 0 }}
                                    >
                                        <Eye size={18} /> View Now
                                    </button>
                                    <button 
                                        onClick={() => handleSuccessAction('download')}
                                        className={styles.secondaryBtn}
                                        style={{ justifyContent: 'center', width: '100%' }}
                                    >
                                        <Download size={18} /> Download Copy
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
