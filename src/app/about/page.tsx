import { Award, ShieldCheck, Leaf, CheckCircle, Factory, Gem, Package, Eye } from 'lucide-react';
import styles from './about.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Gouri Exports | Premium Indian Granite, Marble & Quartzite Manufacturer',
    description: 'Gouri Exports — India\'s leading manufacturer and exporter of premium Granite, Marble and Quartzite. Own manufacturing facilities, direct quarry sourcing, exporting to 40+ countries worldwide.',
    keywords: ['about Gouri Exports', 'Indian granite manufacturer', 'marble exporter India', 'quartzite supplier India', 'natural stone company India', 'Kishangarh marble factory', 'Indian quarry stone'],
};

export default function AboutPage() {
    return (
        <main className={styles.pageContainer}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <h1>About Gouri Exports</h1>
                <p>
                    Premium Indian Natural Stone — Granite | Marble | Quartzite
                </p>
            </div>

            <div className="container">
                {/* Welcome Section */}
                <div className={styles.welcomeSection}>
                    <h2>Gouri Group — From Indian Quarries to Global Projects</h2>
                    <p>
                        At Gouri Exports, we bring the finest natural stone from India to projects around the world. With our own manufacturing facilities and direct sourcing from Indian quarries, we specialize in premium <strong>Granite</strong>, <strong>Marble</strong> and <strong>Quartzite</strong>, selected for their natural beauty, durability, consistency and exceptional finish.
                    </p>
                    <p>
                        From elegant Indian marble and powerful, durable granite to luxurious and distinctive quartzite, our collection offers a wide range of colours, patterns, textures and finishes for residential, commercial and architectural applications.
                    </p>
                    <p>
                        We supply blocks, slabs, tiles and cut-to-size products, with customized solutions to meet the requirements of architects, designers, builders, developers, importers and stone distributors.
                    </p>
                    <p>
                        Unlike traders who simply buy and sell, we are <strong>Direct Manufacturers</strong>. This means we oversee every step of the process — from sourcing the finest raw blocks from the mines to the precision cutting and polishing in our factory. This hands-on approach allows us to guarantee two things that matter most to our clients: <strong>uncompromised quality</strong> and <strong>unbeatable factory pricing</strong>.
                    </p>
                </div>

                {/* Mission Section */}
                <div className={styles.missionSection}>
                    <h2>Our Mission</h2>
                    <p>
                        Our focus is simple: quality, consistency, reliable service and long-term relationships. Every stone is carefully selected and processed to meet international standards, while our experienced team manages quality control, finishing, packing and export logistics from India to global markets.
                    </p>
                    <p>
                        Whether you are looking for a signature marble for a luxury interior, durable granite for a high-traffic project, or premium quartzite for a statement surface, Gouri Exports delivers Indian natural stone with confidence and care.
                    </p>
                    <p style={{ marginTop: '1.5rem', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 500 }}>
                        From Indian quarries to global projects — Natural Stone, Crafted for Excellence.
                    </p>
                </div>

                {/* Core Values */}
                <div className={styles.valuesSection}>
                    <h2>Our Core Values</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <Eye size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                            <h3>Transparency</h3>
                            <p>What you see is what you get. No hidden cracks, no artificial coloring.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <ShieldCheck size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                            <h3>Consistency</h3>
                            <p>Uniform thickness and polish across every slab.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <Award size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                            <h3>Commitment</h3>
                            <p>We value our relationships as much as our business. Quality is our First Priority.</p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className={styles.whyChooseSection}>
                    <h2>Why Choose Us</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <Factory size={32} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                            <div>
                                <h3>Direct Factory Rates</h3>
                                <p>Cut out the middlemen. Get the best market price directly from the manufacturer.</p>
                            </div>
                        </div>
                        <div className={styles.reasonCard}>
                            <Package size={32} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                            <div>
                                <h3>Bulk Capacity</h3>
                                <p>We have the infrastructure to fulfill large-scale orders for hospitals, hotels, and townships on time.</p>
                            </div>
                        </div>
                        <div className={styles.reasonCard}>
                            <CheckCircle size={32} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                            <div>
                                <h3>Quality Control</h3>
                                <p>Every slab undergoes a rigorous check for cracks, flatness, and polish quality before dispatch.</p>
                            </div>
                        </div>
                        <div className={styles.reasonCard}>
                            <Gem size={32} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                            <div>
                                <h3>Wide Inventory</h3>
                                <p>A massive stockyard ensuring you have plenty of options to choose from without waiting.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Collection */}
                <div className={styles.collectionSection}>
                    <h2>Our Collection</h2>
                    <div className={styles.collectionGrid}>
                        {/* Category A: Granite */}
                        <div className={styles.graniteCard}>
                            <span className={`${styles.categoryBadge} ${styles.categoryBadgeGold}`}>
                                Granite
                            </span>
                            <h3>The Granite Range</h3>
                            <p style={{ color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>Strong, durable, and perfect for heavy-use areas.</p>
                            <p style={{ color: '#bbb', lineHeight: 1.7, marginBottom: '1rem' }}>
                                Discover our extensive range of North and South Indian Granites. Known for their high density and mirror-polish, our granite slabs are ideal for kitchen countertops, flooring, and exterior cladding.
                            </p>
                            <p style={{ color: '#999', fontSize: '0.9rem' }}>
                                <strong style={{ color: 'var(--accent)' }}>Available in:</strong> Rajasthan Black, Crystal Yellow, P-White, Tan Brown, Black Galaxy, and more.
                            </p>
                        </div>

                        {/* Category B: Marble */}
                        <div className={styles.marbleCard}>
                            <span className={`${styles.categoryBadge} ${styles.categoryBadgeDark}`}>
                                Marble
                            </span>
                            <h3>The Marble Range</h3>
                            <p style={{ color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>Elegant, classic, and timeless.</p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                From the pristine whites of Makrana to the rich textures of colored marble, our collection brings luxury to your interiors. Processed with precision to highlight the natural veins and patterns that make every slab unique.
                            </p>
                        </div>

                        {/* Category C: Quartzite */}
                        <div className={styles.graniteCard}>
                            <span className={`${styles.categoryBadge} ${styles.categoryBadgeGold}`}>
                                Quartzite
                            </span>
                            <h3>The Quartzite Range</h3>
                            <p style={{ color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>Luxurious, distinctive, and statement-making.</p>
                            <p style={{ color: '#bbb', lineHeight: 1.7 }}>
                                Premium quartzite for statement surfaces — naturally harder than marble with stunning visual depth. Perfect for high-end countertops, feature walls, and luxury architectural elements.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Certifications/Values */}
                <div className={styles.certificationsGrid}>
                    <div className={styles.certCard}>
                        <Award size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                        <h3>Premium Quality</h3>
                        <p>Rigorous 3-stage quality check.</p>
                    </div>
                    <div className={styles.certCard}>
                        <ShieldCheck size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                        <h3>Export Recognized</h3>
                        <p>Government export house certification.</p>
                    </div>
                    <div className={styles.certCard}>
                        <Leaf size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                        <h3>Sustainable Mining</h3>
                        <p>Eco-friendly extraction practices.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

