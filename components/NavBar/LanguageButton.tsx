'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';

export const LanguageButton = ({ locale, isMobile }: { locale: string; isMobile?: boolean }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="/"
      locale={locale === 'en' ? 'ua' : 'en'}
      aria-label={locale === 'en' ? 'Switch to Ukrainian' : 'Switch to English'}
      className="capitalize flex justify-center items-center py-1 min-w-12 rounded-md text-md border border-lightGray hover:brightness-125 transition-discrete duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered || isMobile ? (locale === 'en' ? 'Ua' : 'En') : locale}
    </Link>
  );
};
