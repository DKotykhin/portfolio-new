import { ToastContainer } from 'react-toastify';

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
      <main id="page-content">
        <Home />
        <AboutMe />
        <Skills />
        <Experience />
        <Background />
        <Contacts />
        <Footer />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        theme="colored"
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
