import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

import { links } from '@/constants';
import { SectionTitle } from './SectionTitle';
import { PdfModal } from './PdfModal';

const coreSkills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Nest JS'];

export const AboutMe = async () => {
  const t = await getTranslations('AboutMe');

  return (
    <section id="about-me" className="bg-grey scroll-mt-16">
      <div className="px-4 max-w-300 mx-auto pb-10">
        <SectionTitle title={t('title')} />
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center lg:items-stretch lg:justify-between">
          <Image
            src="/photo.avif"
            alt="Dmytro Kotykhin - FullStack Developer"
            width={500}
            height={665}
            sizes="(max-width: 768px) 100vw, 500px"
            className="rounded-md shadow-antiqueWhite shadow-md object-cover w-full max-w-125"
          />
          <div className="w-full max-w-125 flex flex-col justify-center gap-5 lg:px-12">
            <p className="text-4xl text-antiqueWhite font-bold">{t('name')}</p>
            <p className="text-3xl text-orange font-bold">{t('position')}</p>
            <div className="flex items-center gap-2 mt-2">
              <FiMapPin aria-hidden="true" color="#faebd7" className="text-[24px]" />
              <span className="text-lg">{t('location')}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, index) => (
                <div key={skill} className="flex items-center gap-2">
                  {index !== 0 && <span className="w-1 h-1 rounded-full bg-lightGray" />}
                  <span className="font-semibold">{skill}</span>
                </div>
              ))}
            </div>
            <p className="md:text-lg lg:mt-6">{t('description')}</p>
            <div className="flex items-center gap-8 grow">
              <Link
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
              >
                <CiLinkedin
                  aria-hidden="true"
                  color="#faebd7"
                  className="cursor-pointer group-hover:scale-110 transition-transform duration-300 text-4xl"
                />
                <span className="text-lg group-hover:text-antiqueWhite transition-colors duration-300">LinkedIn</span>
              </Link>
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
              >
                <FaGithub
                  aria-hidden="true"
                  color="#faebd7"
                  className="cursor-pointer group-hover:scale-110 transition-transform duration-300 text-3xl"
                />
                <span className="text-lg group-hover:text-antiqueWhite transition-colors duration-300">GitHub</span>
              </Link>
            </div>
            <div className="flex flex-col gap-6 mt-10">
              <PdfModal
                label={t('viewCV')}
                src="/cv/Dmytro_Kotykhin_CV.pdf"
                triggerClassName="w-full px-4 py-2 border border-antiqueWhite text-antiqueWhite text-xl font-bold rounded-md hover:bg-antiqueWhite hover:text-background transition-colors duration-300 text-center"
              />
              <a
                href="/cv/Dmytro_Kotykhin_CV.pdf"
                download
                className="w-full px-4 py-2 border border-orange text-orange text-xl font-bold rounded-md hover:bg-orange hover:text-background transition-colors duration-300 text-center"
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
