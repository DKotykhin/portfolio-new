'use client';

import { useState } from 'react';
import { Link, usePathname } from '@/i18n/navigation';

export const LanguageButton = ({
  locale,
  isMobile,
  activeSection,
}: {
  locale: string;
  isMobile?: boolean;
  activeSection?: string | null;
}) => {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();

  const href = pathname + (activeSection ? `#${activeSection}` : '');

  return (
    <Link
      href={href}
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
