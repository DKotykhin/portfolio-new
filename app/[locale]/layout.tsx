import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import Script from 'next/script';

import '../globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin', 'cyrillic'],
});

const metaByLocale: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Dmytro Kotykhin Portfolio',
    description: 'Dmytro Kotykhin - FullStack Developer. Portfolio Website',
  },
  ua: {
    title: 'Портфоліо Дмитра Котихіна',
    description: 'Дмитро Котихін - Full Stack Розробник. Сайт-портфоліо',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = metaByLocale[locale] ?? metaByLocale.en;

  return {
    metadataBase: new URL('https://dmytro-kotykhin.pp.ua'),
    title: meta.title,
    description: meta.description,
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
      title: meta.title,
      description: meta.description,
      siteName: 'Dmytro Kotykhin Portfolio',
      images: [{ url: '/logo192.png' }],
    },
    twitter: {
      card: 'summary',
      title: meta.title,
      description: meta.description,
      images: ['/logo192.png'],
    },
  };
}

const TRACKING_ID: string = process.env.NEXT_PUBLIC_GOOGLE_DATA_ID || '';

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
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${TRACKING_ID}');
          `}
        </Script>
      </head>
      <body className={`${nunito.variable} antialiased`}>
        <a
          href="#page-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-9999 focus:px-4 focus:py-2 focus:bg-background focus:text-antiqueWhite focus:rounded-md focus:outline-none"
        >
          Skip to content
        </a>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
