export interface Product {
    id: string;
    name: string;
    category: 'Marble' | 'Granite' | 'Onyx' | 'Travertine';
    finish: 'Polished' | 'Honed' | 'Leather' | 'Flamed' | 'Backlit' | 'Lappato';
    dimensions: string;
    description: string;
    image: string; // URL
    factoryId: string;
    featured?: boolean;
    color?: string; // e.g., 'White', 'Black', 'Green'
    applications?: string[]; // e.g., ['Flooring', 'Countertops']
    altText?: string; // SEO alt text
}

export interface Factory {
    id: string;
    name: string;
    location: string;
    coordinates: { lat: number; lng: number };
    mapUrl?: string;
    capacity: string;
    image: string;
    altText?: string;
    yearEstablished?: number;
    specialization?: string; // e.g., 'Marble', 'Granite', 'Mixed'
    machinery?: string[];
    certifications?: string[];
}

export interface Owner {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
}

export interface ClientLocation {
    id: string;
    country: string;
    coordinates: { lat: number; lng: number };
    projectName?: string;
}
