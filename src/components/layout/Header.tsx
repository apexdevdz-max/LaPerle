import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { business } from '../../data/config';
import { useOpenStatus } from '../../hooks/useOpenStatus';
import { Badge } from '../ui/Badge';

const navLinks = [
  { label: 'Spécialités', href: '#specialites' },
  { label: 'La carte', href: '#carte' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Notre histoire', href: '#histoire' },
  { label: 'Avis', href: '#avis' },
  { label: 'Infos', href: '#infos' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen } = useOpenStatus();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on nav click
  function handleNavClick() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-sm border-b border-border/50'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Name */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="Retour en haut"
          >
            {/* Bakery logo */}
            <img
              src="/images/logo.jpg"
              alt="Logo La Perle de Béthusy"
              className="w-10 h-10 rounded-full object-cover shrink-0 border border-border/30"
            />
            <div className="flex flex-col">
              <span className={[
                'font-heading text-lg font-bold leading-tight transition-colors duration-300',
                isScrolled ? 'text-primary' : 'text-white',
              ].join(' ')}>
                {business.name}
              </span>
              <span className={[
                'text-[10px] tracking-widest uppercase transition-colors duration-300',
                isScrolled ? 'text-muted-fg' : 'text-white/70',
              ].join(' ')}>
                Boulangerie artisanale
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer',
                  isScrolled
                    ? 'text-secondary hover:text-primary hover:bg-muted/60'
                    : 'text-white/80 hover:text-white hover:bg-white/10',
                ].join(' ')}
              >
                {link.label}
              </a>
            ))}
            <Badge variant={isOpen ? 'success' : 'destructive'} className="ml-3">
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full ${
                  isOpen ? 'bg-success animate-pulse' : 'bg-destructive'
                }`}
                aria-hidden="true"
              />
              {isOpen ? 'Ouvert' : 'Fermé'}
            </Badge>
          </nav>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <Badge variant={isOpen ? 'success' : 'destructive'}>
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full ${
                  isOpen ? 'bg-success animate-pulse' : 'bg-destructive'
                }`}
                aria-hidden="true"
              />
              {isOpen ? 'Ouvert' : 'Fermé'}
            </Badge>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={[
                'p-2 rounded-lg cursor-pointer transition-colors duration-200',
                isScrolled
                  ? 'text-primary hover:bg-muted/60'
                  : 'text-white hover:bg-white/10',
              ].join(' ')}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        id="mobile-menu"
        className={[
          'md:hidden overflow-hidden transition-all duration-300 ease-out',
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        role="navigation"
        aria-label="Menu mobile"
      >
        <nav className="bg-surface/95 backdrop-blur-md border-t border-border/50 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block px-4 py-3 rounded-lg text-secondary font-medium hover:bg-muted/60 hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
