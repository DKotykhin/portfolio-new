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
      <div className="px-4 md:px-8 max-w-300 mx-auto pb-10">
        <SectionTitle title={t('title')} />
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
          <div
            className="relative bg-background max-w-125 w-full
            before:content-[''] before:absolute before:top-0 before:right-0
            before:w-10 before:h-16 before:border-t-2 before:border-r-2 before:border-orange
            after:content-[''] after:absolute after:bottom-0 after:left-0
            after:w-10 after:h-16 after:border-b-2 after:border-l-2 after:border-orange"
          >
            <div className="px-4 py-6">
              <p className="text-2xl text-antiqueWhite text-center font-bold">{t('form.title')}</p>
              <ContactForm />
            </div>
          </div>
          <div className="max-w-125 w-full space-y-6">
            <Link href={`mailto:${links.email}`} className="w-fit flex items-center gap-3 group">
              <MdOutlineEmail
                aria-hidden="true"
                color="#faebd7"
                className="cursor-pointer group-hover:scale-110 transition-transform duration-300 text-[32px]"
              />
              <span className="text-lg group-hover:text-antiqueWhite transition-colors duration-300">
                {links.email}
              </span>
            </Link>
            <Link
              href={links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center gap-3 group"
            >
              <FaTelegramPlane
                aria-hidden="true"
                color="#faebd7"
                className="cursor-pointer group-hover:scale-110 transition-transform duration-300 text-[32px]"
              />
              <span className="text-lg group-hover:text-antiqueWhite transition-colors duration-300">Telegram</span>
            </Link>
            <Link
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center gap-3 group"
            >
              <CiLinkedin
                aria-hidden="true"
                color="#faebd7"
                className="cursor-pointer group-hover:scale-110 transition-transform duration-300 text-4xl"
              />
              <span className="text-lg group-hover:text-antiqueWhite transition-colors duration-300">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
