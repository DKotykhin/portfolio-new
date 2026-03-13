import { NavBar } from '@/components/NavBar';
import { Home } from '@/components/Home';
import { Footer } from '@/components/Footer';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div>
      <NavBar locale={locale} />
      <Home />
      <Footer />
    </div>
  );
}
