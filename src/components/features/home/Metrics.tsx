import styles from './Metrics.module.css';

const metrics = [
    { label: 'Years in Business', value: '25+' },
    { label: 'Countries Served', value: '40+' },
    { label: 'Factories', value: '3' },
    { label: 'Sq. Ft. Annually', value: '2M+' },
];

export default function Metrics() {
    return (
        <section className={styles.metrics}>
            <div className={`container ${styles.grid}`}>
                {metrics.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <h4>{item.value}</h4>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
