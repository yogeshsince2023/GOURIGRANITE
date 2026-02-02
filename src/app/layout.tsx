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
    default: "Gouri Granite | Premium Natural Stone Exporters from India",
    template: "%s | Gouri Granite"
  },
  description: "Leading manufacturer and exporter of premium Indian marble, granite, and natural stone. Serving architects and builders in 40+ countries with ISO certified quality.",
  keywords: ["granite", "marble", "natural stone", "Indian granite", "stone exporter", "Kishangarh marble", "building materials"],
  authors: [{ name: "Gouri Granite" }],
  creator: "Gouri Granite",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Gouri Granite',
    title: 'Premium Natural Stone Exporters from India',
    description: 'Leading manufacturer and exporter of premium Indian marble, granite, and natural stone.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gouri Granite | Premium Natural Stone',
    description: 'Leading manufacturer and exporter of premium Indian marble and granite.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
  },
};

// Structured Data for Organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gouri Granite",
  "description": "Premium manufacturer and exporter of natural stone from India",
  "url": "https://gourigranite.com",
  "logo": "https://gourigranite.com/logo.jpeg",
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
      "addressCountry": "IN"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/share/1E1oey2LtC/",
    "https://www.instagram.com/gourigranites.in"
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
