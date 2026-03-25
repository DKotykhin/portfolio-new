import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

import { links, coreSkills } from '@/constants';
import { SectionTitle } from './SectionTitle';
import { PdfModal } from './PdfModal';

export const AboutMe = async () => {
  const t = await getTranslations('AboutMe');

  return (
    <section id="about-me" className="bg-grey scroll-mt-16">
      <div className="mx-auto max-w-308 px-4 pb-10 md:px-8">
        <SectionTitle title={t('title')} />
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
          <Image
            src="/photo.avif"
            alt="Dmytro Kotykhin - FullStack Developer"
            width={500}
            height={665}
            sizes="(max-width: 768px) 100vw, 500px"
            className="shadow-antiqueWhite w-full max-w-125 rounded-md object-cover shadow-md"
          />
          <div className="flex w-full max-w-125 flex-col justify-center gap-5 lg:px-5">
            <p className="text-antiqueWhite text-4xl font-bold">{t('name')}</p>
            <p className="text-orange text-3xl font-bold">{t('position')}</p>
            <div className="mt-2 flex items-center gap-2">
              <FiMapPin aria-hidden="true" color="#faebd7" className="text-[24px]" />
              <span className="text-lg">{t('location')}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, index) => (
                <div key={skill} className="flex items-center gap-2">
                  {index !== 0 && <span className="bg-lightGray h-1 w-1 rounded-full" />}
                  <span className="font-semibold">{skill}</span>
                </div>
              ))}
            </div>
            <p className="md:text-lg lg:mt-6">{t('description')}</p>
            <nav aria-label="Social links" className="flex grow items-center gap-8">
              <Link
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2"
              >
                <CiLinkedin
                  aria-hidden="true"
                  color="#faebd7"
                  className="cursor-pointer text-4xl transition-transform duration-300 group-hover:scale-110"
                />
                <span className="group-hover:text-antiqueWhite text-lg transition-colors duration-300">LinkedIn</span>
              </Link>
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2"
              >
                <FaGithub
                  aria-hidden="true"
                  color="#faebd7"
                  className="cursor-pointer text-3xl transition-transform duration-300 group-hover:scale-110"
                />
                <span className="group-hover:text-antiqueWhite text-lg transition-colors duration-300">GitHub</span>
              </Link>
            </nav>
            <div className="mt-8 flex flex-col gap-6">
              <PdfModal
                label={t('viewCV')}
                src="/cv/Dmytro_Kotykhin_CV.pdf"
                triggerClassName="w-full px-4 py-2 border border-antiqueWhite text-antiqueWhite text-xl font-bold rounded-md hover:bg-antiqueWhite hover:text-background transition-colors duration-300 text-center"
              />
              <a
                href="/cv/Dmytro_Kotykhin_CV.pdf"
                download
                className="border-orange text-orange hover:bg-orange hover:text-background w-full rounded-md border px-4 py-2 text-center text-xl font-bold transition-colors duration-300"
              >
                {t('downloadCV')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
