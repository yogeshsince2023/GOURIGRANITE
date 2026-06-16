import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FACTORIES, PRODUCTS } from '@/lib/data';
import { MapPin, Calendar, Activity, CheckCircle, ArrowLeft, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import styles from './factoryProfile.module.css';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';
import MapLink from '@/components/ui/MapLink';

interface Props {
    params: Promise<{ slug: string }>;
}

// Maps slug to factory ID
const slugToIdMap: Record<string, string> = {
    'kishangarh-marble-udhyog': 'f1',
    'kishangarh-granites': 'f2',
    'karimnagar-granito': 'f3'
};

const idToSlugMap: Record<string, string> = {
    'f1': 'kishangarh-marble-udhyog',
    'f2': 'kishangarh-granites',
    'f3': 'karimnagar-granito'
};

export function generateStaticParams() {
    return [
        { slug: 'kishangarh-marble-udhyog' },
        { slug: 'kishangarh-granites' },
        { slug: 'karimnagar-granito' }
    ];
}

export default async function FactoryProfilePage({ params }: Props) {
    const { slug } = await params;
    const factoryId = slugToIdMap[slug];
    const factory = FACTORIES.find(f => f.id === factoryId);

    if (!factory) {
        notFound();
    }

    // Get products associated with this factory
    const associatedProducts = PRODUCTS.filter(p => p.factoryId === factory.id);

    return (
        <main className={styles.pageContainer}>
            <div className={`container ${styles.content}`}>
                <Link href="/factories" className={styles.backLink}>
                    <ArrowLeft size={16} /> Back to Global Operations
                </Link>

                {/* Grid header */}
                <div className={styles.profileGrid}>
                    
                    {/* Media section */}
                    <div className={styles.mediaSection}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={getOptimizedCloudinaryUrl(factory.image, 1000)}
                                alt={factory.altText || factory.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className={styles.image}
                                priority
                            />
                        </div>
                    </div>

                    {/* Details section */}
                    <div className={styles.infoSection}>
                        <span className={styles.kicker}>Direct Manufacturer Profile</span>
                        <h1>{factory.name}</h1>
                        
                        <div className={styles.metaInfo}>
                            <p className={styles.metaItem}>
                                <MapPin size={18} className={styles.icon} />
                                {factory.mapUrl ? (
                                    <MapLink
                                        googleMapsUrl={factory.mapUrl}
                                        lat={factory.coordinates?.lat}
                                        lng={factory.coordinates?.lng}
                                        label={factory.name}
                                        style={{ color: 'var(--accent)', textDecoration: 'underline', textDecorationColor: '#666' }}
                                    >
                                        {factory.location}
                                    </MapLink>
                                ) : (
                                    <span>{factory.location}</span>
                                )}
                            </p>
                            <div className={styles.metaGrid}>
                                <div className={styles.metaCard}>
                                    <Calendar size={20} className={styles.cardIcon} />
                                    <div>
                                        <span className={styles.cardLabel}>Established</span>
                                        <strong className={styles.cardValue}>{factory.yearEstablished}</strong>
                                    </div>
                                </div>
                                <div className={styles.metaCard}>
                                    <Activity size={20} className={styles.cardIcon} />
                                    <div>
                                        <span className={styles.cardLabel}>Monthly Capacity</span>
                                        <strong className={styles.cardValue}>{factory.capacity}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.detailBlock}>
                            <h3>Factory Specialization</h3>
                            <p className={styles.desc}>
                                Specialized in high-volume processing and finishing of premium <strong>{factory.specialization}</strong>. Direct from our quarries with full quality control from block cutting to mirror-polishing.
                            </p>
                        </div>

                        {/* Certifications */}
                        {factory.certifications && factory.certifications.length > 0 && (
                            <div className={styles.detailBlock}>
                                <h3>Recognized Standards</h3>
                                <div className={styles.certList}>
                                    {factory.certifications.map((cert, i) => (
                                        <div key={i} className={styles.certItem}>
                                            <CheckCircle size={16} className={styles.checkIcon} />
                                            <span>{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Machinery & Process Grid */}
                {factory.machinery && factory.machinery.length > 0 && (
                    <>
                        <div className={styles.sectionDivider} />
                        <div className={styles.machinerySection}>
                            <h2>Infrastructure & Processing Capacity</h2>
                            <p className={styles.sectionDesc}>
                                Equipped with high-precision machinery to ensure uniform thickness, laser-cut edges, and premium gloss index.
                            </p>
                            <div className={styles.machineryGrid}>
                                {factory.machinery.map((machine, index) => (
                                    <div key={index} className={styles.machineCard}>
                                        <div className={styles.machineDot} />
                                        <span>{machine}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* Products processed section */}
                <div className={styles.sectionDivider} />
                <div className={styles.productsSection}>
                    <h2>Stones Processed at this Facility</h2>
                    <p className={styles.sectionDesc}>
                        View our premium collection processed in {factory.name}. Available in slabs, tiles, and custom sizes.
                    </p>
                    <div className={styles.productsGrid}>
                        {associatedProducts.slice(0, 4).map(product => (
                            <Link key={product.id} href={`/products/${product.id}`} className={styles.productCard}>
                                <div className={styles.productImgWrapper}>
                                    <Image
                                        src={getOptimizedCloudinaryUrl(product.image, 400)}
                                        alt={product.name}
                                        fill
                                        sizes="250px"
                                        className={styles.productImg}
                                    />
                                </div>
                                <h4>{product.name}</h4>
                                <div className={styles.productDetails}>
                                    <span>{product.category}</span>
                                    <span>{product.finish}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact Funnel Form */}
                <div className={styles.sectionDivider} />
                <div className={styles.contactSection}>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactLeft}>
                            <h2>Request Factory Pricing</h2>
                            <p>
                                Get a direct-manufacturer quote for wholesale orders, project supply, or custom size blocks.
                            </p>
                            <div className={styles.trustPoints}>
                                <p>&bull; 100% Direct Quarry Pricing (No Middlemen)</p>
                                <p>&bull; Global shipping inside fumigated seaworthy crates</p>
                                <p>&bull; Quality inspection reports provided before loading</p>
                            </div>
                            <div className={styles.directContact}>
                                <p><Phone size={16} /> Call Hotline: +91 86195 21711</p>
                                <p><Mail size={16} /> Email: gouriexports2022@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.contactRight}>
                            <form className={styles.profileForm}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="pname">Full Name</label>
                                    <input required id="pname" type="text" placeholder="Your Name" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="pemail">Email Address</label>
                                    <input required id="pemail" type="email" placeholder="email@company.com" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="pphone">Phone / WhatsApp</label>
                                    <input required id="pphone" type="tel" placeholder="+1 555 123 4567" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="pmessage">Quantity & Requirement Details</label>
                                    <textarea 
                                        required 
                                        id="pmessage" 
                                        rows={4} 
                                        placeholder={`I am interested in products from ${factory.name}. Please provide specifications & sample details...`}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    Request Factory Quote
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
