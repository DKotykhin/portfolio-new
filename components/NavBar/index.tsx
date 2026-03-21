'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useActiveSection } from '@/hooks/use-active-section';
import { LanguageButton } from './LanguageButton';
import MobileNavBar from './MobileNavBar';

export const NavBar = ({ locale }: { locale: string }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const t = useTranslations('Navigation');

  useEffect(() => {
    const content = document.getElementById('page-content');
    if (content) {
      content.style.filter = openMobileMenu ? 'blur(2px)' : '';
      content.style.transition = 'filter 0.3s';
    }
    document.body.style.overflow = openMobileMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [openMobileMenu]);

  const navLinks = useMemo(
    () => [
      { name: t('home'), href: '#home', id: 'home' },
      { name: t('about'), href: '#about-me', id: 'about-me' },
      { name: t('skills'), href: '#skills', id: 'skills' },
      { name: t('experience'), href: '#experience', id: 'experience' },
      { name: t('background'), href: '#background', id: 'background' },
      { name: t('contacts'), href: '#contacts', id: 'contacts' },
    ],
    [t]
  );

  const sectionIds = useMemo(() => navLinks.map(link => link.id), [navLinks]);
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="fixed top-0 w-full z-50 bg-background">
      <div className="px-4 md:px-8 max-w-360 mx-auto flex items-center justify-between gap-4 h-16">
        <Link href="#home">
          <Image
            src="/logo-192x192.svg"
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer hover:scale-125 transition-transform duration-300"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={activeSection === link.id ? 'true' : undefined}
              className={`hover:text-orange transition-colors duration-300 ${
                activeSection === link.id ? 'text-orange' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <LanguageButton locale={locale} />
        </nav>
        <button className="md:hidden" aria-label="Open menu" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
          <GiHamburgerMenu size={24} className="text-white" />
        </button>
      </div>
      <MobileNavBar
        isOpen={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        navLinks={navLinks}
        locale={locale}
      />
    </div>
  );
};
