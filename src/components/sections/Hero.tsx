import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { useOpenStatus } from '../../hooks/useOpenStatus';

export function Hero() {
  const { todayHours } = useOpenStatus();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="Accueil"
    >
      {/* Background — real bakery photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/store-1.webp"
          alt="Intérieur de la boulangerie La Perle de Béthusy avec comptoir garni de sandwichs, baklava et pâtisseries"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        {/* Today's hours */}
        {todayHours && (
          <p className="text-amber-300/90 text-sm font-medium mb-4 tracking-wide">
            Aujourd'hui : {todayHours.open} – {todayHours.close}
          </p>
        )}

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          La Perle de Béthusy
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light mb-2 text-balance">
          Saveurs des Balkans au cœur de Lausanne
        </p>

        <p className="text-base text-white/60 mb-8 max-w-xl mx-auto text-balance">
          Burek croustillant, baklava fondant et pâtisseries faites maison —
          le goût de l'authenticité depuis notre fournil de Béthusy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            variant="accent"
            size="lg"
            href="#carte"
          >
            Voir la carte
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="#infos"
            className="border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60"
          >
            Nous trouver
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#specialites"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors duration-300 animate-bounce cursor-pointer"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={28} aria-hidden="true" />
      </a>
    </section>
  );
}
