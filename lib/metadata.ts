import type { Metadata } from 'next';
import { company } from '@/data/site';

const baseUrl = 'https://www.gloud.io';

export const sharedMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${company.name} | Software, Cloud, Mobile & Growth Delivery`,
    template: `%s | ${company.name}`
  },
  description: company.description,
  openGraph: {
    title: company.name,
    description: company.description,
    siteName: company.name,
    type: 'website',
    url: baseUrl
  },
  twitter: {
    card: 'summary_large_image',
    title: company.name,
    description: company.description
  },
  alternates: {
    canonical: baseUrl
  }
};
