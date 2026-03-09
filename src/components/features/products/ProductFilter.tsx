'use client';

import { useState } from 'react';
import styles from './ProductFilter.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface FilterOptions {
    material: string[];
    color: string[];
    application: string[];
    finish: string[];
}

interface ProductFilterProps {
    onFilterChange: (filters: FilterOptions) => void;
}

const materials = ['Marble', 'Granite', 'Onyx', 'Travertine'];
const colors = ['White', 'Black', 'Green', 'Brown', 'Red', 'Pink', 'Gold', 'Blue'];
const applications = ['Flooring', 'Countertops', 'Cladding', 'Wall Panels', 'Decorative'];
const finishes = ['Polished', 'Honed', 'Leather', 'Flamed'];

export default function ProductFilter({ onFilterChange }: ProductFilterProps) {
    const [filters, setFilters] = useState<FilterOptions>({
        material: [],
        color: [],
        application: [],
        finish: [],
    });

    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        material: true,
        color: true,
        application: true,
        finish: true,
    });

    const toggleFilter = (category: keyof FilterOptions, value: string) => {
        setFilters(prev => {
            const updated = prev[category].includes(value)
                ? prev[category].filter(item => item !== value)
                : [...prev[category], value];

            const newFilters = { ...prev, [category]: updated };
            onFilterChange(newFilters);
            return newFilters;
        });
    };

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const clearFilters = () => {
        setFilters({
            material: [],
            color: [],
            application: [],
            finish: [],
        });
        onFilterChange({
            material: [],
            color: [],
            application: [],
            finish: [],
        });
    };

    const activeFilterCount = Object.values(filters).flat().length;

    return (
        <div className={styles.filterContainer}>
            {/* Filter Header */}
            <div className={styles.filterHeader}>
                <h3>Filters</h3>
                {activeFilterCount > 0 && (
                    <motion.button
                        className={styles.clearBtn}
                        onClick={clearFilters}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Clear All ({activeFilterCount})
                    </motion.button>
                )}
            </div>

            {/* Material Filter */}
            <motion.div className={styles.filterSection}>
                <button
                    className={styles.sectionHeader}
                    onClick={() => toggleSection('material')}
                >
                    <span>Material Type</span>
                    <motion.div
                        animate={{ rotate: expandedSections.material ? 0 : -90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </button>
                <AnimatePresence>
                    {expandedSections.material && (
                        <motion.div
                            className={styles.filterOptions}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            {materials.map(material => (
                                <label key={material} className={styles.filterOption}>
                                    <input
                                        type="checkbox"
                                        checked={filters.material.includes(material)}
                                        onChange={() => toggleFilter('material', material)}
                                    />
                                    <span>{material}</span>
                                </label>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Color Filter */}
            <motion.div className={styles.filterSection}>
                <button
                    className={styles.sectionHeader}
                    onClick={() => toggleSection('color')}
                >
                    <span>Color</span>
                    <motion.div
                        animate={{ rotate: expandedSections.color ? 0 : -90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </button>
                <AnimatePresence>
                    {expandedSections.color && (
                        <motion.div
                            className={styles.filterOptions}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            {colors.map(color => (
                                <label key={color} className={styles.filterOption}>
                                    <input
                                        type="checkbox"
                                        checked={filters.color.includes(color)}
                                        onChange={() => toggleFilter('color', color)}
                                    />
                                    <span>{color}</span>
                                </label>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Application Filter */}
            <motion.div className={styles.filterSection}>
                <button
                    className={styles.sectionHeader}
                    onClick={() => toggleSection('application')}
                >
                    <span>Application</span>
                    <motion.div
                        animate={{ rotate: expandedSections.application ? 0 : -90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </button>
                <AnimatePresence>
                    {expandedSections.application && (
                        <motion.div
                            className={styles.filterOptions}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            {applications.map(app => (
                                <label key={app} className={styles.filterOption}>
                                    <input
                                        type="checkbox"
                                        checked={filters.application.includes(app)}
                                        onChange={() => toggleFilter('application', app)}
                                    />
                                    <span>{app}</span>
                                </label>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Finish Filter */}
            <motion.div className={styles.filterSection}>
                <button
                    className={styles.sectionHeader}
                    onClick={() => toggleSection('finish')}
                >
                    <span>Finish</span>
                    <motion.div
                        animate={{ rotate: expandedSections.finish ? 0 : -90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </button>
                <AnimatePresence>
                    {expandedSections.finish && (
                        <motion.div
                            className={styles.filterOptions}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            {finishes.map(finish => (
                                <label key={finish} className={styles.filterOption}>
                                    <input
                                        type="checkbox"
                                        checked={filters.finish.includes(finish)}
                                        onChange={() => toggleFilter('finish', finish)}
                                    />
                                    <span>{finish}</span>
                                </label>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
