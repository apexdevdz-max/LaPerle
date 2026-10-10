import { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { menuCategories, menuItems } from '../../data/menu';
import type { MenuCategory } from '../../data/types';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('bureks');
  const staggerRef = useScrollReveal<HTMLDivElement>();

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section
      id="carte"
      className="py-16 md:py-24 bg-surface-warm/30"
      aria-labelledby="carte-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="La carte"
          subtitle="Tous nos produits sont préparés le jour même dans notre fournil."
          id="carte-heading"
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Catégories du menu">
          {menuCategories.map((cat) => (
            <button
              key={cat.slug}
              role="tab"
              aria-selected={activeCategory === cat.slug}
              aria-controls={`panel-${cat.slug}`}
              onClick={() => setActiveCategory(cat.slug)}
              className={[
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
                activeCategory === cat.slug
                  ? 'bg-accent text-on-accent shadow-md'
                  : 'bg-surface text-secondary hover:bg-muted/60 border border-border',
              ].join(' ')}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div
          ref={staggerRef}
          id={`panel-${activeCategory}`}
          role="tabpanel"
          aria-label={menuCategories.find((c) => c.slug === activeCategory)?.label}
          className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-surface rounded-xl border border-border/50 p-5 hover:shadow-md hover:border-accent/30 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-heading text-lg font-semibold text-primary leading-snug">
                  {item.name}
                </h3>
                <span className="shrink-0 text-accent font-bold text-lg whitespace-nowrap">
                  {item.price !== null
                    ? `${item.price.toFixed(2)} CHF`
                    : '–.– CHF'}
                </span>
              </div>

              <p className="text-sm text-muted-fg leading-relaxed mb-3">
                {item.description}
              </p>

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={
                        tag === 'végétarien' || tag === 'végan'
                          ? 'success'
                          : 'muted'
                      }
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
