import { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  badge: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'store-bureks',
    src: '/images/store-3.webp',
    alt: 'Vitrine des bureks traditionnels dorés, tulumba et pains artisanaux à La Perle de Béthusy',
    title: 'Sortie du fournil : les Bureks dorés',
    description: 'Plateaux de bureks croustillants à la viande, au fromage et aux épinards, tulumba et pains frais du jour.',
    badge: 'Spécialités chaudes',
  },
  {
    id: 'store-patisseries',
    src: '/images/store-2.webp',
    alt: 'Grande vitrine de pâtisseries artisanales, baklavas et gâteaux à La Perle de Béthusy',
    title: 'La vitrine des douceurs & Baklavas',
    description: 'Baklavas traditionnels aux noix et au miel, gâteaux fondants, viennoiseries et desserts préparés avec soin.',
    badge: 'Pâtisserie fine',
  },
  {
    id: 'store-comptoir',
    src: '/images/store-1.webp',
    alt: 'Comptoir d’accueil et espace sandwichs frais à La Perle de Béthusy Lausanne',
    title: 'L’accueil & le comptoir fraîcheur',
    description: 'Sandwichs préparés minute, snacking salé, boissons fraîches et café dans une ambiance conviviale.',
    badge: 'Comptoir & Salés',
  },
];

export function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const staggerRef = useScrollReveal<HTMLDivElement>();

  // Close lightbox on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null
        );
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  return (
    <section
      id="galerie"
      className="py-16 md:py-24 bg-surface-warm/40 border-y border-border/40"
      aria-labelledby="galerie-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Le fournil en images"
          subtitle="Découvrez notre boutique, nos vitrines gourmandes et l’authenticité de nos créations artisanales."
          id="galerie-heading"
        />

        <div
          ref={staggerRef}
          className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {galleryItems.map((item, index) => (
            <figure
              key={item.id}
              onClick={() => setActiveImageIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-surface border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-accent text-on-accent shadow-md">
                    {item.badge}
                  </span>
                </div>

                {/* Enlarge Icon Button */}
                <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-2 rounded-full bg-black/60 text-white backdrop-blur-sm flex items-center justify-center hover:bg-black/80 shadow-md">
                    <Maximize2 size={16} aria-hidden="true" />
                    <span className="sr-only">Agrandir la photo</span>
                  </span>
                </div>

                {/* Overlay Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-200 transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Caption */}
              <figcaption className="p-4 flex-1 flex flex-col justify-between bg-surface">
                <p className="text-sm text-secondary leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-accent font-medium">
                  <span>Cliquer pour agrandir</span>
                  <Maximize2 size={12} aria-hidden="true" />
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse photo plein écran"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 cursor-pointer"
            aria-label="Fermer la vue plein écran"
          >
            <X size={24} />
          </button>

          {/* Navigation Previous */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) =>
                prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 cursor-pointer"
            aria-label="Photo précédente"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Navigation Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) =>
                prev !== null ? (prev + 1) % galleryItems.length : null
              );
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 cursor-pointer"
            aria-label="Photo suivante"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[activeImageIndex].src}
              alt={galleryItems[activeImageIndex].alt}
              className="max-w-full max-h-[70vh] rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <span className="inline-block text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                {galleryItems[activeImageIndex].badge} • {activeImageIndex + 1} / {galleryItems.length}
              </span>
              <h3 className="font-heading text-xl font-bold mb-1">
                {galleryItems[activeImageIndex].title}
              </h3>
              <p className="text-sm text-white/80">
                {galleryItems[activeImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
