'use client';

import React, { useEffect, useState } from 'react';

interface MapLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    googleMapsUrl: string;
    lat?: number;
    lng?: number;
    label?: string;
    children: React.ReactNode;
    className?: string;
}

export default function MapLink({ 
    googleMapsUrl, 
    lat, 
    lng, 
    label, 
    children, 
    className,
    ...props 
}: MapLinkProps) {
    const [href, setHref] = useState(googleMapsUrl);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
            const isAndroid = /Android/.test(navigator.userAgent);

            if (isIOS && lat && lng) {
                // Apple Maps - Native iOS behavior
                setHref(`http://maps.apple.com/?q=${lat},${lng}`);
            } else if (isAndroid && lat && lng) {
                // Geo intent opens app chooser for Uber, Rapido, Google Maps, etc.
                setHref(`geo:${lat},${lng}?q=${lat},${lng}(${encodeURIComponent(label || 'Location')})`);
            }
            // Fallback uses the provided googleMapsUrl which usually works perfectly on desktop
        }
    }, [lat, lng, googleMapsUrl, label]);

    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={className}
            {...props}
        >
            {children}
        </a>
    );
}
