import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    // Support multiple modern formats for best quality and performance
    formats: ['image/avif', 'image/webp'],
    
    // Responsive device sizes for all screen types
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Image container sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    
    // High quality settings for better image fidelity
    qualities: [50, 65, 75, 85, 95, 100],
    
    // Aggressive caching - 1 year for images
    minimumCacheTTL: 60 * 60 * 24 * 365,

    // Enable optimization in both dev and production for best quality
    unoptimized: false,

    // Configure remote patterns for images from Cloudinary and production domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'your-production-domain.com',
        pathname: '/**',
      },
    ],
  },

  // Rest of your config remains the same
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'image/*',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;