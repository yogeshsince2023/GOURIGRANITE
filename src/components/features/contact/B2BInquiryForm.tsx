'use client';

import { useState } from 'react';
import styles from './B2BInquiryForm.module.css';
import { motion } from 'framer-motion';

const productOptions = [
    { value: 'marble', label: 'Marble' },
    { value: 'granite', label: 'Granite' },
    { value: 'onyx', label: 'Onyx' },
    { value: 'travertine', label: 'Travertine' },
    { value: 'quartz', label: 'Quartz' },
    { value: 'mixed', label: 'Mixed/Other' },
];

const projectTypeOptions = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'public', label: 'Public Project' },
];

const countryOptions = [
    { value: 'usa', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'australia', label: 'Australia' },
    { value: 'canada', label: 'Canada' },
    { value: 'uae', label: 'United Arab Emirates' },
    { value: 'eu', label: 'European Union' },
    { value: 'other', label: 'Other' },
];

interface FormData {
    name: string;
    company: string;
    email: string;
    country: string;
    productInterest: string[];
    quantity: string;
    projectType: string;
    boqFile: File | null;
    specialRequests: string;
}

export default function B2BInquiryForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        company: '',
        email: '',
        country: '',
        productInterest: [],
        quantity: '',
        projectType: '',
        boqFile: null,
        specialRequests: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            productInterest: checked
                ? [...prev.productInterest, value]
                : prev.productInterest.filter(p => p !== value)
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setFormData(prev => ({
                ...prev,
                boqFile: e.target.files![0]
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            console.log('B2B Inquiry Submitted:', formData);
            setSubmitted(true);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    country: '',
                    productInterest: [],
                    quantity: '',
                    projectType: '',
                    boqFile: null,
                    specialRequests: '',
                });
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className={styles.formContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className={styles.formHeader}>
                <h2>B2B Inquiry Form</h2>
                <p>Tell us about your project and requirements</p>
            </div>

            {submitted ? (
                <motion.div
                    className={styles.successMessage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className={styles.checkmark}>✓</div>
                    <h3>Thank You!</h3>
                    <p>Your inquiry has been submitted successfully. Our team will contact you within 24 hours.</p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                    {/* Personal Info */}
                    <div className={styles.section}>
                        <h3>Personal Information</h3>
                        <div className={styles.grid2}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="company">Company Name *</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your Company"
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Business Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="john@company.com"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="country">Country *</label>
                            <select
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Country</option>
                                {countryOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Product Interest */}
                    <div className={styles.section}>
                        <h3>Product Interest *</h3>
                        <div className={styles.checkboxGroup}>
                            {productOptions.map(option => (
                                <label key={option.value} className={styles.checkbox}>
                                    <input
                                        type="checkbox"
                                        value={option.value}
                                        checked={formData.productInterest.includes(option.value)}
                                        onChange={handleProductChange}
                                    />
                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className={styles.section}>
                        <h3>Project Details</h3>
                        <div className={styles.grid2}>
                            <div className={styles.formGroup}>
                                <label htmlFor="quantity">Quantity Required (sq.ft) *</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="5000"
                                    min="0"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="projectType">Project Type *</label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Type</option>
                                    {projectTypeOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* File Upload */}
                    <div className={styles.section}>
                        <h3>Additional Information</h3>
                        <div className={styles.formGroup}>
                            <label htmlFor="boqFile">Upload BOQ/Specification File (Optional)</label>
                            <div className={styles.fileUpload}>
                                <input
                                    type="file"
                                    id="boqFile"
                                    name="boqFile"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                                />
                                <span className={styles.fileName}>
                                    {formData.boqFile ? formData.boqFile.name : 'Choose file...'}
                                </span>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="specialRequests">Special Requests / Notes</label>
                            <textarea
                                id="specialRequests"
                                name="specialRequests"
                                value={formData.specialRequests}
                                onChange={handleInputChange}
                                placeholder="Any specific requirements, finish preferences, or timeline..."
                                rows={4}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {loading ? 'Submitting...' : 'Submit Inquiry'}
                    </motion.button>

                    <p className={styles.disclaimer}>
                        * Required fields. We respect your privacy and will only use your information to respond to your inquiry.
                    </p>
                </form>
            )}
        </motion.div>
    );
}
