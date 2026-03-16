import { JSX } from 'react';
import { getTranslations } from 'next-intl/server';
import { LiaHandPointRight } from 'react-icons/lia';

import { certificates } from '@/constants';
import { SectionTitle } from './SectionTitle';

const BulletItem = ({ text }: { text: string | JSX.Element }) => (
  <div className="flex gap-3">
    <LiaHandPointRight size={20} className="shrink-0 mt-1" />
    <p className="text-lg mb-1">{text}</p>
  </div>
);

export const Background = async () => {
  const t = await getTranslations('Background');

  const languages = ['language1', 'language2', 'language3', 'language4'] as const;
  const hobbies = ['hobby1', 'hobby2', 'hobby3'] as const;

  return (
    <section id="background" className="bg-background scroll-mt-16">
      <div className="px-4 max-w-300 mx-auto pb-10">
        <SectionTitle title={t('title')} />
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full">
            <p className="text-2xl text-orange mb-6">{t('certificates.title')}</p>
            {certificates.map(({ text, url }) => (
              <BulletItem
                key={text}
                text={
                  <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {t(`certificates.${text}`)}
                  </a>
                }
              />
            ))}
            <p className="text-2xl text-orange mt-10 mb-6">{t('education.title')}</p>
            <p className="text-lg text-antiqueWhite mb-1">{t('education.name')}</p>
            <BulletItem text={t('education.degree')} />
          </div>
          <div className="w-full">
            <p className="text-2xl text-orange mb-6">{t('languages.title')}</p>
            {languages.map(key => (
              <BulletItem key={key} text={t(`languages.${key}`)} />
            ))}

            <p className="text-2xl text-orange mt-10 mb-6">{t('hobbies.title')}</p>
            {hobbies.map(key => (
              <BulletItem key={key} text={t(`hobbies.${key}`)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
