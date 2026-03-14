import { getTranslations } from 'next-intl/server';
import { SectionTitle } from './SectionTitle';

export const Background = async () => {
  const t = await getTranslations('Background');

  return (
    <section id="background" className="min-h-screen bg-background scroll-mt-16">
      <SectionTitle title={t('title')} />
    </section>
  );
};
