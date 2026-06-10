import { FACTORIES } from '@/lib/data';
import WorldMap from '@/components/features/factories/WorldMap';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import styles from './factories.module.css';

const getFactorySlug = (id: string) => {
    switch (id) {
        case 'f1': return 'kishangarh-marble-udhyog';
        case 'f2': return 'kishangarh-granites';
        case 'f3': return 'karimnagar-granito';
        default: return '';
    }
};

export default function FactoriesPage() {
    return (
        <main className={styles.pageContainer}>
            <div className={styles.hero}>
                <h1>Global Operations</h1>
                <p>
                    From our mines in India to skyscrapers in New York.
                </p>
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.factoriesSection}>
                    <h2>Our Factories</h2>
                    <div className={styles.factoriesGrid}>
                        {FACTORIES.map(factory => (
                            <div key={factory.id} className={styles.factoryCard}>
                                <img src={factory.image} alt={factory.name} />
                                <div className={styles.factoryInfo}>
                                    <h3>{factory.name}</h3>
                                    <p className={styles.locationText}>
                                        <MapPin size={16} className={styles.locationIcon} /> {factory.location}
                                    </p>
                                    <p className={styles.capacityText}><strong>Capacity:</strong> {factory.capacity}</p>
                                    <Link 
                                        href={`/factories/${getFactorySlug(factory.id)}`}
                                        className="btn btn-primary"
                                        style={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}
                                    >
                                        View Factory Profile
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.mapSection}>
                    <WorldMap />
                </div>
            </div>
        </main>
    );
}
