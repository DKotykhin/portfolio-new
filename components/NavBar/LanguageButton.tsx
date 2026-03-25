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
      className="text-md border-lightGray flex min-w-12 items-center justify-center rounded-md border py-1 capitalize transition-discrete duration-300 hover:brightness-125"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered || isMobile ? (locale === 'en' ? 'Ua' : 'En') : locale}
    </Link>
  );
};
