import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/**
 * "Notre histoire" — placeholder copy for owner to review and personalize.
 */
export function Story() {
  const imageRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="histoire"
      className="py-16 md:py-24 bg-background"
      aria-labelledby="histoire-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Notre histoire"
          subtitle="Une tradition familiale, un savoir-faire authentique."
          id="histoire-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image placeholder */}
          <div
            ref={imageRef}
            className="reveal aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <img
              src="/images/store-3.webp"
              alt="Vitrine de La Perle de Béthusy avec bureks, baklava, tulumba et pâtisseries"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text content */}
          <div ref={textRef} className="reveal">
            {/* ⚠️ OWNER: Rewrite this text with your own words and story */}
            <div className="space-y-5 text-secondary leading-relaxed">
              <p>
                <strong className="text-primary">La Perle de Béthusy</strong> est
                née d'une passion simple : partager les saveurs authentiques des
                Balkans avec les Lausannois. Installée au cœur du quartier de
                Béthusy, notre boulangerie perpétue un savoir-faire transmis de
                génération en génération.
              </p>
              <p>
                Chaque matin, dès l'aube, nous préparons nos bureks à la main.
                La pâte phyllo est étirée, garnie et roulée selon la tradition,
                puis dorée au four jusqu'à obtenir ce croustillant incomparable
                qui fait la réputation de nos produits.
              </p>
              <p>
                Nos pâtisseries — baklava aux noix, trilece fondant, tulumba
                croustillant — sont confectionnées avec des ingrédients de
                qualité, sans compromis. C'est le goût de l'authentique, à deux
                pas de chez vous.
              </p>
              <p className="text-accent font-medium italic">
                « Chez nous, chaque bouchée raconte une histoire. »
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
