import type { Metadata, Viewport } from 'next';
import { site } from '@/config';
import PwaRegister from '@/components/PwaRegister';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  alternates: { canonical: site.url },
  icons: {
    icon: '/assets/logo.svg',
    apple: '/assets/avatar.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: '/assets/screenshot01.png', width: 1080, height: 2131, alt: site.name }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/assets/screenshot01.png'],
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: 'dark light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.language}>
      <body>
        <PwaRegister />
        {children}
      </body>
    </html>
  );
}
