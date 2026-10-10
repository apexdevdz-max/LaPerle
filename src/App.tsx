import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { Hero } from './components/sections/Hero';
import { Specialties } from './components/sections/Specialties';
import { MenuSection } from './components/sections/Menu';
import { Gallery } from './components/sections/Gallery';
import { Story } from './components/sections/Story';
import { Reviews } from './components/sections/Reviews';
import { Info } from './components/sections/Info';
import { generateBakeryJsonLd } from './lib/seo';

function App() {
  // Inject JSON-LD structured data
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = generateBakeryJsonLd();
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <a
        href="#carte"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-on-accent focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <MenuSection />
        <Gallery />
        <Story />
        <Reviews />
        <Info />
      </main>
      <Footer />
      <MobileActionBar />
      {/* Bottom padding for mobile action bar */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}

export default App;
