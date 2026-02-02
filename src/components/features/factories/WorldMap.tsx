'use client';

import { useState } from 'react';
import styles from './WorldMap.module.css';
import { Sun, Globe2, Landmark, Map } from 'lucide-react';

// All client countries with coordinates
const CLIENT_COUNTRIES = [
    // Gulf Region
    { name: 'UAE', x: 65, y: 44 },
    { name: 'Qatar', x: 64, y: 44 },
    { name: 'Oman', x: 67, y: 46 },
    { name: 'Saudi Arabia', x: 62, y: 44 },
    { name: 'Kuwait', x: 63, y: 42 },
    { name: 'Bahrain', x: 64, y: 43 },

    // Middle East
    { name: 'Jordan', x: 59, y: 41 },
    { name: 'Lebanon', x: 59, y: 39 },
    { name: 'Syria', x: 60, y: 39 },
    { name: 'Iraq', x: 62, y: 40 },
    { name: 'Iran', x: 65, y: 40 },
    { name: 'Turkey', x: 58, y: 38 },
    { name: 'Yemen', x: 64, y: 49 },

    // Africa
    { name: 'Egypt', x: 57, y: 43 },
    { name: 'Libya', x: 52, y: 42 },
    { name: 'Sudan', x: 58, y: 48 },
    { name: 'Algeria', x: 48, y: 40 },
    { name: 'Tunisia', x: 50, y: 38 },
    { name: 'Morocco', x: 45, y: 40 },
    { name: 'Tanzania', x: 61, y: 60 },
    { name: 'Kenya', x: 62, y: 56 },
    { name: 'Ethiopia', x: 62, y: 52 },
    { name: 'Nigeria', x: 50, y: 52 },
    { name: 'South Africa', x: 56, y: 75 },

    // Asia
    { name: 'India', x: 72, y: 47, isFactory: true },
    { name: 'Pakistan', x: 69, y: 42 },
    { name: 'Bangladesh', x: 75, y: 45 },
    { name: 'Sri Lanka', x: 73, y: 53 },
    { name: 'Nepal', x: 73, y: 43 },
    { name: 'Azerbaijan', x: 64, y: 37 },

    // Europe
    { name: 'United Kingdom', x: 47, y: 26 },
    { name: 'Germany', x: 50, y: 28 },
    { name: 'Italy', x: 51, y: 32 },
    { name: 'Greece', x: 54, y: 35 },
    { name: 'Spain', x: 46, y: 34 },

    // Americas
    { name: 'USA', x: 22, y: 35 },
    { name: 'Brazil', x: 32, y: 65 },
    { name: 'Mexico', x: 18, y: 44 },

    // Oceania
    { name: 'Australia', x: 86, y: 70 },
];

export default function WorldMap() {
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

    return (
        <div className={styles.mapSection}>
            <div className={styles.header}>
                <span className={styles.badge}>🌍 GLOBAL PRESENCE</span>
                <h2 className={styles.title}>Delivering Excellence Worldwide</h2>
                <p className={styles.subtitle}>
                    Premium granite & marble trusted by clients in <strong>{CLIENT_COUNTRIES.length}+ countries</strong>
                </p>
            </div>

            <div className={styles.mapContainer}>
                {/* World Map Image */}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1280px-World_map_blank_without_borders.svg.png"
                    alt="World Map"
                    className={styles.mapImage}
                />

                {/* Gradient Overlay */}
                <div className={styles.mapOverlay}></div>

                {/* Country Markers */}
                {CLIENT_COUNTRIES.map((country, index) => (
                    <div
                        key={country.name}
                        className={`${styles.marker} ${country.isFactory ? styles.factoryMarker : ''}`}
                        style={{
                            left: `${country.x}%`,
                            top: `${country.y}%`,
                            animationDelay: `${index * 0.08}s`
                        }}
                        onMouseEnter={() => setHoveredCountry(country.name)}
                        onMouseLeave={() => setHoveredCountry(null)}
                    >
                        <span className={styles.ping}></span>
                        <span className={styles.dot}></span>

                        {hoveredCountry === country.name && (
                            <div className={styles.tooltip}>
                                {country.name}
                                {country.isFactory && <span className={styles.factoryLabel}>🏭 Factory</span>}
                            </div>
                        )}
                    </div>
                ))}

                {/* Legend */}
                <div className={styles.legend}>
                    <div className={styles.legendItem}>
                        <span className={styles.legendDotGold}></span>
                        <span>Client Location</span>
                    </div>
                    <div className={styles.legendItem}>
                        <span className={styles.legendDotRed}></span>
                        <span>Factory</span>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className={styles.statsBar}>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>{CLIENT_COUNTRIES.length}+</div>
                    <div className={styles.statLabel}>Countries Served</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>3</div>
                    <div className={styles.statLabel}>Manufacturing Units</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>500+</div>
                    <div className={styles.statLabel}>Projects Completed</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>25+</div>
                    <div className={styles.statLabel}>Years Experience</div>
                </div>
            </div>

            {/* Region Cards */}
            <div className={styles.regions}>
                <div className={styles.region}>
                    <div className={styles.regionIcon}><Sun size={32} strokeWidth={1.5} /></div>
                    <h4>Gulf & Middle East</h4>
                    <p>UAE, Qatar, Oman, Saudi Arabia, Kuwait, Bahrain, Jordan, Lebanon, Syria, Iraq, Iran, Turkey, Yemen</p>
                </div>
                <div className={styles.region}>
                    <div className={styles.regionIcon}><Globe2 size={32} strokeWidth={1.5} /></div>
                    <h4>Africa</h4>
                    <p>Egypt, Libya, Sudan, Algeria, Tunisia, Morocco, Tanzania, Kenya, Ethiopia, Nigeria, South Africa</p>
                </div>
                <div className={styles.region}>
                    <div className={styles.regionIcon}><Landmark size={32} strokeWidth={1.5} /></div>
                    <h4>Asia & Europe</h4>
                    <p>India, Pakistan, Bangladesh, Nepal, Sri Lanka, Azerbaijan, UK, Germany, Italy, Greece, Spain</p>
                </div>
                <div className={styles.region}>
                    <div className={styles.regionIcon}><Map size={32} strokeWidth={1.5} /></div>
                    <h4>Americas & Oceania</h4>
                    <p>USA, Brazil, Mexico, Australia</p>
                </div>
            </div>
        </div>
    );
}
