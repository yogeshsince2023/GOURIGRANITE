import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, FACTORIES } from '@/lib/data';
import { Share2, Download, Truck } from 'lucide-react';

interface Props {
    params: { id: string };
}

// Ensure correct type for params in Next.js 13+ App Router
export function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id,
    }));
}

export default function ProductDetail({ params }: Props) {
    const product = PRODUCTS.find((p) => p.id === params.id);

    if (!product) {
        notFound();
    }

    const factory = FACTORIES.find(f => f.id === product.factoryId);

    return (
        <main>
            <div className="container" style={{ padding: '4rem 0' }}>
                <Link href="/products" style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
                    &larr; Back to Catalog
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', marginTop: '1rem' }}>
                    {/* Image Section */}
                    <div>
                        <div style={{ borderRadius: '8px', overflow: 'hidden', aspectRatio: '4/3' }}>
                            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            {/* Thumbnails placeholders */}
                            <div style={{ width: '80px', height: '80px', background: '#eee', borderRadius: '4px' }}></div>
                            <div style={{ width: '80px', height: '80px', background: '#eee', borderRadius: '4px' }}></div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div>
                        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{product.name}</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '1.5rem' }}>{product.category} Series</p>

                        <p style={{ lineHeight: 1.8, color: '#555', marginBottom: '2rem' }}>
                            {product.description}
                        </p>

                        <div style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '1.5rem 0', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Technical Specifications</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <span style={{ display: 'block', color: '#888', fontSize: '0.85rem' }}>Finish</span>
                                    <span style={{ fontWeight: 600 }}>{product.finish}</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', color: '#888', fontSize: '0.85rem' }}>Dimensions</span>
                                    <span style={{ fontWeight: 600 }}>{product.dimensions}</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', color: '#888', fontSize: '0.85rem' }}>Origin</span>
                                    <span style={{ fontWeight: 600 }}>{factory?.location || 'India'}</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', color: '#888', fontSize: '0.85rem' }}>Usage</span>
                                    <span style={{ fontWeight: 600 }}>Interior / Exterior</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link href="/contact" className="btn btn-primary" style={{ flex: 1 }} target="_blank">Request Quote</Link>
                            <button className="btn btn-outline" style={{ flex: 1 }}>Request Sample</button>
                        </div>

                        <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', color: '#666', fontSize: '0.9rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Truck size={18} /> Global Shipping</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Download size={18} /> Download Spec Sheet</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Share2 size={18} /> Share</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
