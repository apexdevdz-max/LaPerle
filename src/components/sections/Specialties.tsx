import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface Specialty {
  name: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
}

const specialties: Specialty[] = [
  {
    name: 'Burek traditionnel à la viande',
    description: 'Pâte phyllo croustillante étirée à la main, viande assaisonnée aux oignons et épices douces, cuite au four à la perfection.',
    image: '/images/store-3.webp',
    alt: 'Burek traditionnel à la viande cuit au four — La Perle de Béthusy',
    badge: 'Spécialité maison',
  },
  {
    name: 'Burek au fromage fondant',
    description: 'Spirale dorée au fromage blanc fondant. Un classique incontournable des Balkans au croustillant incomparable.',
    image: '/images/store-3.webp',
    alt: 'Burek au fromage blanc doré et croustillant — La Perle de Béthusy',
    badge: 'Végétarien',
  },
  {
    name: 'Burek aux épinards frais',
    description: 'Épinards frais et fromage enveloppés dans une pâte feuilletée légère et aérée, dorée à point chaque matin.',
    image: '/images/store-3.webp',
    alt: 'Burek aux épinards frais et fromage — La Perle de Béthusy',
    badge: 'Recette artisanale',
  },
  {
    name: 'Baklavas artisanaux au miel',
    description: 'Fines feuilles de pâte phyllo au beurre clarifié, cœur généreux de noix concassées et délicat sirop de miel parfumé.',
    image: '/images/store-2.webp',
    alt: 'Plateau de baklavas faits maison aux noix et miel — La Perle de Béthusy',
    badge: 'Fait maison',
  },
  {
    name: 'Pâtisseries & Gâteaux fins',
    description: 'Éclairs gourmands, tartelettes fraîches, gâteaux et douceurs préparés chaque jour dans notre laboratoire.',
    image: '/images/store-2.webp',
    alt: 'Vitrine de pâtisseries fraîches et gâteaux artisanaux — La Perle de Béthusy',
    badge: 'Fraîcheur du jour',
  },
  {
    name: 'Sandwichs & Traiteur frais',
    description: 'Sandwichs préparés à la minute dans notre pain croustillant du jour, garnis de produits frais et savoureux.',
    image: '/images/store-1.webp',
    alt: 'Comptoir de sandwichs frais et snacking — La Perle de Béthusy',
    badge: 'Préparé minute',
  },
];

export function Specialties() {
  const staggerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="specialites"
      className="py-16 md:py-24 bg-background"
      aria-labelledby="specialites-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nos spécialités"
          subtitle="Préparées chaque matin avec des recettes traditionnelles des Balkans et des ingrédients frais de première qualité."
          id="specialites-heading"
        />

        <div
          ref={staggerRef}
          className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {specialties.map((item) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-2xl bg-surface border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-accent text-on-accent shadow-md backdrop-blur-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Title on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors duration-200">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-surface">
                <p className="text-sm text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
