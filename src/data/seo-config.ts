export const siteConfig = {
  name: 'Guide Officiel de la Succession',
  title: 'Succession & Héritage en France : démarches, calculateur, droits et frais',
  description:
    'Guide clair et structuré sur la succession en France : démarches, droits de succession, frais de notaire, testament, donation. Simulateur et FAQ.',
  url: 'https://succession-guide.fr',
  ogImage: '/images/og/default-og.jpg',
  locale: 'fr_FR',
  language: 'fr',
  author: 'Guide Officiel de la Succession',
  twitterHandle: '@successionfr',
};

export const globalKeywords = 'succession, héritage, droits de succession, donation, testament, frais de notaire, simulateur succession, simulation héritage, succession France, héritage France, calcul droits succession';

export const defaultMeta = {
  robots: 'index, follow',
  googlebot: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
};

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateTitle(pageTitle?: string): string {
  if (!pageTitle) return siteConfig.title;
  return `${pageTitle} | ${siteConfig.name}`;
}

export function generateCanonical(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

// Mots-clés principaux par catégorie pour le maillage interne
export const keywords = {
  succession: [
    'succession',
    'ouvrir succession',
    'délai succession',
    'succession sans testament',
    'blocage succession',
    'succession dette',
    'accepter succession',
    'renoncer succession',
    'simulation succession',
  ],
  heritage: [
    'héritage',
    'héritier',
    'part héritage',
    'héritage immobilier',
    'héritage conjoint',
    'héritage enfant',
    'réserve héréditaire',
    'quotité disponible',
    'simulation héritage',
    'simulateur héritage',
    'simuler héritage',
  ],
  donation: [
    'donation',
    'donation vivant',
    'donation partage',
    'donation immobilier',
    'abattement donation',
    'donation enfant',
    'donation conjoint',
  ],
  testament: [
    'testament',
    'testament olographe',
    'testament authentique',
    'rédiger testament',
    'contester testament',
    'legs',
    'légataire',
  ],
  droits: [
    'droits succession',
    'calcul droits succession',
    'barème succession',
    'exonération succession',
    'payer droits succession',
    'abattement succession',
  ],
  notaire: [
    'notaire succession',
    'frais notaire',
    'acte notarié',
    'attestation propriété',
    'déclaration succession',
  ],
};
