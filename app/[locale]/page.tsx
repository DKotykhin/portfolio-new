import { NavBar } from '@/components/NavBar';
import { Home } from '@/components/Home';
import { AboutMe } from '@/components/AboutMe';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Background } from '@/components/Background';
import { Contacts } from '@/components/Contacts';
import { Footer } from '@/components/Footer';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div>
      <NavBar locale={locale} />
      <Home />
      <AboutMe />
      <Skills />
      <Experience />
      <Background />
      <Contacts />
      <Footer />
    </div>
  );
}
