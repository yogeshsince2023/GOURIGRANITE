import type { Metadata } from "next";
import "../app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactWidget from "@/components/layout/ContactWidget";
import CookieConsent from "@/components/layout/CookieConsent";
import { ThemeProvider } from "@/components/ThemeProvider";
import SkipLink from "@/components/SkipLink";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap', // Better performance
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gourigranite.com'),
  title: {
    default: "Gouri Exports | Premium Indian Granite, Marble & Quartzite Exporters from India",
    template: "%s | Gouri Exports — Indian Natural Stone"
  },
  description: "Gouri Exports — India's leading manufacturer and exporter of premium Granite, Marble and Quartzite. Direct from own quarries in Rajasthan & Telangana. Blocks, slabs, tiles & cut-to-size for architects, builders & distributors worldwide. Quality is our First Priority.",
  keywords: [
    "Indian granite exporter",
    "Indian marble exporter",
    "granite exporter India",
    "marble exporter India",
    "quartzite exporter India",
    "Indian natural stone",
    "Indian granite supplier",
    "Indian marble supplier",
    "granite manufacturer India",
    "marble manufacturer India",
    "Kishangarh marble",
    "Kishangarh granite",
    "Rajasthan granite",
    "Rajasthan marble",
    "Indian granite slabs",
    "Indian marble slabs",
    "Indian quartzite slabs",
    "natural stone exporter India",
    "premium granite India",
    "premium marble India",
    "granite countertops India",
    "marble flooring India",
    "granite tiles India",
    "Black Galaxy granite",
    "Tan Brown granite",
    "Indian white marble",
    "stone supplier India",
    "granite blocks India",
    "marble blocks India",
    "Indian stone company",
    "granite export from India",
    "marble export from India",
    "buy granite from India",
    "buy marble from India",
    "Indian quartzite supplier",
    "Gouri Exports",
    "Gouri Granite"
  ],
  authors: [{ name: "Gouri Exports" }],
  creator: "Gouri Exports",
  publisher: "Gouri Exports",
  category: "Business",
  classification: "Indian Natural Stone Export",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Gouri Exports',
    url: 'https://gourigranite.com',
    title: 'Gouri Exports | Premium Indian Granite, Marble & Quartzite Exporters',
    description: 'India\'s leading manufacturer and exporter of premium Granite, Marble and Quartzite. Direct from own quarries — blocks, slabs, tiles for architects & builders worldwide.',
    images: [
      {
        url: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790200/Company_logo_e8ehxq.png',
        width: 1200,
        height: 630,
        alt: 'Gouri Exports - Premium Indian Granite, Marble & Quartzite Exporter',
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gourigranite',
    title: 'Gouri Exports | Premium Indian Granite, Marble & Quartzite Exporters',
    description: 'India\'s leading manufacturer and exporter of premium Granite, Marble and Quartzite. Direct quarry sourcing, 40+ countries.',
    creator: '@gourigranite',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://gourigranite.com',
    languages: {
      en: 'https://gourigranite.com',
      hi: 'https://gourigranite.com/hi',
    },
  },
};

// Viewport configuration for Next.js 16+
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// Structured Data for Organization & Business
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gourigranite.com/#organization",
      "name": "Gouri Exports",
      "alternateName": "Gouri Exports",
      "description": "Premium Indian manufacturer and exporter of natural stone — Granite, Marble, Quartzite — from own quarries in Rajasthan and Telangana, India",
      "url": "https://gourigranite.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790200/Company_logo_e8ehxq.png",
        "width": 260,
        "height": 130
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8619521711",
        "contactType": "sales",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Hindi"]
      },
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Kishangarh",
          "addressRegion": "Rajasthan",
          "postalCode": "305801",
          "addressCountry": "IN",
          "streetAddress": "Kali Dungri"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Karimnagar",
          "addressRegion": "Telangana",
          "postalCode": "505401",
          "addressCountry": "IN",
          "streetAddress": "Baopet"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/share/1E1oey2LtC/",
        "https://www.instagram.com/gourigranites.in"
      ],
      "foundingDate": "2000",
      "knowsAbout": ["Indian Granite", "Indian Marble", "Quartzite", "Natural Stone", "Granite Slabs", "Marble Slabs", "Stone Export", "Granite Tiles", "Cut-to-Size Stone"],
      "certifications": ["Export House Certificate", "Government Recognized"],
      "priceRange": "$$$"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://gourigranite.com/#localbusiness",
      "name": "Gouri Exports",
      "image": "https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790200/Company_logo_e8ehxq.png",
      "description": "Premium Indian natural stone exporter — Granite, Marble, Quartzite from own quarries",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kishangarh",
        "addressRegion": "Rajasthan",
        "postalCode": "305801",
        "addressCountry": "IN"
      },
      "telephone": "+91-8619521711",
      "url": "https://gourigranite.com",
      "areaServed": ["US", "GB", "EU", "UAE", "AU"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where does Gouri Exports export from?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gouri Exports operates 3 manufacturing facilities — two in Kishangarh, Rajasthan and one in Karimnagar, Telangana, India. We are direct manufacturers and exporters of premium Indian Granite, Marble and Quartzite to 40+ countries worldwide. We supply blocks, slabs, tiles and cut-to-size products."
          }
        },
        {
          "@type": "Question",
          "name": "What certifications does Gouri Exports have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gouri Exports holds an Export House Certificate and is government-recognized for premium quality natural stone exports to international markets."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
        <ThemeProvider>
          <SkipLink />
          <Header />
          <main id="main-content" style={{ minHeight: '80vh' }}>
            {children}
          </main>
          <ContactWidget />
          <CookieConsent />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
