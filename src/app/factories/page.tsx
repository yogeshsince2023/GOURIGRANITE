import { FACTORIES } from '@/lib/data';
import WorldMap from '@/components/features/factories/WorldMap';
import { MapPin } from 'lucide-react';
import styles from './factories.module.css';

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
                                    <h3>{factory.name}</h3>izes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" s
                                    <p className={styles.locationText}>
                                        <MapPin size={16} className={styles.locationIcon} /> {factory.location}
                                    </p>
                                    <p className={styles.capacityText}><strong>Capacity:</strong> {factory.capacity}</p>
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
