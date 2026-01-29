'use client';

import { useState } from 'react';
import styles from './WorldMap.module.css';

// All client countries with coordinates
const CLIENT_COUNTRIES = [
    // Gulf Region
    { name: 'UAE', x: 63, y: 48 },
    { name: 'Qatar', x: 61, y: 47 },
    { name: 'Oman', x: 64, y: 50 },
    { name: 'Saudi Arabia', x: 58, y: 47 },
    { name: 'Kuwait', x: 59, y: 44 },
    { name: 'Bahrain', x: 60, y: 46 },

    // Middle East
    { name: 'Jordan', x: 55, y: 44 },
    { name: 'Lebanon', x: 55, y: 42 },
    { name: 'Syria', x: 56, y: 41 },
    { name: 'Iraq', x: 58, y: 43 },
    { name: 'Iran', x: 62, y: 43 },
    { name: 'Turkey', x: 53, y: 38 },
    { name: 'Yemen', x: 60, y: 53 },

    // Africa
    { name: 'Egypt', x: 52, y: 46 },
    { name: 'Libya', x: 47, y: 45 },
    { name: 'Sudan', x: 52, y: 52 },
    { name: 'Algeria', x: 42, y: 44 },
    { name: 'Tunisia', x: 45, y: 41 },
    { name: 'Morocco', x: 38, y: 44 },
    { name: 'Tanzania', x: 55, y: 64 },
    { name: 'Kenya', x: 56, y: 60 },
    { name: 'Ethiopia', x: 57, y: 56 },
    { name: 'Nigeria', x: 44, y: 55 },
    { name: 'South Africa', x: 50, y: 76 },

    // Asia
    { name: 'India', x: 70, y: 50, isFactory: true },
    { name: 'Pakistan', x: 67, y: 45 },
    { name: 'Bangladesh', x: 74, y: 48 },
    { name: 'Sri Lanka', x: 71, y: 57 },
    { name: 'Nepal', x: 72, y: 45 },
    { name: 'Azerbaijan', x: 60, y: 38 },

    // Europe
    { name: 'United Kingdom', x: 38, y: 30 },
    { name: 'Germany', x: 44, y: 32 },
    { name: 'Italy', x: 46, y: 37 },
    { name: 'Greece', x: 50, y: 38 },
    { name: 'Spain', x: 38, y: 38 },

    // Americas
    { name: 'USA', x: 18, y: 40 },
    { name: 'Brazil', x: 28, y: 65 },
    { name: 'Mexico', x: 15, y: 48 },

    // Oceania
    { name: 'Australia', x: 84, y: 72 },
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
                    <div className={styles.regionIcon}>🌅</div>
                    <h4>Gulf & Middle East</h4>
                    <p>UAE, Qatar, Oman, Saudi Arabia, Kuwait, Bahrain, Jordan, Lebanon, Syria, Iraq, Iran, Turkey, Yemen</p>
                </div>
                <div className={styles.region}>
                    <div className={styles.regionIcon}>🌍</div>
                    <h4>Africa</h4>
                    <p>Egypt, Libya, Sudan, Algeria, Tunisia, Morocco, Tanzania, Kenya, Ethiopia, Nigeria, South Africa</p>
                </div>
                <div className={styles.region}>
                    <div className={styles.regionIcon}>🌏</div>
                    <h4>Asia & Europe</h4>
                    <p>India, Pakistan, Bangladesh, Nepal, Sri Lanka, Azerbaijan, UK, Germany, Italy, Greece, Spain</p>
                </div>
                <div className={styles.region}>
                    <div className={styles.regionIcon}>🌎</div>
                    <h4>Americas & Oceania</h4>
                    <p>USA, Brazil, Mexico, Australia</p>
                </div>
            </div>
        </div>
    );
}
