import styles from './TrustSection.module.css';
import { Building2, Globe2, Award, CheckCircle } from 'lucide-react';

export default function TrustSection() {
    return (
        <section className={styles.trust}>
            <div className="container">
                <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', color: '#888' }}>Trusted by Industry Leaders Worldwide</p>
                <div className={styles.logos}>
                    <div className={styles.logo}><Building2 /> ARCHITEX</div>
                    <div className={styles.logo}><Globe2 /> GLOBAL STONE</div>
                    <div className={styles.logo}><Award /> PREMIER BUILD</div>
                    <div className={styles.logo}><CheckCircle /> QUALITY FIRST</div>
                </div>
            </div>
        </section>
    );
}
