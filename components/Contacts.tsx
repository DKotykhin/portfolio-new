import { getTranslations } from 'next-intl/server';
import { SectionTitle } from './SectionTitle';

export const Contacts = async () => {
  const t = await getTranslations('Contacts');

  return (
    <section id="contacts" className="min-h-screen bg-grey scroll-mt-16">
      <SectionTitle title={t('title')} />
    </section>
  );
};
