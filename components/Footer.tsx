import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { CiLinkedin } from 'react-icons/ci';
import { FaTelegramPlane, FaGithub } from 'react-icons/fa';

import { links } from '@/constants';

export const Footer = async () => {
  const t = await getTranslations('Footer');

  return (
    <footer className="bg-background flex w-full flex-col items-center justify-center gap-4 px-4 py-6 md:py-8">
      <nav aria-label="Social links" className="flex w-full items-center justify-center gap-12">
        <Link href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
          <CiLinkedin
            aria-hidden="true"
            color="#faebd7"
            className="cursor-pointer text-[36px] transition-transform duration-300 hover:scale-110 md:text-[48px]"
          />
        </Link>
        <Link href={links.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegramPlane
            aria-hidden="true"
            color="#faebd7"
            className="cursor-pointer text-[32px] transition-transform duration-300 hover:scale-110 md:text-[44px]"
          />
        </Link>
        <Link href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
          <FaGithub
            aria-hidden="true"
            color="#faebd7"
            className="cursor-pointer text-[32px] transition-transform duration-300 hover:scale-110 md:text-[44px]"
          />
        </Link>
      </nav>
      <p className="text-antiqueWhite text-center">
        &copy; {new Date().getFullYear()} {t('text')}
      </p>
    </footer>
  );
};
