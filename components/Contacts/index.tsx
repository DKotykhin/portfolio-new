import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaTelegramPlane } from 'react-icons/fa';

import { links } from '@/constants';
import { SectionTitle } from '../SectionTitle';
import { ContactForm } from './ContactForm';

export const Contacts = async () => {
  const t = await getTranslations('Contacts');

  return (
    <section id="contacts" className="bg-grey scroll-mt-16">
      <div className="mx-auto max-w-308 px-4 pb-10 md:px-8">
        <SectionTitle title={t('title')} />
        <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="bg-background before:border-orange after:border-orange relative w-full max-w-125 before:absolute before:top-0 before:right-0 before:h-16 before:w-10 before:border-t-2 before:border-r-2 before:content-[''] after:absolute after:bottom-0 after:left-0 after:h-16 after:w-10 after:border-b-2 after:border-l-2 after:content-['']">
            <div className="px-4 py-6">
              <p className="text-antiqueWhite text-center text-2xl font-bold">{t('form.title')}</p>
              <ContactForm />
            </div>
          </div>
          <nav aria-label="Contact links" className="w-full max-w-125 space-y-6">
            <Link href={`mailto:${links.email}`} className="group flex w-fit items-center gap-3">
              <MdOutlineEmail
                aria-hidden="true"
                color="#faebd7"
                className="cursor-pointer text-[32px] transition-transform duration-300 group-hover:scale-110"
              />
              <span className="group-hover:text-antiqueWhite text-lg transition-colors duration-300">
                {links.email}
              </span>
            </Link>
            <Link
              href={links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-3"
            >
              <FaTelegramPlane
                aria-hidden="true"
                color="#faebd7"
                className="cursor-pointer text-[32px] transition-transform duration-300 group-hover:scale-110"
              />
              <span className="group-hover:text-antiqueWhite text-lg transition-colors duration-300">Telegram</span>
            </Link>
            <Link
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-3"
            >
              <CiLinkedin
                aria-hidden="true"
                color="#faebd7"
                className="cursor-pointer text-4xl transition-transform duration-300 group-hover:scale-110"
              />
              <span className="group-hover:text-antiqueWhite text-lg transition-colors duration-300">LinkedIn</span>
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
};
