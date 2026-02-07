export interface AffiliateLink {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'notaire' | 'assurance' | 'juridique' | 'immobilier' | 'finance';
  cta: string;
  featured?: boolean;
}

// Placeholder pour les liens d'affiliation - À remplacer par vos vrais liens
export const affiliateLinks: AffiliateLink[] = [
  {
    id: 'notaire-devis',
    name: 'Trouver un notaire',
    description: 'Obtenez des devis gratuits de notaires près de chez vous pour votre succession.',
    url: '#', // Remplacer par votre lien d'affiliation
    category: 'notaire',
    cta: 'Demander un devis gratuit',
    featured: true,
  },
  {
    id: 'assurance-vie',
    name: 'Assurance vie',
    description: 'Optimisez votre transmission avec une assurance vie adaptée à votre situation.',
    url: '#', // Remplacer par votre lien d'affiliation
    category: 'assurance',
    cta: 'Comparer les offres',
    featured: true,
  },
  {
    id: 'conseil-juridique',
    name: 'Conseil juridique en ligne',
    description: 'Posez vos questions à un avocat spécialisé en droit des successions.',
    url: '#', // Remplacer par votre lien d'affiliation
    category: 'juridique',
    cta: 'Consulter un avocat',
  },
  {
    id: 'estimation-immobilier',
    name: 'Estimation immobilière',
    description: 'Estimez gratuitement la valeur de vos biens immobiliers pour la succession.',
    url: '#', // Remplacer par votre lien d'affiliation
    category: 'immobilier',
    cta: 'Estimer mon bien',
  },
  {
    id: 'gestion-patrimoine',
    name: 'Conseiller en patrimoine',
    description: 'Optimisez la transmission de votre patrimoine avec un conseiller expert.',
    url: '#', // Remplacer par votre lien d'affiliation
    category: 'finance',
    cta: 'Prendre rendez-vous',
  },
];

export function getAffiliateByCategory(category: AffiliateLink['category']): AffiliateLink[] {
  return affiliateLinks.filter((link) => link.category === category);
}

export function getFeaturedAffiliates(): AffiliateLink[] {
  return affiliateLinks.filter((link) => link.featured);
}

export function getAffiliateById(id: string): AffiliateLink | undefined {
  return affiliateLinks.find((link) => link.id === id);
}

// Messages CTA contextuels selon le type de page
export const ctaMessages = {
  succession: {
    title: 'Besoin d\'un notaire pour votre succession ?',
    description: 'Obtenez des devis gratuits de notaires spécialisés en succession près de chez vous.',
    affiliateId: 'notaire-devis',
  },
  heritage: {
    title: 'Optimisez votre héritage',
    description: 'Découvrez comment une assurance vie peut optimiser la transmission de votre patrimoine.',
    affiliateId: 'assurance-vie',
  },
  donation: {
    title: 'Préparez votre donation',
    description: 'Consultez un conseiller en patrimoine pour optimiser votre donation.',
    affiliateId: 'gestion-patrimoine',
  },
  testament: {
    title: 'Besoin d\'aide pour votre testament ?',
    description: 'Un notaire peut vous accompagner dans la rédaction de votre testament.',
    affiliateId: 'notaire-devis',
  },
  droits: {
    title: 'Réduisez vos droits de succession',
    description: 'Découvrez les stratégies légales pour optimiser votre fiscalité successorale.',
    affiliateId: 'gestion-patrimoine',
  },
  notaire: {
    title: 'Trouvez le bon notaire',
    description: 'Comparez les devis de notaires spécialisés en succession dans votre région.',
    affiliateId: 'notaire-devis',
  },
};
