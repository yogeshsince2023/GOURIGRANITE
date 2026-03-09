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
    default: "Gouri Granite | Premium Marble & Granite Exporters from India",
    template: "%s | Gouri Granite"
  },
  description: "Premium marble, granite, and natural stone manufacturer from India. Supplying architects, builders, and contractors in 50+ countries. Direct from 3 Indian quarries with decades of expertise.",
  keywords: [
    "marble exporter India",
    "granite exporter Rajasthan",
    "natural stone manufacturer",
    "Kishangarh marble",
    "Indian granite",
    "stone supplier",
    "premium marble slabs",
    "granite countertops",
    "natural stone cladding",
    "export stone building materials",
    "Premium natural stone exporter"
  ],
  authors: [{ name: "Gouri Granite" }],
  creator: "Gouri Granite",
  publisher: "Gouri Granite",
  category: "Business",
  classification: "Stone Export",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Gouri Granite',
    url: 'https://gourigranite.com',
    title: 'Premium Marble & Granite Exporters from India | Direct from Quarries',
    description: 'Leading stone exporter supplying premium marble and granite to 50+ countries. Direct from Indian quarries with proven quality and reliability.',
    images: [
      {
        url: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790200/Company_logo_e8ehxq.png',
        width: 1200,
        height: 630,
        alt: 'Gouri Granite - Premium Stone Exporter',
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gourigranite',
    title: 'Premium Marble & Granite from India | Gouri Granite',
    description: 'Premium stone exporter. 3 quarries, 50+ countries, trusted by industry leaders.',
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
      "name": "Gouri Granite",
      "alternateName": "Gouri Granites",
      "description": "Premium manufacturer and exporter of natural stone (marble, granite, onyx) from India",
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
      "knowsAbout": ["Marble", "Granite", "Natural Stone", "Tile Export"],
      "certifications": ["Export House Certificate", "Government Recognized"],
      "priceRange": "$$$"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://gourigranite.com/#localbusiness",
      "name": "Gouri Granite",
      "image": "https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790200/Company_logo_e8ehxq.png",
      "description": "Premium natural stone exporter - marble, granite, onyx",
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
          "name": "Where does Gouri Granite export from?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gouri Granite operates 3 manufacturing facilities - two in Kishangarh, Rajasthan and one in Karimnagar, Telangana, India. We export premium natural stone (marble, granite, onyx, travertine) to 50+ countries worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "What certifications does Gouri Granite have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gouri Granite holds an Export House Certificate and is government-recognized for premium quality natural stone exports to international markets."
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
          <main id="main-content" style={{ minHeight: '80vh' }} role="main">
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
