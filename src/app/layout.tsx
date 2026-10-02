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
  metadataBase: new URL('https://gourigroupindia.com'),
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
    url: 'https://gourigroupindia.com',
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
    canonical: './',
    languages: {
      en: 'https://gourigroupindia.com',
      hi: 'https://gourigroupindia.com/hi',
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
      "@id": "https://gourigroupindia.com/#organization",
      "name": "Gouri Exports",
      "alternateName": "Gouri Exports",
      "description": "Premium Indian manufacturer and exporter of natural stone — Granite, Marble, Quartzite — from own quarries in Rajasthan and Telangana, India",
      "url": "https://gourigroupindia.com",
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
      "@id": "https://gourigroupindia.com/#localbusiness",
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
      "url": "https://gourigroupindia.com",
      "areaServed": ["US", "GB", "EU", "UAE", "AU"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where does Gouri Exports export Indian granite and marble from?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gouri Exports operates 3 manufacturing facilities — two in Kishangarh, Rajasthan and one in Karimnagar, Telangana, India. We are direct manufacturers and exporters of premium Indian Granite, Marble and Quartzite to 40+ countries worldwide. We supply blocks, slabs, tiles and cut-to-size products."
          }
        },
        {
          "@type": "Question",
          "name": "What types of Indian natural stone does Gouri Exports offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer premium Indian Granite (Black Galaxy, Tan Brown, Absolute Black, P-White, Crystal Yellow, Rajasthan Black), Indian Marble (Statuario, Makrana White, Rainforest Green), and Quartzite varieties. Available as blocks, slabs, tiles, and custom cut-to-size products for flooring, countertops, cladding and more."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best Indian granite for countertops?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Black Galaxy, Absolute Black, and Tan Brown are among the best Indian granites for countertops due to their extreme durability, high density, and mirror-polish finish. Gouri Exports manufactures and exports these varieties with factory-direct pricing from our Kishangarh and Karimnagar facilities."
          }
        },
        {
          "@type": "Question",
          "name": "How can I buy granite or marble directly from India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can buy granite and marble directly from India through Gouri Exports. As a direct manufacturer, we eliminate middlemen and offer factory pricing. Contact us at +91 86195 21711 or email gouriexports2022@gmail.com for quotes. We handle quality control, packing, and export logistics to your port."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Indian granite and marble?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian granite is a harder igneous rock ideal for high-traffic areas, countertops, and exterior cladding due to its durability and scratch resistance. Indian marble is a softer metamorphic rock prized for its elegant veining and is preferred for luxury interiors, flooring, and decorative applications. Both are available from Gouri Exports in slabs, tiles, and blocks."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gouri Exports ship granite and marble internationally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Gouri Exports ships to 40+ countries including USA, UK, UAE, Australia, and EU nations. All stone is securely packed in fumigated seaworthy wooden crates. We provide quality inspection reports before loading and manage complete export logistics from Indian quarries to your destination port."
          }
        },
        {
          "@type": "Question",
          "name": "What certifications does Gouri Exports have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gouri Exports holds an Export House Certificate and is government-recognized for premium quality natural stone exports. We have GSTIN: 08BYQPG1619E1ZG and IEC Code: BYQPG1619E, ensuring full compliance with Indian and international trade standards."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get free granite or marble samples from Gouri Exports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Gouri Exports provides free 10x10 cm stone samples for architects and builders. Courier charges apply for international shipments. Contact us to request samples of any Indian granite, marble, or quartzite variety from our collection."
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
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

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
