import Link from 'next/link';
import Image from 'next/image';
import styles from './CategoryGrid.module.css';
import { FACTORIES } from '@/lib/data';

export default function FactoryPreview() {
    return (
        <section style={{ padding: '5rem 0', backgroundColor: 'var(--white)' }}>
            <div className="container">
                <div className={styles.heading}>
                    <h2>Manufacturing Excellence</h2>
                    <p>State-of-the-art facilities processing over 2M sq. ft. annually.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {FACTORIES.map((factory, index) => (
                        <div
                            key={factory.id}
                            style={{
                                marginBottom: '1rem',
                                opacity: 0,
                                animation: 'fadeInUp 0.6s ease-out forwards',
                                animationDelay: `${index * 0.15}s`
                            }}
                        >
                            <div style={{
                                position: 'relative',
                                height: '250px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                            }}>
                                <Image
                                    src={factory.image}
                                    alt={factory.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    quality={70}
                                />
                            </div>
                            <div style={{ padding: '1.5rem 0' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-playfair)' }}>{factory.name}</h3>
                                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{factory.location}</p>
                                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)' }}>Capacity: {factory.capacity}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    <Link href="/factories" className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>
                        Explore Global Presence
                    </Link>
                </div>
            </div>
        </section>
    );
}
