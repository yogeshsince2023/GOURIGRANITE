import { MapPin } from 'lucide-react';

export default function MapPlaceholder() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: '#eef', borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Abstract Map Background */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'url(https://placehold.co/1200x600/aaddff/ffffff?text=World+Map)' }}></div>

            <div style={{ zIndex: 1, textAlign: 'center' }}>
                <h3 style={{ color: '#004488', fontSize: '1.5rem', marginBottom: '1rem' }}>Global Presence Interactive Map</h3>
                <p style={{ color: '#555', maxWidth: '400px', margin: '0 auto' }}>
                    Pins represent our manufacturing units (Red) and client project locations (Blue) across 50+ countries.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <MapPin color="red" fill="red" /> Factory
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <MapPin color="blue" fill="blue" /> Client Project
                    </div>
                </div>
            </div>
        </div>
    );
}
