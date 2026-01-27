import { OWNERS } from '@/lib/data';
import { Award, ShieldCheck, Leaf } from 'lucide-react';

export default function AboutPage() {
    return (
        <main>
            <div style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', marginBottom: '1rem' }}>About Us</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: '#ccc' }}>
                    Pioneering the natural stone industry with integrity and innovation since 1998.
                </p>
            </div>

            <div className="container" style={{ padding: '4rem 0' }}>
                {/* Story */}
                <div style={{ marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '1.5rem' }}>Our Story</h2>
                    <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#555' }}>
                        What started as a single quarry in Rajasthan has grown into a global export house.
                        At Gouri Granite, we believe that every slab tells a story of the earth's history.
                        We combine traditional craftsmanship with modern technology to deliver stones that define luxury spaces around the world.
                    </p>
                </div>

                {/* Values/Certifications */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '5rem', textAlign: 'center' }}>
                    <div style={{ padding: '2rem', backgroundColor: '#fafafa' }}>
                        <Award size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ marginBottom: '0.5rem' }}>Premium Quality</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Rigorous 3-stage quality check.</p>
                    </div>
                    <div style={{ padding: '2rem', backgroundColor: '#fafafa' }}>
                        <ShieldCheck size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ marginBottom: '0.5rem' }}>ISO Certified</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>ISO 9001:2015 standards.</p>
                    </div>
                    <div style={{ padding: '2rem', backgroundColor: '#fafafa' }}>
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
