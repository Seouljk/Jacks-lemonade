import type { Metadata, Viewport } from 'next';
import { SITE_CONFIG } from '@/lib/data';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0F4A26',
};

export const metadata: Metadata = {
  title: "Jack's Lemonade - The Only Fresh Lemonade in 30 Flavors",
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),

  // Open Graph for social sharing
  openGraph: {
    title: "Jack's Lemonade - Fresh, Hand-Squeezed Lemonade",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    type: 'website',
    locale: 'en_PH',
    siteName: SITE_CONFIG.siteName,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Jack's Lemonade - The only fresh lemonade in 30 flavors",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Jack's Lemonade",
    description: SITE_CONFIG.description,
    images: ['/og-image.jpg'],
    creator: '@jackslemonadeph',
  },

  // Additional meta tags
  keywords: [
    'lemonade',
    'fresh lemonade',
    'hand-squeezed lemonade',
    'Metro Manila',
    'beverage',
    'drinks',
    'healthy drinks',
    '30 flavors',
    'tamarind lemonade',
    'tea lemonade',
    'herb lemonade',
    'fruit lemonade',
  ],

  authors: [{ name: 'Jack\'s Lemonade' }],
  creator: 'Jack\'s Lemonade',
  publisher: 'Jack\'s Lemonade',

  // Canonical URL
  alternates: {
    canonical: SITE_CONFIG.url,
  },

  // Mobile app meta tags
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: SITE_CONFIG.siteName,
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Caveat:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap"
          as="style"
        />

        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: SITE_CONFIG.siteName,
              description: SITE_CONFIG.description,
              image: `${SITE_CONFIG.url}/og-image.jpg`,
              logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
              url: SITE_CONFIG.url,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Metro Manila',
                addressRegion: 'NCR',
                addressCountry: 'PH',
              },
              sameAs: [
                SITE_CONFIG.socialLinks.facebook,
                SITE_CONFIG.socialLinks.instagram,
              ],
              priceRange: '₱₱',
            }),
          }}
        />

        {/* Structured Data - Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: "Home",
                  item: SITE_CONFIG.url,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: "Menu",
                  item: `${SITE_CONFIG.url}/#menu`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: "Find a Branch",
                  item: `${SITE_CONFIG.url}/#branches`,
                },
              ],
            }),
          }}
        />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Sitemap and RSS (if applicable) */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
