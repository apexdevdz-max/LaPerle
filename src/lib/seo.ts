import { business, openingHours } from '../data/config';

/**
 * Generates JSON-LD structured data for a Bakery (schema.org).
 */
export function generateBakeryJsonLd(): string {
  const hoursSpec = openingHours.map((h) => {
    const dayNames: Record<number, string> = {
      1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday',
      5: 'Friday', 6: 'Saturday', 7: 'Sunday',
    };
    return {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayNames[h.isoDay],
      opens: h.open,
      closes: h.close,
    };
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: business.name,
    legalName: business.legalName,
    url: typeof window !== 'undefined' ? window.location.origin : '',
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressCountry: 'CH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    openingHoursSpecification: hoursSpec,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.aggregateRating,
      reviewCount: business.totalReviews,
      bestRating: 5,
      worstRating: 1,
    },
    servesCuisine: ['Balkan', 'Burek', 'Pâtisserie'],
    priceRange: 'CHF',
    image: '/images/store-1.webp',
  };

  return JSON.stringify(schema, null, 2);
}
