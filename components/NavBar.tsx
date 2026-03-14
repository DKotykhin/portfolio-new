'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useActiveSection } from '@/hooks/use-active-section';
import { LanguageButton } from './LanguageButton';

export const NavBar = ({ locale }: { locale: string }) => {
  const t = useTranslations('Navigation');

  const navLinks = [
    { name: t('home'), href: '#home', id: 'home' },
    { name: t('about'), href: '#about-me', id: 'about-me' },
    { name: t('skills'), href: '#skills', id: 'skills' },
    { name: t('experience'), href: '#experience', id: 'experience' },
    { name: t('background'), href: '#background', id: 'background' },
    { name: t('contacts'), href: '#contacts', id: 'contacts' },
  ];

  const activeSection = useActiveSection(navLinks.map(link => link.id));

  return (
    <div className="fixed top-0 w-full z-50 bg-background">
      <div className="px-4 max-w-360 mx-auto flex items-center justify-between gap-4 h-16">
        <a href="#home">
          <Image
            src="/logo-192x192.svg"
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer hover:scale-125 transition-transform duration-300"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`hover:text-orange transition-colors duration-300 ${
                activeSection === link.id ? 'text-orange' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <LanguageButton locale={locale} />
        </nav>
        <div className="md:hidden">
          <GiHamburgerMenu size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};
