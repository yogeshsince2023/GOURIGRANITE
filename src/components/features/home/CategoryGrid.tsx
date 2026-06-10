'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Maximize2, Scale, X, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import styles from './CategoryGrid.module.css';
import { PRODUCTS } from '@/lib/data';
import { Product } from '@/lib/types';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';

// Choose a curated list of premium stones for the homepage explorer
const CuratedStones = PRODUCTS.filter(p => 
    ['p1', 'p2', 'p3', 'p4', 'p9', 'p13', 'p16', 'p28', 'p6', 'p8', 'p17', 'p24'].includes(p.id)
);

export default function CategoryGrid() {
    // Filter states
    const [selectedMaterial, setSelectedMaterial] = useState<string>('All');
    const [selectedColor, setSelectedColor] = useState<string>('All');
    const [selectedFinish, setSelectedFinish] = useState<string>('All');

    // Quick View state
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

    // Compare states
    const [compareList, setCompareList] = useState<Product[]>([]);
    const [isCompareOpen, setIsCompareOpen] = useState(false);

    // List of unique values for filters
    const materials = ['All', 'Marble', 'Granite', 'Onyx', 'Travertine'];
    const colors = ['All', 'White', 'Black', 'Gold', 'Grey', 'Green', 'Red', 'Blue'];
    const finishes = ['All', 'Polished', 'Honed', 'Leather', 'Backlit'];

    // Filter products
    const filteredStones = CuratedStones.filter(stone => {
        const matchesMaterial = selectedMaterial === 'All' || stone.category === selectedMaterial;
        const matchesColor = selectedColor === 'All' || (stone.color && stone.color === selectedColor);
        const matchesFinish = selectedFinish === 'All' || stone.finish === selectedFinish;
        return matchesMaterial && matchesColor && matchesFinish;
    });

    // Handle Compare List toggle
    const toggleCompare = (product: Product, e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setCompareList(prev => {
            if (prev.some(p => p.id === product.id)) {
                return prev.filter(p => p.id !== product.id);
            }
            if (prev.length >= 3) {
                alert('You can compare a maximum of 3 stones at a time.');
                return prev;
            }
            return [...prev, product];
        });
    };

    // Pre-fill search parameters for links
    const getCollectionUrl = (slug: string) => `/products?collection=${slug}`;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.layout}>
                    
                    {/* Left Column: Explorer Filters & Description */}
                    <div className={styles.left}>
                        <div className={styles.kicker}>Collections Explorer</div>
                        <h2 className={styles.title}>
                            Fine Stone Collection – Curated Indian Quarries & Colors
                        </h2>
                        <p className={styles.desc}>
                            Use our interactive explorer to filter premium natural stone by material, color, and finish. Compare your selections side-by-side.
                        </p>

                        {/* Direct Collections Links */}
                        <div className={styles.collectionLinks} aria-label="Direct Collections Links">
                            <Link href={getCollectionUrl('black-galaxy')} className={styles.collectionLink}>
                                Black Galaxy Granite Collection &rarr;
                            </Link>
                            <Link href={getCollectionUrl('statuario-marble')} className={styles.collectionLink}>
                                Statuario White Marble Collection &rarr;
                            </Link>
                        </div>

                        {/* Filter controls */}
                        <div className={styles.filtersBlock}>
                            <div className={styles.filterGroup}>
                                <span className={styles.filterLabel}>Material Type</span>
                                <div className={styles.filterRow}>
                                    {materials.map(m => (
                                        <button
                                            key={m}
                                            className={`${styles.filterBtn} ${selectedMaterial === m ? styles.activeFilterBtn : ''}`}
                                            onClick={() => setSelectedMaterial(m)}
                                            aria-label={`Filter by ${m}`}
                                        >
                                            {m}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.filterGroup}>
                                <span className={styles.filterLabel}>Stone Color</span>
                                <div className={styles.filterRow}>
                                    {colors.map(c => (
                                        <button
                                            key={c}
                                            className={`${styles.filterBtn} ${selectedColor === c ? styles.activeFilterBtn : ''}`}
                                            onClick={() => setSelectedColor(c)}
                                            aria-label={`Filter by ${c}`}
                                        >
                                            {c}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.filterGroup}>
                                <span className={styles.filterLabel}>Surface Finish</span>
                                <div className={styles.filterRow}>
                                    {finishes.map(f => (
                                        <button
                                            key={f}
                                            className={`${styles.filterBtn} ${selectedFinish === f ? styles.activeFilterBtn : ''}`}
                                            onClick={() => setSelectedFinish(f)}
                                            aria-label={`Filter by ${f}`}
                                        >
                                            {f}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* View All Collections Button */}
                        <div style={{ marginTop: '2.5rem' }}>
                            <Link href="/products" className={styles.cta} aria-label="View all Gouri Exports collections">
                                View all collections <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Stones Grid */}
                    <div className={styles.right}>
                        <motion.div 
                            className={styles.explorerGrid}
                            layout
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredStones.map((stone) => {
                                    const inCompare = compareList.some(p => p.id === stone.id);
                                    return (
                                        <motion.div
                                            key={stone.id}
                                            className={styles.stoneCard}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className={styles.imageWrapper}>
                                                <Image
                                                    src={getOptimizedCloudinaryUrl(stone.image, 500)}
                                                    alt={stone.altText || stone.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 30vw"
                                                    className={styles.stoneImage}
                                                    placeholder="blur"
                                                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23f0f0f0' width='400' height='400'/%3E%3C/svg%3E"
                                                />
                                                
                                                {/* Hover Overlay with Quick Facts */}
                                                <div className={styles.cardHoverOverlay}>
                                                    <div className={styles.quickFacts}>
                                                        <p><strong>Origin:</strong> India</p>
                                                        <p><strong>Dimensions:</strong> {stone.dimensions || 'Customizable'}</p>
                                                        <p><strong>Finish:</strong> {stone.finish}</p>
                                                    </div>

                                                    <div className={styles.overlayActions}>
                                                        <button 
                                                            className={styles.overlayBtn} 
                                                            onClick={() => setQuickViewProduct(stone)}
                                                            aria-label={`Quick view ${stone.name}`}
                                                        >
                                                            <Maximize2 size={16} /> Quick View
                                                        </button>
                                                        <button 
                                                            className={`${styles.overlayBtn} ${inCompare ? styles.inCompareBtn : ''}`} 
                                                            onClick={(e) => toggleCompare(stone, e)}
                                                            aria-label={inCompare ? `Remove ${stone.name} from comparison` : `Add ${stone.name} to comparison`}
                                                        >
                                                            <Scale size={16} /> {inCompare ? 'Added' : 'Compare'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.stoneInfo}>
                                                {/* Breadcrumb-like links */}
                                                <div className={styles.breadcrumbLinks}>
                                                    <Link href="/products">Products</Link> &gt; 
                                                    <span onClick={() => setSelectedMaterial(stone.category)} className={styles.breadcrumbLinkActive}>{stone.category}</span> &gt;
                                                    <span className={styles.breadcrumbCurrent}>{stone.name}</span>
                                                </div>

                                                <h3 className={styles.stoneName}>
                                                    <Link href={`/products/${stone.id}`}>
                                                        {stone.name}
                                                    </Link>
                                                </h3>
                                                <div className={styles.stoneBadges}>
                                                    <span className={styles.stoneBadge}>{stone.category}</span>
                                                    <span className={styles.stoneBadge}>{stone.finish}</span>
                                                    {stone.color && <span className={styles.stoneBadge}>{stone.color}</span>}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>

                            {filteredStones.length === 0 && (
                                <div className={styles.noResults}>
                                    <ShoppingBag size={48} className={styles.noResultsIcon} />
                                    <h3>No matching stones found</h3>
                                    <p>Try clearing some filters to explore our full fine stone collection.</p>
                                    <button 
                                        className="btn btn-outline" 
                                        onClick={() => {
                                            setSelectedMaterial('All');
                                            setSelectedColor('All');
                                            setSelectedFinish('All');
                                        }}
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Quick View Modal */}
            <AnimatePresence>
                {quickViewProduct && (
                    <motion.div 
                        className={styles.modalBackdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setQuickViewProduct(null)}
                    >
                        <motion.div 
                            className={styles.modalCard}
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            <button className={styles.modalClose} onClick={() => setQuickViewProduct(null)} aria-label="Close modal">
                                <X size={24} />
                            </button>

                            <div className={styles.modalContent}>
                                <div className={styles.modalImageWrapper}>
                                    <Image
                                        src={getOptimizedCloudinaryUrl(quickViewProduct.image, 800)}
                                        alt={quickViewProduct.altText || quickViewProduct.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className={styles.modalImage}
                                    />
                                </div>
                                <div className={styles.modalInfo}>
                                    <span className={styles.modalKicker}>{quickViewProduct.category} Collection</span>
                                    <h2 id="modal-title" className={styles.modalTitle}>{quickViewProduct.name}</h2>
                                    <p className={styles.modalDesc}>{quickViewProduct.description}</p>
                                    
                                    <div className={styles.specsTable}>
                                        <div className={styles.specRow}>
                                            <span>Material Type:</span>
                                            <strong>{quickViewProduct.category}</strong>
                                        </div>
                                        <div className={styles.specRow}>
                                            <span>Surface Finish:</span>
                                            <strong>{quickViewProduct.finish}</strong>
                                        </div>
                                        {quickViewProduct.color && (
                                            <div className={styles.specRow}>
                                                <span>Stone Color:</span>
                                                <strong>{quickViewProduct.color}</strong>
                                            </div>
                                        )}
                                        <div className={styles.specRow}>
                                            <span>Dimensions:</span>
                                            <strong>{quickViewProduct.dimensions || '3000 x 1800 mm (Standard)'}</strong>
                                        </div>
                                        <div className={styles.specRow}>
                                            <span>Origin:</span>
                                            <strong>Rajasthan / Telangana, India</strong>
                                        </div>
                                    </div>

                                    <div className={styles.modalActions}>
                                        <Link 
                                            href={`/contact?product=${encodeURIComponent(quickViewProduct.name)}`}
                                            className="btn btn-primary"
                                            aria-label={`Get a quote for ${quickViewProduct.name}`}
                                        >
                                            Request a Free Quote
                                        </Link>
                                        <Link 
                                            href={`/contact?sample=${encodeURIComponent(quickViewProduct.name)}`}
                                            className="btn btn-outline"
                                            aria-label={`Request a sample of ${quickViewProduct.name}`}
                                        >
                                            Request Sample
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Comparison Tray */}
            <AnimatePresence>
                {compareList.length > 0 && (
                    <motion.div 
                        className={styles.compareTray}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                    >
                        <div className={styles.compareTrayContent}>
                            <div className={styles.compareTrayItems}>
                                {compareList.map(stone => (
                                    <div key={stone.id} className={styles.compareTrayItem}>
                                        <div className={styles.trayThumb}>
                                            <Image 
                                                src={getOptimizedCloudinaryUrl(stone.image, 100)} 
                                                alt={stone.name} 
                                                fill 
                                                sizes="60px"
                                            />
                                        </div>
                                        <span className={styles.trayItemName}>{stone.name}</span>
                                        <button 
                                            className={styles.trayItemRemove} 
                                            onClick={(e) => toggleCompare(stone, e)}
                                            aria-label={`Remove ${stone.name} from comparison`}
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ))}
                                {compareList.length < 3 && (
                                    <div className={styles.comparePlaceholder}>
                                        <span>Select {3 - compareList.length} more to compare</span>
                                    </div>
                                )}
                            </div>

                            <div className={styles.compareTrayActions}>
                                <button 
                                    className="btn btn-primary"
                                    disabled={compareList.length < 2}
                                    onClick={() => setIsCompareOpen(true)}
                                >
                                    Compare Now ({compareList.length})
                                </button>
                                <button 
                                    className={styles.clearCompareBtn} 
                                    onClick={() => setCompareList([])}
                                >
                                    Clear All
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Comparison Details Modal */}
            <AnimatePresence>
                {isCompareOpen && (
                    <motion.div 
                        className={styles.modalBackdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCompareOpen(false)}
                    >
                        <motion.div 
                            className={`${styles.modalCard} ${styles.compareModalCard}`}
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="compare-modal-title"
                        >
                            <button className={styles.modalClose} onClick={() => setIsCompareOpen(false)} aria-label="Close comparison">
                                <X size={24} />
                            </button>

                            <h2 id="compare-modal-title" className={styles.compareModalTitle}>Stone Comparison</h2>
                            
                            <div className={styles.compareTableWrapper}>
                                <table className={styles.compareTable}>
                                    <thead>
                                        <tr>
                                            <th>Feature</th>
                                            {compareList.map(stone => (
                                                <th key={stone.id} className={styles.compareTableHead}>
                                                    <div className={styles.compareTableImg}>
                                                        <Image 
                                                            src={getOptimizedCloudinaryUrl(stone.image, 300)} 
                                                            alt={stone.name} 
                                                            fill 
                                                            sizes="150px"
                                                        />
                                                    </div>
                                                    <h3>{stone.name}</h3>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Material Type</strong></td>
                                            {compareList.map(stone => (
                                                <td key={stone.id}>{stone.category}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td><strong>Surface Finish</strong></td>
                                            {compareList.map(stone => (
                                                <td key={stone.id}>{stone.finish}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td><strong>Color</strong></td>
                                            {compareList.map(stone => (
                                                <td key={stone.id}>{stone.color || 'Natural'}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td><strong>Dimensions</strong></td>
                                            {compareList.map(stone => (
                                                <td key={stone.id}>{stone.dimensions || '3000 x 1800 mm'}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td><strong>Key Strengths</strong></td>
                                            {compareList.map(stone => (
                                                <td key={stone.id}>{stone.category === 'Granite' ? 'Highly Durable, Scratch Resistant' : 'Luxury Appearance, Natural Veins'}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td><strong>Action</strong></td>
                                            {compareList.map(stone => (
                                                <td key={stone.id}>
                                                    <Link 
                                                        href={`/contact?product=${encodeURIComponent(stone.name)}`}
                                                        className="btn btn-primary"
                                                        style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                                                        onClick={() => setIsCompareOpen(false)}
                                                    >
                                                        Get Quote
                                                    </Link>
                                                    <button 
                                                        className={styles.removeCompareLink}
                                                        onClick={(e) => {
                                                            toggleCompare(stone, e);
                                                            if (compareList.length <= 2) {
                                                                setIsCompareOpen(false);
                                                            }
                                                        }}
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
