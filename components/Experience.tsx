import { getTranslations } from 'next-intl/server';
import { SectionTitle } from './SectionTitle';

export const Experience = async () => {
  const t = await getTranslations('Experience');

  return (
    <section id="experience" className="min-h-screen bg-grey scroll-mt-16">
      <div className="px-4 max-w-300 mx-auto pb-10">
        <SectionTitle title={t('title')} />
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full"></div>
          <div className="w-full"></div>
        </div>
      </div>
    </section>
  );
};
