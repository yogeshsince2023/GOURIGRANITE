export function getOptimizedCloudinaryUrl(url: string, width?: number): string {
    if (!url || !url.includes('res.cloudinary.com')) return url;
    
    const uploadMarker = '/upload/';
    const index = url.indexOf(uploadMarker);
    if (index === -1) return url;
    
    const preUpload = url.substring(0, index + uploadMarker.length);
    const postUpload = url.substring(index + uploadMarker.length);
    
    // High quality with auto format for best compression
    const transformations = ['f_auto', 'q_90'];
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
