import { getTranslations } from 'next-intl/server';
import { SectionTitle } from './SectionTitle';

export const Experience = async () => {
  const t = await getTranslations('Experience');

  return (
    <section id="experience" className="min-h-screen bg-grey scroll-mt-16">
      <SectionTitle title={t('title')} />
    </section>
  );
};
