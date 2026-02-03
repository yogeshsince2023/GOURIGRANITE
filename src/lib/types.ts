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
}

export interface Factory {
    id: string;
    name: string;
    location: string;
    coordinates: { lat: number; lng: number };
    capacity: string;
    image: string;
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
