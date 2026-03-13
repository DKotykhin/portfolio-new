import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { SectionTitle } from './SectionTitle';

export const AboutMe = async () => {
  const t = await getTranslations('AboutMe');

  return (
    <section id="about-me" className="min-h-screen bg-background scroll-mt-16 px-4 max-w-300 mx-auto mb-10">
      <SectionTitle title={t('title')} />
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center lg:justify-between">
        <Image
          src="/photo.webp"
          alt="Profile Picture"
          width={500}
          height={665}
          className="rounded-md shadow-antiqueWhite shadow-md object-cover w-full max-w-125"
        />
        <div className="w-full max-w-125 flex flex-col justify-center gap-6 lg:px-12">
          <p className="text-4xl text-antiqueWhite font-bold">{t('name')}</p>
          <p className="text-3xl text-orange font-bold">{t('position')}</p>
          <h2 className="text-lg lg:mt-6">{t('description')}</h2>
          <div className="flex flex-col gap-6 mt-10">
            <a
              href="/cv/Dmytro_Kotykhin_CV.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="w-full px-4 py-2 border border-antiqueWhite text-antiqueWhite text-xl font-bold rounded-md hover:bg-antiqueWhite hover:text-background transition-colors duration-300 text-center"
            >
              {t('viewCV')}
            </a>
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
    </section>
  );
};
