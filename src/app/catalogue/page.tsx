export default function CataloguePage() {
    return (
        <main style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '1rem', backgroundColor: '#1a1a1a', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ margin: 0, fontSize: '1.2rem' }}>Product Catalogue 2025</h1>
                <a href="/catalogue.pdf" download className="btn btn-outline" style={{ color: 'white', borderColor: 'white', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                    Download PDF
                </a>
            </div>
            <iframe
                src="/catalogue.pdf"
                style={{ flex: 1, width: '100%', border: 'none' }}
                title="Gouri Granite Catalogue"
            />
        </main>
    );
}
