import { Phone, Navigation } from 'lucide-react';
import { business } from '../../data/config';

/**
 * Sticky bottom action bar on mobile — "Appeler" and "Itinéraire".
 * Hidden on desktop (md+).
 */
export function MobileActionBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface/95 backdrop-blur-md border-t border-border/50 safe-area-pb"
      role="navigation"
      aria-label="Actions rapides"
    >
      <div className="flex">
        <a
          href={`tel:${business.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-accent hover:bg-accent/10 transition-colors duration-200 cursor-pointer"
        >
          <Phone size={18} aria-hidden="true" />
          Appeler
        </a>
        <div className="w-px bg-border" aria-hidden="true" />
        <a
          href={business.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-primary hover:bg-muted/60 transition-colors duration-200 cursor-pointer"
        >
          <Navigation size={18} aria-hidden="true" />
          Itinéraire
        </a>
      </div>
    </div>
  );
}
