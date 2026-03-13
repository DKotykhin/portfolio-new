import { getTranslations } from 'next-intl/server';

export const Home = async () => {
  const t = await getTranslations('HomePage');

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
      style={{ backgroundImage: "url('/bg-2.png')" }}
    >
      <h1 className="flex justify-center p-4">{t('title')}</h1>
    </section>
  );
};
