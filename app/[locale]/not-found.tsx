import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('NotFound');
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-6 px-4"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E")`,
        backgroundSize: '20px 20px',
      }}
    >
      <p className="text-3xl text-antiqueWhite font-bold text-center">{t('title')}</p>
      <p className="text-center">{t('description')}</p>
      <Link href="/" className="hover:text-antiqueWhite transition-colors duration-300 text-orange font-bold text-lg">
        {t('backHome')}
      </Link>
    </div>
  );
}
