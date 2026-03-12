import { NavBar } from '@/components/NavBar';
import { getTranslations } from 'next-intl/server';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('HomePage');

  return (
    <div>
      <NavBar locale={locale} />
      <h1 className="flex justify-center p-4">{t('title')}</h1>
    </div>
  );
}
