import { MapPin, Phone, Navigation, Clock } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { business, openingHours } from '../../data/config';

export function Info() {
  const tableRef = useScrollReveal<HTMLDivElement>();
  const mapRef = useScrollReveal<HTMLDivElement>();

  // Get current ISO day (1=Mon, 7=Sun)
  const now = new Date();
  const dayFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Zurich',
    weekday: 'long',
  });
  const dayStr = dayFormatter.format(now);
  const dayMap: Record<string, number> = {
    Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4,
    Friday: 5, Saturday: 6, Sunday: 7,
  };
  const todayIso = dayMap[dayStr] ?? 1;

  return (
    <section
      id="infos"
      className="py-16 md:py-24 bg-background"
      aria-labelledby="infos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Infos pratiques"
          subtitle="Venez nous rendre visite ou passez un coup de fil."
          id="infos-heading"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Hours + Contact */}
          <div ref={tableRef} className="reveal space-y-8">
            {/* Opening hours table */}
            <div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Clock size={20} className="text-accent" aria-hidden="true" />
                Horaires d'ouverture
              </h3>
              <div className="bg-surface rounded-xl border border-border/50 overflow-hidden">
                <table className="w-full text-sm" aria-label="Horaires d'ouverture">
                  <thead className="sr-only">
                    <tr>
                      <th>Jour</th>
                      <th>Heures</th>
                    </tr>
                  </thead>
                  <tbody>
                    {openingHours.map((h) => {
                      const isToday = h.isoDay === todayIso;
                      return (
                        <tr
                          key={h.isoDay}
                          className={[
                            'border-b border-border/30 last:border-b-0',
                            isToday
                              ? 'bg-accent/10 font-semibold'
                              : 'hover:bg-muted/30',
                          ].join(' ')}
                        >
                          <td className="px-5 py-3 text-primary">
                            {h.day}
                            {isToday && (
                              <span className="ml-2 text-xs text-accent font-medium">
                                (aujourd'hui)
                              </span>
                            )}
                          </td>
                          <td className="px-5 py-3 text-right text-secondary">
                            {h.open} – {h.close}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Address + CTA buttons */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-medium text-primary">
                    {business.address.street}
                  </p>
                  <p className="text-sm text-muted-fg">
                    {business.address.postalCode} {business.address.city},{' '}
                    {business.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-accent" aria-hidden="true" />
                <a
                  href={`tel:${business.phone}`}
                  className="font-medium text-primary hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  {business.phoneDisplay}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  variant="accent"
                  href={`tel:${business.phone}`}
                  className="flex-1"
                >
                  <Phone size={18} aria-hidden="true" />
                  Appeler
                </Button>
                <Button
                  variant="outline"
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Navigation size={18} aria-hidden="true" />
                  Itinéraire
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div ref={mapRef} className="reveal">
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm bg-muted aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[400px]">
              <iframe
                src={business.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Carte Google Maps — ${business.name}, ${business.address.street}, ${business.address.city}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
