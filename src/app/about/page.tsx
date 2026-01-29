import { OWNERS } from '@/lib/data';
import { Award, ShieldCheck, Leaf, CheckCircle, Factory, Gem, Package, Eye } from 'lucide-react';

export default function AboutPage() {
    return (
        <main>
            {/* Hero Section */}
            <div style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', marginBottom: '1rem' }}>About Us</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: '#ccc' }}>
                    Pioneering the natural stone industry with integrity and innovation since 1998.
                </p>
            </div>

            <div className="container" style={{ padding: '4rem 0' }}>
                {/* Welcome Section */}
                <div style={{ marginBottom: '4rem', maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                        Welcome to Gouri Marble Udhyog
                    </h2>
                    <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>
                        Welcome to Gouri Marble Udhyog, where legacy meets precision. Located in the heart of India's stone capital, we are a premier manufacturer and supplier of high-quality Granite and Marble.
                    </p>
                    <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>
                        Unlike traders who simply buy and sell, we are <strong>Direct Manufacturers</strong>. This means we oversee every step of the process—from sourcing the finest raw blocks from the mines to the precision cutting and polishing in our factory. This hands-on approach allows us to guarantee two things that matter most to our clients: <strong>uncompromised quality</strong> and <strong>unbeatable factory pricing</strong>.
                    </p>
                    <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#555' }}>
                        Whether you are a builder looking for reliable bulk supply for a commercial project, or a homeowner seeking that one perfect slab for your kitchen, Gouri Marble Udhyog delivers with integrity. We believe that stone is not just a building material; it is an investment that stands the test of time.
                    </p>
                </div>

                {/* Mission Section */}
                <div style={{
                    marginBottom: '4rem',
                    padding: '3rem',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                    borderRadius: '16px',
                    textAlign: 'center'
                }}>
                    <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '1.5rem', color: '#d4af37' }}>
                        Our Mission
                    </h2>
                    <p style={{ lineHeight: 1.9, fontSize: '1.15rem', color: '#e0e0e0', maxWidth: '800px', margin: '0 auto' }}>
                        At Gouri Marble Udhyog, our mission is to build lasting foundations through the timeless strength of granite. As direct manufacturers, we are dedicated to delivering uncompromised quality and precision in every slab. We strive to bridge the gap between nature's raw beauty and modern architecture, ensuring that every client—from homeowners to large-scale developers—receives the finest stone with transparency, integrity, and trust.
                    </p>
                </div>

                {/* Core Values */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Our Core Values</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '2rem', backgroundColor: '#fafafa', borderRadius: '12px', textAlign: 'center', borderLeft: '4px solid #d4af37' }}>
                            <Eye size={48} color="#d4af37" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>Transparency</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.7 }}>What you see is what you get. No hidden cracks, no artificial coloring.</p>
                        </div>
                        <div style={{ padding: '2rem', backgroundColor: '#fafafa', borderRadius: '12px', textAlign: 'center', borderLeft: '4px solid #d4af37' }}>
                            <ShieldCheck size={48} color="#d4af37" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>Consistency</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.7 }}>Uniform thickness and polish across every slab.</p>
                        </div>
                        <div style={{ padding: '2rem', backgroundColor: '#fafafa', borderRadius: '12px', textAlign: 'center', borderLeft: '4px solid #d4af37' }}>
                            <Award size={48} color="#d4af37" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>Commitment</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.7 }}>We value our relationships ("Vyavahar") as much as our business.</p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div style={{
                    marginBottom: '4rem',
                    padding: '3rem',
                    background: 'linear-gradient(145deg, #f8f6f3 0%, #f0ede8 100%)',
                    borderRadius: '16px'
                }}>
                    <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--primary)' }}>
                        Why Choose Us
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                            <Factory size={32} color="#d4af37" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                            <div>
                                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Direct Factory Rates</h4>
                                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>Cut out the middlemen. Get the best market price directly from the manufacturer.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                            <Package size={32} color="#d4af37" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                            <div>
                                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Bulk Capacity</h4>
                                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>We have the infrastructure to fulfill large-scale orders for hospitals, hotels, and townships on time.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                            <CheckCircle size={32} color="#d4af37" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                            <div>
                                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Quality Control</h4>
                                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>Every slab undergoes a rigorous check for cracks, flatness, and polish quality before dispatch.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                            <Gem size={32} color="#d4af37" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                            <div>
                                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Wide Inventory</h4>
                                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>A massive stockyard ensuring you have plenty of options to choose from without waiting.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Collection */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Our Collection</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        {/* Category A: Granite */}
                        <div style={{
                            padding: '2.5rem',
                            background: 'linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%)',
                            borderRadius: '16px',
                            color: 'white'
                        }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '0.35rem 0.75rem',
                                backgroundColor: '#d4af37',
                                color: '#1a1a1a',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                marginBottom: '1rem'
                            }}>
                                Category A
                            </span>
                            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>The Granite Range</h3>
                            <p style={{ color: '#d4af37', fontWeight: 500, marginBottom: '1rem' }}>Strong, durable, and perfect for heavy-use areas.</p>
                            <p style={{ color: '#bbb', lineHeight: 1.7, marginBottom: '1rem' }}>
                                Discover our extensive range of North and South Indian Granites. Known for their high density and mirror-polish, our granite slabs are ideal for kitchen countertops, flooring, and exterior cladding.
                            </p>
                            <p style={{ color: '#999', fontSize: '0.9rem' }}>
                                <strong style={{ color: '#d4af37' }}>Available in:</strong> Rajasthan Black, Crystal Yellow, P-White, Tan Brown, and more.
                            </p>
                        </div>

                        {/* Category B: Marble */}
                        <div style={{
                            padding: '2.5rem',
                            background: 'linear-gradient(145deg, #f9f7f5 0%, #f0ede8 100%)',
                            borderRadius: '16px',
                            border: '1px solid #e8e4de'
                        }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '0.35rem 0.75rem',
                                backgroundColor: '#1a1a1a',
                                color: 'white',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                marginBottom: '1rem'
                            }}>
                                Category B
                            </span>
                            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>The Marble Range</h3>
                            <p style={{ color: '#d4af37', fontWeight: 500, marginBottom: '1rem' }}>Elegant, classic, and timeless.</p>
                            <p style={{ color: '#555', lineHeight: 1.7 }}>
                                From the pristine whites of Makrana to the rich textures of colored marble, our collection brings luxury to your interiors. Processed with precision to highlight the natural veins and patterns that make every slab unique.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Certifications/Values */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '5rem', textAlign: 'center' }}>
                    <div style={{ padding: '2rem', backgroundColor: '#fafafa', borderRadius: '12px' }}>
                        <Award size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ marginBottom: '0.5rem' }}>Premium Quality</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Rigorous 3-stage quality check.</p>
                    </div>
                    <div style={{ padding: '2rem', backgroundColor: '#fafafa', borderRadius: '12px' }}>
                        <ShieldCheck size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ marginBottom: '0.5rem' }}>ISO Certified</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>ISO 9001:2015 standards.</p>
                    </div>
                    <div style={{ padding: '2rem', backgroundColor: '#fafafa', borderRadius: '12px' }}>
                        <Leaf size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ marginBottom: '0.5rem' }}>Sustainable Mining</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Eco-friendly extraction practices.</p>
                    </div>
                </div>

                {/* Owners */}
                <div>
                    <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>Leadership</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {OWNERS.map(owner => (
                            <div key={owner.id} style={{ textAlign: 'center' }}>
                                <img src={owner.image} alt={owner.name} style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{owner.name}</h3>
                                <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>{owner.role}</p>
                                <p style={{ color: '#555', maxWidth: '400px', margin: '0 auto' }}>{owner.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
