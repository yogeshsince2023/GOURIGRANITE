import { OWNERS } from '@/lib/data';
import { Award, ShieldCheck, Leaf, CheckCircle, Factory, Gem, Package, Eye } from 'lucide-react';
import styles from './about.module.css';

export default function AboutPage() {
    return (
        <main className={styles.pageContainer}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <h1>About Us</h1>
                <p>
                    Pioneering the natural stone industry with integrity and innovation since 1998.
                </p>
            </div>

            <div className="container">
                {/* Welcome Section */}
                <div className={styles.welcomeSection}>
                    <h2>Welcome to Gouri Marble Udhyog</h2>
                    <p>
                        Welcome to Gouri Marble Udhyog, where legacy meets precision. Located in the heart of India's stone capital, we are a premier manufacturer and supplier of high-quality Granite and Marble.
                    </p>
                    <p>
                        Unlike traders who simply buy and sell, we are <strong>Direct Manufacturers</strong>. This means we oversee every step of the process—from sourcing the finest raw blocks from the mines to the precision cutting and polishing in our factory. This hands-on approach allows us to guarantee two things that matter most to our clients: <strong>uncompromised quality</strong> and <strong>unbeatable factory pricing</strong>.
                    </p>
                    <p>
                        Whether you are a builder looking for reliable bulk supply for a commercial project, or a homeowner seeking that one perfect slab for your kitchen, Gouri Marble Udhyog delivers with integrity. We believe that stone is not just a building material; it is an investment that stands the test of time.
                    </p>
                </div>

                {/* Mission Section */}
                <div className={styles.missionSection}>
                    <h2>Our Mission</h2>
                    <p>
                        At Gouri Marble Udhyog, our mission is to build lasting foundations through the timeless strength of granite. As direct manufacturers, we are dedicated to delivering uncompromised quality and precision in every slab. We strive to bridge the gap between nature's raw beauty and modern architecture, ensuring that every client—from homeowners to large-scale developers—receives the finest stone with transparency, integrity, and trust.
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
                            <p>We value our relationships ("Vyavahar") as much as our business.</p>
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
                                <h4>Direct Factory Rates</h4>
                                <p>Cut out the middlemen. Get the best market price directly from the manufacturer.</p>
                            </div>
                        </div>
                        <div className={styles.reasonCard}>
                            <Package size={32} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                            <div>
                                <h4>Bulk Capacity</h4>
                                <p>We have the infrastructure to fulfill large-scale orders for hospitals, hotels, and townships on time.</p>
                            </div>
                        </div>
                        <div className={styles.reasonCard}>
                            <CheckCircle size={32} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                            <div>
                                <h4>Quality Control</h4>
                                <p>Every slab undergoes a rigorous check for cracks, flatness, and polish quality before dispatch.</p>
                            </div>
                        </div>
                        <div className={styles.reasonCard}>
                            <Gem size={32} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                            <div>
                                <h4>Wide Inventory</h4>
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
                                Category A
                            </span>
                            <h3>The Granite Range</h3>
                            <p style={{ color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>Strong, durable, and perfect for heavy-use areas.</p>
                            <p style={{ color: '#bbb', lineHeight: 1.7, marginBottom: '1rem' }}>
                                Discover our extensive range of North and South Indian Granites. Known for their high density and mirror-polish, our granite slabs are ideal for kitchen countertops, flooring, and exterior cladding.
                            </p>
                            <p style={{ color: '#999', fontSize: '0.9rem' }}>
                                <strong style={{ color: 'var(--accent)' }}>Available in:</strong> Rajasthan Black, Crystal Yellow, P-White, Tan Brown, and more.
                            </p>
                        </div>

                        {/* Category B: Marble */}
                        <div className={styles.marbleCard}>
                            <span className={`${styles.categoryBadge} ${styles.categoryBadgeDark}`}>
                                Category B
                            </span>
                            <h3>The Marble Range</h3>
                            <p style={{ color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>Elegant, classic, and timeless.</p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                From the pristine whites of Makrana to the rich textures of colored marble, our collection brings luxury to your interiors. Processed with precision to highlight the natural veins and patterns that make every slab unique.
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
                        <h3>ISO Certified</h3>
                        <p>ISO 9001:2015 standards.</p>
                    </div>
                    <div className={styles.certCard}>
                        <Leaf size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                        <h3>Sustainable Mining</h3>
                        <p>Eco-friendly extraction practices.</p>
                    </div>
                </div>

                {/* Owners */}
                <div className={styles.leadershipSection}>
                    <h2>Leadership</h2>
                    <div className={styles.leadersGrid}>
                        {OWNERS.map(owner => (
                            <div key={owner.id} className={styles.leaderCard}>
                                <img src={owner.image} alt={owner.name} />
                                <h3>{owner.name}</h3>
                                <p className={styles.role}>{owner.role}</p>
                                <p className={styles.bio}>{owner.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
