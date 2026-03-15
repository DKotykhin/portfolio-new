import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';

import '../globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dmytro-kotykhin.pp.ua'),
  title: 'Dmytro Kotykhin Portfolio',
  description: 'Dmytro Kotykhin - FullStack Developer. Portfolio Website',
  keywords: ['portfolio', 'CV', 'FrontEnd Developer', 'FullStack Developer', 'WEB Developer', 'Software engineer'],
  authors: [{ name: 'Dmytro Kotykhin', url: 'https://dmytro-kotykhin.pp.ua' }],
  icons: {
    apple: '/logo192.png',
    icon: '/logo192.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://dmytro-kotykhin.pp.ua',
    title: 'Dmytro Kotykhin Portfolio',
    description: 'Dmytro Kotykhin - FullStack Developer. Portfolio Website',
    siteName: 'Dmytro Kotykhin Portfolio',
    images: [{ url: '/logo192.png' }],
  },
  twitter: {
    card: 'summary',
    title: 'Dmytro Kotykhin Portfolio',
    description: 'Dmytro Kotykhin - FullStack Developer. Portfolio Website',
    images: ['/logo192.png'],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${nunito.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
