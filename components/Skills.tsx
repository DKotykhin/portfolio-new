import { getTranslations } from 'next-intl/server';
import { SectionTitle } from './SectionTitle';

export const Skills = async () => {
  const t = await getTranslations('Skills');

  return (
    <section id="skills" className="min-h-screen bg-grey scroll-mt-16">
      <SectionTitle title={t('title')} />
    </section>
  );
};
