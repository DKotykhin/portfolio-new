import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('NotFound');
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-4"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E")`,
        backgroundSize: '20px 20px',
      }}
    >
      <h1 className="text-antiqueWhite text-center text-3xl font-bold">{t('title')}</h1>
      <p className="text-center">{t('description')}</p>
      <Link href="/" className="hover:text-antiqueWhite text-orange text-lg font-bold transition-colors duration-300">
        {t('backHome')}
      </Link>
    </main>
  );
}
