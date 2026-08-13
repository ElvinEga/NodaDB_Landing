import type { Metadata } from 'next';
import Image from 'next/image';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nodadb.com'),
  title: {
    default: 'NodaDB — Universal Database Workspace Powered by Kulacore',
    template: '%s | NodaDB',
  },
  description:
    'NodaDB is a modern, local-first universal database management workspace built in Rust and powered by Kulacore. Explore, query, and visualize PostgreSQL, MySQL, SQLite, MongoDB, Redis, ClickHouse, and cloud databases in one fast, native application.',
  keywords: [
    'NodaDB',
    'Kulacore',
    'nodadb.com',
    'database client',
    'PostgreSQL GUI',
    'MySQL GUI',
    'SQLite browser',
    'Redis client',
    'MongoDB GUI',
    'Rust database manager',
    'local-first database workspace',
    'developer database tool',
  ],
  authors: [{ name: 'Kulacore', url: 'https://nodadb.com' }],
  creator: 'Kulacore',
  publisher: 'Kulacore',
  alternates: {
    canonical: 'https://nodadb.com',
  },
  openGraph: {
    title: 'NodaDB — Universal Database Workspace Powered by Kulacore',
    description:
      'Explore, query, and visualize all your SQL & NoSQL databases in one native Rust application. Powered by Kulacore.',
    url: 'https://nodadb.com',
    siteName: 'NodaDB',
    images: [
      {
        url: '/images/noda-preview.png',
        width: 1200,
        height: 630,
        alt: 'NodaDB - Universal Database Workspace',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NodaDB — Universal Database Workspace Powered by Kulacore',
    description:
      'Explore, query, and visualize SQL & NoSQL databases in one native Rust app. Powered by Kulacore.',
    images: ['/images/noda-preview.png'],
    creator: '@NodaDB',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NodaDB',
    operatingSystem: 'macOS, Windows, Linux',
    applicationCategory: 'DeveloperApplication',
    description:
      'Universal local-first database management workspace built in Rust. Powered by Kulacore.',
    url: 'https://nodadb.com',
    publisher: {
      '@type': 'Organization',
      name: 'Kulacore',
      url: 'https://nodadb.com',
    },
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0B0B09] text-zinc-100 font-sans antialiased selection:bg-[#17CF97]/30 selection:text-[#17CF97] min-h-screen overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
