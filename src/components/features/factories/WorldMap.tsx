'use client';

import { useState } from 'react';
import styles from './WorldMap.module.css';
import { Sun, Globe2, Landmark, Map } from 'lucide-react';

// All client countries with coordinates
const CLIENT_COUNTRIES = [
    // Gulf Region
    { name: 'UAE', x: 61, y: 34 },
    { name: 'Qatar', x: 60, y: 34 },
    { name: 'Oman', x: 63, y: 36 },
    { name: 'Saudi Arabia', x: 58, y: 34 },
    { name: 'Kuwait', x: 59, y: 32 },
    { name: 'Bahrain', x: 60, y: 33 },

    // Middle East
    { name: 'Jordan', x: 55, y: 31 },
    { name: 'Lebanon', x: 55, y: 29 },
    { name: 'Syria', x: 56, y: 29 },
    { name: 'Iraq', x: 58, y: 30 },
    { name: 'Iran', x: 61, y: 30 },
    { name: 'Turkey', x: 54, y: 28 },
    { name: 'Yemen', x: 60, y: 39 },

    // Africa
    { name: 'Egypt', x: 53, y: 33 },
    { name: 'Libya', x: 48, y: 32 },
    { name: 'Sudan', x: 54, y: 38 },
    { name: 'Algeria', x: 44, y: 30 },
    { name: 'Tunisia', x: 46, y: 28 },
    { name: 'Morocco', x: 41, y: 30 },
    { name: 'Tanzania', x: 57, y: 50 },
    { name: 'Kenya', x: 58, y: 46 },
    { name: 'Ethiopia', x: 58, y: 42 },
    { name: 'Nigeria', x: 46, y: 42 },
    { name: 'South Africa', x: 52, y: 65 },

    // Asia
    { name: 'India', x: 68, y: 37, isFactory: true },
    { name: 'Bangladesh', x: 71, y: 35 },
    { name: 'Sri Lanka', x: 69, y: 44 },
    { name: 'Nepal', x: 69, y: 33 },
    { name: 'Azerbaijan', x: 60, y: 27 },

    // Europe
    { name: 'United Kingdom', x: 43, y: 16 },
    { name: 'Germany', x: 46, y: 18 },
    { name: 'Italy', x: 47, y: 22 },
    { name: 'Greece', x: 50, y: 25 },
    { name: 'Spain', x: 42, y: 24 },

    // Americas
    { name: 'USA', x: 18, y: 25 },
    { name: 'Brazil', x: 28, y: 55 },
    { name: 'Mexico', x: 14, y: 34 },

    // Oceania
    { name: 'Australia', x: 82, y: 60 },

];

export default function WorldMap() {
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

    return (
        <div className={styles.mapSection}>
            <div className={styles.header}>
                <span className={styles.badge}>🌍 GLOBAL PRESENCE</span>
                <h2 className={styles.title}>Delivering Excellence Worldwide</h2>
                <p className={styles.subtitle}>
                    Premium granite & marble trusted by clients in <strong>{(CLIENT_COUNTRIES.length) + 1}+ countries</strong>
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
                    <div className={styles.statNumber}>40+</div>
                    <div className={styles.statLabel}>Countries Served</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>3</div>
                    <div className={styles.statLabel}>Manufacturing Units</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>700+</div>
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
                    <p>India, Bangladesh, Nepal, Sri Lanka, Azerbaijan, UK, Germany, Italy, Greece, Spain</p>
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
