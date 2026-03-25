import { JSX } from 'react';
import { getTranslations } from 'next-intl/server';
import { LiaHandPointRight } from 'react-icons/lia';

import { certificates } from '@/constants';
import { SectionTitle } from './SectionTitle';

const BulletItem = ({ text }: { text: string | JSX.Element }) => (
  <div className="flex gap-3">
    <LiaHandPointRight size={20} className="mt-1 shrink-0" />
    <p className="mb-1 md:text-lg">{text}</p>
  </div>
);

export const Background = async () => {
  const t = await getTranslations('Background');

  const languages = ['language1', 'language2', 'language3', 'language4'] as const;
  const hobbies = ['hobby1', 'hobby2', 'hobby3'] as const;

  return (
    <section id="background" className="bg-background scroll-mt-16">
      <div className="mx-auto max-w-308 px-4 pb-10 md:px-8">
        <SectionTitle title={t('title')} />
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="w-full">
            <p className="text-orange mb-6 text-2xl">{t('certificates.title')}</p>
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
            <p className="text-orange mt-10 mb-6 text-2xl">{t('education.title')}</p>
            <p className="text-antiqueWhite mb-1 text-lg">{t('education.name')}</p>
            <BulletItem text={t('education.degree')} />
          </div>
          <div className="w-full">
            <p className="text-orange mb-6 text-2xl">{t('languages.title')}</p>
            {languages.map(key => (
              <BulletItem key={key} text={t(`languages.${key}`)} />
            ))}

            <p className="text-orange mt-10 mb-6 text-2xl">{t('hobbies.title')}</p>
            {hobbies.map(key => (
              <BulletItem key={key} text={t(`hobbies.${key}`)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
