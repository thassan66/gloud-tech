import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { company } from '@/data/site';
import { sharedMetadata } from '@/lib/metadata';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = sharedMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    email: company.email,
    telephone: company.phone,
    address: company.headquarters.map((location) => ({
      '@type': 'PostalAddress',
      addressLocality: location
    })),
    description: company.description,
    areaServed: ['Pakistan', 'Ireland', 'Europe', 'Middle East'],
    knowsAbout: ['Web development', 'Mobile apps', 'Cloud engineering', 'Digital marketing']
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
