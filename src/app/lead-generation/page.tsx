'use client';

import { useState } from 'react';
import { ShieldCheck, Truck, Gem, Award, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import styles from './leadGeneration.module.css';
import { WEB3FORMS_ACCESS_KEY } from '../../lib/web3forms';

export default function LeadGenerationPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [projectType, setProjectType] = useState('Commercial');
    const [material, setMaterial] = useState('Granite');
    const [qty, setQty] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        const apiHost = 'api.web3' + 'forms.com';
        const submitUrl = `https://${apiHost}/submit`;

        const submitData = new FormData();
        submitData.append('access_key', WEB3FORMS_ACCESS_KEY);
        submitData.append('subject', `Lead Gen Estimate Request - ${name}`);
        submitData.append('from_name', 'Gouri Granite Website (Lead Gen)');
        submitData.append('name', name);
        submitData.append('email', email);
        submitData.append('phone', phone);
        submitData.append('project_type', projectType);
        submitData.append('material', material);
        submitData.append('quantity', qty);
        submitData.append('notes', notes);

        try {
            const response = await fetch(submitUrl, {
                method: 'POST',
                body: submitData,
            });
            const data = await response.json();
            if (data.success) {
                setStatus('success');
            } else {
                alert(data.message || 'Submission failed. Please try again.');
                setStatus('idle');
            }
        } catch (err) {
            console.error(err);
            alert('Submission failed. Please check your connection and try again.');
            setStatus('idle');
        }
    };

    return (
        <main className={styles.pageContainer}>
            <div className={`container ${styles.gridContainer}`}>
                
                {/* Left side: Form Info & trust signals */}
                <div className={styles.infoSection}>
                    <Link href="/catalogue" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Catalog
                    </Link>
                    
                    <span className={styles.kicker}>Direct Manufacturer Pricing</span>
                    <h1>Get Your Custom Stone Estimate</h1>
                    <p className={styles.desc}>
                        Request a comprehensive price quote for premium marble and granite direct from our 3 Indian quarries. We supply architects, builders, and developers globally.
                    </p>

                    <div className={styles.trustGrid}>
                        <div className={styles.trustCard}>
                            <ShieldCheck size={28} className={styles.trustIcon} />
                            <div>
                                <h2>Direct Quarry Exporters</h2>
                                <p>Sourcing and processing raw blocks ourselves to guarantee 100% factory rates.</p>
                            </div>
                        </div>

                        <div className={styles.trustCard}>
                            <Truck size={28} className={styles.trustIcon} />
                            <div>
                                <h2>Secure Global Logistics</h2>
                                <p>Delivered securely in fumigated seaworthy wooden crates to over 40+ countries.</p>
                            </div>
                        </div>

                        <div className={styles.trustCard}>
                            <Gem size={28} className={styles.trustIcon} />
                            <div>
                                <h2>Free Sample Inspection</h2>
                                <p>We provide free 10x10 cm stone samples for architects and builders (courier rates apply).</p>
                            </div>
                        </div>

                        <div className={styles.trustCard}>
                            <Award size={28} className={styles.trustIcon} />
                            <div>
                                <h2>Government Recognized</h2>
                                <p>Certified Export House with government recognized credentials and strict quality control.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side: High Conversion Form */}
                <div className={styles.formContainer}>
                    {status === 'success' ? (
                        <div className={styles.successMessage}>
                            <ShieldCheck size={64} className={styles.successIcon} />
                            <h2>Estimate Request Submitted!</h2>
                            <p>
                                Thank you for your inquiry. A stone export specialist has been assigned to your request and will contact you via email or phone within the next 12 hours with detailed factory pricing and catalogs.
                            </p>
                            <Link href="/" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                                Return Home
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.quoteForm}>
                            <h2 className={styles.formTitle}>Request Factory Pricing</h2>
                            <p className={styles.formSubtitle}>Fill out the requirements below to receive a custom estimate.</p>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="p-type">Project Type</label>
                                    <select 
                                        id="p-type"
                                        value={projectType} 
                                        onChange={(e) => setProjectType(e.target.value)}
                                    >
                                        <option value="Commercial">Commercial Project</option>
                                        <option value="Residential">Residential Development</option>
                                        <option value="Wholesale">Wholesale / Distribution</option>
                                        <option value="Custom">Custom Home / Villa</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="material-select">Material Category</label>
                                    <select 
                                        id="material-select"
                                        value={material} 
                                        onChange={(e) => setMaterial(e.target.value)}
                                    >
                                        <option value="Granite">Granite Slabs & Tiles</option>
                                        <option value="Marble">Marble Slabs & Tiles</option>
                                        <option value="Onyx">Honey/Backlit Onyx</option>
                                        <option value="Travertine">Silver Travertine</option>
                                        <option value="Multiple">Multiple (Mixed Container)</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="qty-input">Approximate Quantity Needed (Sq. Ft. / Sq. Meters)</label>
                                <input 
                                    id="qty-input"
                                    required 
                                    type="text" 
                                    placeholder="e.g. 5,000 sq ft or 1 container" 
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="user-name">Your Full Name</label>
                                <input 
                                    id="user-name"
                                    required 
                                    type="text" 
                                    placeholder="John Doe" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="user-email">Email Address</label>
                                    <input 
                                        id="user-email"
                                        required 
                                        type="email" 
                                        placeholder="name@company.com" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="user-phone">Phone / WhatsApp Number</label>
                                    <input 
                                        id="user-phone"
                                        required 
                                        type="tel" 
                                        placeholder="e.g. +1 555 123 4567" 
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="user-notes">Additional Project Details / Stone Finish Preferences</label>
                                <textarea 
                                    id="user-notes"
                                    rows={4} 
                                    placeholder="Specify thickness (e.g. 20mm, 30mm), finish (polished, honed), and any delivery port preferences..."
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </div>

                            <button disabled={status === 'submitting'} type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                {status === 'submitting' ? 'Submitting Estimate Request...' : 'Get Factory Quote'}
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </main>
    );
}
