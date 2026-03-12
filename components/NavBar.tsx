import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { LanguageButton } from './LanguageButton';

export const NavBar = async ({ locale }: { locale: string }) => {
  const t = await getTranslations('Navigation');

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('skills'), href: '#skills' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <div className="px-4 max-w-360 mx-auto flex items-center justify-between gap-4 h-16">
      <Image
        src="/logo-192x192.svg"
        alt="Logo"
        width={40}
        height={40}
        className="cursor-pointer hover:scale-125 transition-transform duration-300"
      />
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          <a key={link.name} href={link.href} className="text-white hover:text-orange transition-colors duration-300">
            {link.name}
          </a>
        ))}
        <LanguageButton locale={locale} />
      </div>
    </div>
  );
};
