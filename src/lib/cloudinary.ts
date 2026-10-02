export function getOptimizedCloudinaryUrl(url: string, width?: number): string {
    if (!url || !url.includes('res.cloudinary.com')) return url;
    
    const uploadMarker = '/upload/';
    const index = url.indexOf(uploadMarker);
    if (index === -1) return url;
    
    const preUpload = url.substring(0, index + uploadMarker.length);
    const postUpload = url.substring(index + uploadMarker.length);
    
    // High quality with auto format and optimized compression
    const transformations = ['f_auto', 'q_75'];
    if (width) {
        transformations.push(`w_${width}`);
    }
    
    return `${preUpload}${transformations.join(',')}/${postUpload}`;
}

export function getOptimizedCloudinaryVideoUrl(url: string): string {
    if (!url || !url.includes('res.cloudinary.com')) return url;
    
    const uploadMarker = '/upload/';
    const index = url.indexOf(uploadMarker);
    if (index === -1) return url;
    
    const preUpload = url.substring(0, index + uploadMarker.length);
    const postUpload = url.substring(index + uploadMarker.length);
    return `${preUpload}f_auto,q_auto,vc_auto/${postUpload}`;
}

// Luxury warm stone dark gradient placeholder for smooth blur-up loading
export const STONE_BLUR_DATA_URL = 
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231c1917'/%3E%3Cstop offset='50%25' stop-color='%23292524'/%3E%3Cstop offset='100%25' stop-color='%231c1917'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23g)'/%3E%3C/svg%3E";
