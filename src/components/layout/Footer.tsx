import { MapPin, Phone, Clock } from 'lucide-react';
import { business, openingHours } from '../../data/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-on-primary" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.jpg"
                alt="Logo La Perle de Béthusy"
                className="w-10 h-10 rounded-full object-cover shrink-0 border border-white/20"
              />
              <h3 className="font-heading text-2xl font-bold">
                {business.name}
              </h3>
            </div>
            <p className="text-on-primary/70 text-sm leading-relaxed mb-6">
              Saveurs authentiques des Balkans au cœur de Lausanne.
              Burek, baklava et pâtisseries faits maison avec amour.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {business.socialLinks.instagram && (
                <a
                  href={business.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-on-primary/10 hover:bg-on-primary/20 transition-colors duration-200 cursor-pointer"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              )}
              {business.socialLinks.facebook && (
                <a
                  href={business.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-on-primary/10 hover:bg-on-primary/20 transition-colors duration-200 cursor-pointer"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock size={18} aria-hidden="true" className="text-accent" />
              Horaires
            </h4>
            <dl className="space-y-1.5 text-sm">
              {openingHours.map((h) => (
                <div key={h.isoDay} className="flex justify-between">
                  <dt className="text-on-primary/70">{h.day}</dt>
                  <dd className="font-medium">{h.open} – {h.close}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-on-primary/70 hover:text-on-primary transition-colors duration-200 cursor-pointer"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    {business.address.street}<br />
                    {business.address.postalCode} {business.address.city}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center gap-2 text-on-primary/70 hover:text-on-primary transition-colors duration-200 cursor-pointer"
                >
                  <Phone size={16} className="shrink-0 text-accent" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-on-primary/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-primary/50">
          <p>© {currentYear} {business.legalName}. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-on-primary transition-colors duration-200 cursor-pointer">
              Mentions légales
            </a>
            <a href="#" className="hover:text-on-primary transition-colors duration-200 cursor-pointer">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
