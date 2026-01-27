import { FACTORIES, CLIENT_LOCATIONS } from '@/lib/data';
import MapPlaceholder from '@/components/features/factories/MapPlaceholder';
import { MapPin } from 'lucide-react';

export default function FactoriesPage() {
    return (
        <main>
            <div style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', marginBottom: '1rem' }}>Global Operations</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: '#ccc' }}>
                    From our mines in India to skyscrapers in New York.
                </p>
            </div>

            <div className="container" style={{ padding: '4rem 0' }}>
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', marginBottom: '1.5rem' }}>Our Factories</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {FACTORIES.map(factory => (
                            <div key={factory.id} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                                <img src={factory.image} alt={factory.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{factory.name}</h3>
                                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666', marginBottom: '1rem' }}>
                                        <MapPin size={16} /> {factory.location}
                                    </p>
                                    <p style={{ fontSize: '0.9rem' }}><strong>Capacity:</strong> {factory.capacity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', marginBottom: '1.5rem' }}>Global Reach</h2>
                    <MapPlaceholder />
                    <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        {CLIENT_LOCATIONS.map(client => (
                            <div key={client.id} style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
                                <strong style={{ display: 'block' }}>{client.country}</strong>
                                <span style={{ fontSize: '0.85rem', color: '#666' }}>{client.projectName}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
