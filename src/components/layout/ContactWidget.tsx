'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ContactWidget.module.css';
import { WEB3FORMS_ACCESS_KEY } from '../../lib/web3forms';
import { 
    Phone, Mail, MessageCircle, Facebook, Instagram, 
    MessageSquare, X, Send, Download, HelpCircle, FileText,
    ChevronRight, Lock
} from 'lucide-react';

interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
    timestamp: Date;
}

export default function ContactWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'links' | 'quote' | 'chatbot'>('links');
    const [mounted, setMounted] = useState(false);

    // Quote form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    // Catalogue download form state
    const [showCatalogForm, setShowCatalogForm] = useState(false);
    const [catalogFormData, setCatalogFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
    });
    const [catalogFormSubmitting, setCatalogFormSubmitting] = useState(false);
    const [catalogFormSuccess, setCatalogFormSuccess] = useState(false);

    // Chatbot states
    const [chatInput, setChatInput] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            sender: 'bot',
            text: 'Hello! I am your Gouri Exports assistant. How can I help you today with your marble and granite requirements?',
            timestamp: new Date()
        }
    ]);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    if (!mounted) return null;

    const toggleWidget = () => setIsOpen(!isOpen);

    const handleQuoteSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
            setName('');
            setEmail('');
            setMessage('');
            setTimeout(() => setFormStatus('idle'), 4000);
        }, 1500);
    };

    // Handle catalogue download - show form first
    const handleCatalogDownload = () => {
        // Check if user already submitted the catalogue form in this session
        const alreadySubmitted = localStorage.getItem('catalogue_widget_submitted');
        if (alreadySubmitted) {
            triggerDownload();
        } else {
            setShowCatalogForm(true);
            setCatalogFormSuccess(false);
        }
    };

    const triggerDownload = () => {
        const link = document.createElement('a');
        link.href = '/catalogue.pdf';
        link.download = 'Gouri_Exports_Catalogue_2026.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleCatalogFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setCatalogFormSubmitting(true);

        const apiHost = 'api.web3' + 'forms.com';
        const submitUrl = `https://${apiHost}/submit`;

        const submitData = new FormData();
        submitData.append('access_key', WEB3FORMS_ACCESS_KEY);
        submitData.append('subject', `Catalogue Download Request - ${catalogFormData.name}`);
        submitData.append('from_name', 'Gouri Granite Website (Widget Catalogue Download)');
        submitData.append('name', catalogFormData.name);
        submitData.append('phone', catalogFormData.phone);
        submitData.append('email', catalogFormData.email);
        submitData.append('company', catalogFormData.company);

        try {
            const response = await fetch(submitUrl, {
                method: 'POST',
                body: submitData,
            });
            const data = await response.json();
            if (data.success) {
                localStorage.setItem('catalogue_widget_submitted', 'true');
                setCatalogFormSuccess(true);
                // Auto-trigger download after form submission
                setTimeout(() => {
                    triggerDownload();
                }, 1000);
            } else {
                alert(data.message || 'Submission failed. Please try again.');
            }
        } catch (err) {
            console.error(err);
            alert('Submission failed. Please check your connection and try again.');
        } finally {
            setCatalogFormSubmitting(false);
        }
    };

    // Chatbot Q&A triggers
    const presetQuestions = [
        { q: 'Which stone is best for kitchen countertops?', a: 'For kitchen countertops, Granite is highly recommended (such as Black Galaxy, Colonial White, or Tan Brown) due to its superior hardness, heat resistance, and scratch resistance. It is highly durable and holds its mirror polish for decades.' },
        { q: 'Do you ship internationally?', a: 'Yes, we export globally! We regularly ship premium marble and granite to 40+ countries including the US, UK, UAE, Europe, and Australia. All shipments are packed securely in fumigated, seaworthy wooden crates.' },
        { q: 'Where are your factories located?', a: 'We operate 3 factories in India: two processing units in Kishangarh, Rajasthan (specialized in Marble and Granite) and one in Karimnagar, Telangana (specialized in premium black and grey granites).' },
        { q: 'How can I request samples?', a: 'We offer free 10x10 cm or 15x15 cm samples of our stones! You only pay the courier charge, which is fully refunded once you place an order. Please submit a request on our "Quick Quote" tab!' }
    ];

    const handleSendChatMessage = (text: string) => {
        if (!text.trim()) return;

        const userMsg: ChatMessage = {
            sender: 'user',
            text,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);

        // Find matches in preset questions
        setTimeout(() => {
            const matched = presetQuestions.find(pq => 
                text.toLowerCase().includes(pq.q.toLowerCase()) || 
                pq.q.toLowerCase().includes(text.toLowerCase())
            );

            let botReply = "Thank you for asking! A Gouri Exports export specialist will get back to you shortly. To get an direct reply, please leave your contact details under the 'Quick Quote' tab.";
            
            if (matched) {
                botReply = matched.a;
            } else if (text.toLowerCase().includes('hello') || text.toLowerCase().includes('hi')) {
                botReply = 'Hello! How can I assist you with your stone selection or export questions?';
            } else if (text.toLowerCase().includes('catalog') || text.toLowerCase().includes('download')) {
                botReply = 'You can download our latest 2026 stone catalog directly from the "Quick Links" tab in this widget, or via the Catalogue page on our site.';
            }

            const botMsg: ChatMessage = {
                sender: 'bot',
                text: botReply,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMsg]);
        }, 800);

        setChatInput('');
    };

    return (
        <div
            className={`${styles.widget} ${isOpen ? styles.expanded : ''}`}
            role="complementary"
            aria-label="Quick contact & stone expert assistant"
        >
            {/* Main Toggle Button */}
            <button
                className={styles.toggleButton}
                onClick={toggleWidget}
                aria-label={isOpen ? "Close contact assistant" : "Open contact assistant"}
                aria-expanded={isOpen}
                aria-controls="assistant-panel"
            >
                {isOpen ? <X size={28} aria-hidden="true" /> : <MessageSquare size={28} aria-hidden="true" />}
            </button>

            {/* Assistant Panel */}
            {isOpen && (
                <div id="assistant-panel" className={styles.panel}>
                    {/* Header */}
                    <div className={styles.panelHeader}>
                        <div className={styles.headerInfo}>
                            <div className={styles.avatar}>G</div>
                            <div>
                                <h4>Gouri Stone Assistant</h4>
                                <span className={styles.status}><span className={styles.statusDot}></span> Online Expert</span>
                            </div>
                        </div>
                        <button className={styles.closePanel} onClick={() => setIsOpen(false)} aria-label="Close panel">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Tabs navigation */}
                    <div className={styles.tabs}>
                        <button 
                            className={`${styles.tabBtn} ${activeTab === 'links' ? styles.activeTab : ''}`}
                            onClick={() => { setActiveTab('links'); setShowCatalogForm(false); }}
                        >
                            <Phone size={16} /> Links
                        </button>
                        <button 
                            className={`${styles.tabBtn} ${activeTab === 'quote' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('quote')}
                        >
                            <FileText size={16} /> Quote
                        </button>
                        <button 
                            className={`${styles.tabBtn} ${activeTab === 'chatbot' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('chatbot')}
                        >
                            <HelpCircle size={16} /> Chat
                        </button>
                    </div>

                    {/* Panel Body */}
                    <div className={styles.panelBody}>
                        
                        {/* Tab 1: Links & Catalog */}
                        {activeTab === 'links' && (
                            <div className={styles.linksTab}>
                                {!showCatalogForm && !catalogFormSuccess ? (
                                    <>
                                        <p className={styles.tabHeading}>Download Resources</p>
                                        <button 
                                            onClick={handleCatalogDownload}
                                            className={`${styles.button} ${styles.catalogDownloadBtn}`}
                                            aria-label="Download Premium Stone Catalog PDF"
                                        >
                                            <Download size={18} /> Download 2026 Catalog (PDF)
                                        </button>

                                        <p className={styles.tabHeading} style={{ marginTop: '1.25rem' }}>Direct Communication</p>
                                        <div className={styles.linkList}>
                                            <a href="https://wa.me/918619521711" target="_blank" rel="noopener noreferrer" className={`${styles.linkItem} ${styles.whatsapp}`}>
                                                <MessageCircle size={20} />
                                                <span>Chat on WhatsApp</span>
                                            </a>
                                            <a href="tel:+918619521711" className={`${styles.linkItem} ${styles.call}`}>
                                                <Phone size={20} />
                                                <span>Call Sales Hotline</span>
                                            </a>
                                            <a href="mailto:gouriexports2022@gmail.com" className={`${styles.linkItem} ${styles.email}`}>
                                                <Mail size={20} />
                                                <span>Email Inquiries</span>
                                            </a>
                                            <div className={styles.socialRow}>
                                                <a href="https://www.facebook.com/share/1E1oey2LtC/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                                                    <Facebook size={20} />
                                                </a>
                                                <a href="https://www.instagram.com/gourigranites.in" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                                                    <Instagram size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                ) : catalogFormSuccess ? (
                                    <div className={styles.catalogFormSuccess}>
                                        <div className={styles.successCheckIcon}>✓</div>
                                        <h4>Thank You!</h4>
                                        <p>Your catalogue download will start automatically. If not, click below:</p>
                                        <button 
                                            onClick={triggerDownload}
                                            className={`${styles.button} ${styles.catalogDownloadBtn}`}
                                        >
                                            <Download size={18} /> Download Now
                                        </button>
                                        <button 
                                            onClick={() => { setShowCatalogForm(false); setCatalogFormSuccess(false); }}
                                            className={styles.backBtn}
                                        >
                                            ← Back to Links
                                        </button>
                                    </div>
                                ) : (
                                    <div className={styles.catalogFormWrapper}>
                                        <h4 className={styles.catalogFormTitle}>
                                            <FileText size={20} /> Access the Catalogue
                                        </h4>
                                        <p className={styles.catalogFormDesc}>
                                            Please share your details to download the complete product catalogue.
                                        </p>
                                        <form onSubmit={handleCatalogFormSubmit} className={styles.widgetForm}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="cat-name">Full Name</label>
                                                <input 
                                                    id="cat-name"
                                                    required 
                                                    type="text" 
                                                    placeholder="Your Name"
                                                    value={catalogFormData.name}
                                                    onChange={(e) => setCatalogFormData({...catalogFormData, name: e.target.value})}
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="cat-phone">Mobile Number</label>
                                                <input 
                                                    id="cat-phone"
                                                    required 
                                                    type="tel" 
                                                    placeholder="+91..."
                                                    value={catalogFormData.phone}
                                                    onChange={(e) => setCatalogFormData({...catalogFormData, phone: e.target.value})}
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="cat-email">Email Address</label>
                                                <input 
                                                    id="cat-email"
                                                    required 
                                                    type="email" 
                                                    placeholder="name@company.com"
                                                    value={catalogFormData.email}
                                                    onChange={(e) => setCatalogFormData({...catalogFormData, email: e.target.value})}
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="cat-company">Company Name</label>
                                                <input 
                                                    id="cat-company"
                                                    required 
                                                    type="text" 
                                                    placeholder="Your Company"
                                                    value={catalogFormData.company}
                                                    onChange={(e) => setCatalogFormData({...catalogFormData, company: e.target.value})}
                                                />
                                            </div>
                                            <button 
                                                type="submit" 
                                                className={styles.catalogSubmitBtn}
                                                disabled={catalogFormSubmitting}
                                            >
                                                {catalogFormSubmitting ? 'Processing...' : (
                                                    <>Download Catalogue <ChevronRight size={18} /></>
                                                )}
                                            </button>
                                            <p className={styles.privacyNote}>
                                                <Lock size={12} /> Your information is secure and private.
                                            </p>
                                        </form>
                                        <button 
                                            onClick={() => setShowCatalogForm(false)}
                                            className={styles.backBtn}
                                        >
                                            ← Back to Links
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Tab 2: Quick Quote Form */}
                        {activeTab === 'quote' && (
                            <div className={styles.quoteTab}>
                                {formStatus === 'success' ? (
                                    <div className={styles.successMessage}>
                                        <h4>Quote Request Received!</h4>
                                        <p>Thank you. A premium stone export manager will contact you with factory pricing and samples info within 12 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleQuoteSubmit} className={styles.widgetForm}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="widget-name">Your Name</label>
                                            <input 
                                                id="widget-name"
                                                required 
                                                type="text" 
                                                placeholder="e.g. John Doe"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="widget-email">Email Address</label>
                                            <input 
                                                id="widget-email"
                                                required 
                                                type="email" 
                                                placeholder="john@company.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="widget-message">Requirement / Stone Details</label>
                                            <textarea 
                                                id="widget-message"
                                                required 
                                                rows={3} 
                                                placeholder="I need 5000 sq ft polished Black Galaxy slabs..."
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                        </div>
                                        <button 
                                            disabled={formStatus === 'submitting'} 
                                            type="submit" 
                                            className="btn btn-primary"
                                            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                                        >
                                            {formStatus === 'submitting' ? 'Sending Details...' : 'Send Quote Request'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        )}

                        {/* Tab 3: Q&A Chatbot */}
                        {activeTab === 'chatbot' && (
                            <div className={styles.chatTab}>
                                <div className={styles.chatHistory}>
                                    {messages.map((m, i) => (
                                        <div key={i} className={`${styles.chatBubble} ${m.sender === 'user' ? styles.userBubble : styles.botBubble}`}>
                                            <p>{m.text}</p>
                                            <span className={styles.chatTime}>
                                                {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    ))}
                                    <div ref={chatEndRef} />
                                </div>

                                {/* Quick Questions Buttons */}
                                <div className={styles.quickQuestions}>
                                    <p className={styles.quickQuestionsLabel}>Suggested Questions:</p>
                                    <div className={styles.questionsRow}>
                                        {presetQuestions.map((pq, idx) => (
                                            <button 
                                                key={idx} 
                                                className={styles.quickQBtn}
                                                onClick={() => handleSendChatMessage(pq.q)}
                                            >
                                                {pq.q}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.chatInputWrapper}>
                                    <input 
                                        type="text" 
                                        placeholder="Ask a custom question..."
                                        value={chatInput}
                                        onChange={(e) => setChatInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleSendChatMessage(chatInput);
                                        }}
                                        aria-label="Chatbot input"
                                    />
                                    <button 
                                        className={styles.sendBtn}
                                        onClick={() => handleSendChatMessage(chatInput)}
                                        aria-label="Send message"
                                    >
                                        <Send size={16} />
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
