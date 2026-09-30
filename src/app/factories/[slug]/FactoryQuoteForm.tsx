'use client';

import { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY } from '../../../lib/web3forms';
import styles from './factoryProfile.module.css';

export default function FactoryQuoteForm({ factoryName }: { factoryName: string }) {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append('access_key', WEB3FORMS_ACCESS_KEY);
        formData.append('subject', `Factory Quote Request - ${factoryName}`);
        formData.append('from_name', `Gouri Granite Website (${factoryName})`);

        const apiHost = 'api.web3' + 'forms.com';
        const submitUrl = `https://${apiHost}/submit`;

        try {
            const response = await fetch(submitUrl, {
                method: 'POST',
                body: formData,
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

    if (status === 'success') {
        return (
            <div className={styles.profileForm} style={{ textAlign: 'center', padding: '2rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Quote Request Sent!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                    A stone export specialist will contact you within 12 hours with factory pricing.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.profileForm}>
            <div className={styles.formGroup}>
                <label htmlFor="pname">Full Name</label>
                <input required id="pname" name="name" type="text" placeholder="Your Name" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="pemail">Email Address</label>
                <input required id="pemail" name="email" type="email" placeholder="email@company.com" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="pphone">Phone / WhatsApp</label>
                <input required id="pphone" name="phone" type="tel" placeholder="+1 555 123 4567" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="pmessage">Quantity & Requirement Details</label>
                <textarea 
                    required 
                    id="pmessage"
                    name="message"
                    rows={4} 
                    placeholder={`I am interested in products from ${factoryName}. Please provide specifications & sample details...`}
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                disabled={status === 'submitting'}
            >
                {status === 'submitting' ? 'Sending...' : 'Request Factory Quote'}
            </button>
        </form>
    );
}
