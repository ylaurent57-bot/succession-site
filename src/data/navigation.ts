export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Succession',
    href: '/succession/',
    children: [
      { label: 'Ouvrir une succession', href: '/blog/succession/ouvrir-succession/' },
      { label: 'Délai de succession', href: '/blog/succession/delai-succession/' },
      { label: 'Succession sans notaire', href: '/blog/succession/succession-sans-notaire/' },
      { label: 'Blocage de succession', href: '/blog/succession/blocage-succession/' },
      { label: 'Succession et dette', href: '/blog/succession/succession-dette/' },
    ],
  },
  {
    label: 'Héritage',
    href: '/heritage/',
    children: [
      { label: 'Héritage sans testament', href: '/blog/heritage/heritage-sans-testament/' },
      { label: 'Héritage conjoint survivant', href: '/blog/heritage/heritage-conjoint-survivant/' },
      { label: 'Héritage enfant unique', href: '/blog/heritage/heritage-enfant-unique/' },
      { label: 'Part réservataire', href: '/blog/heritage/part-reservataire/' },
    ],
  },
  {
    label: 'Donation',
    href: '/donation/',
    children: [
      { label: 'Donation de son vivant', href: '/blog/donation/donation-vivant/' },
      { label: 'Donation-partage', href: '/blog/donation/donation-partage/' },
      { label: 'Donation immobilier', href: '/blog/donation/donation-immobilier/' },
      { label: 'Abattement donation', href: '/blog/donation/abattement-donation/' },
    ],
  },
  {
    label: 'Testament',
    href: '/testament/',
    children: [
      { label: 'Rédiger un testament', href: '/blog/testament/rediger-testament/' },
      { label: 'Testament olographe', href: '/blog/testament/testament-olographe/' },
      { label: 'Testament authentique', href: '/blog/testament/testament-authentique/' },
      { label: 'Contester un testament', href: '/blog/testament/contester-testament/' },
    ],
  },
  {
    label: 'Droits de succession',
    href: '/droits-succession/',
    children: [
      { label: 'Calcul droits succession', href: '/blog/droits/calcul-droits-succession/' },
      { label: 'Barème 2024', href: '/blog/droits/bareme-droits-succession/' },
      { label: 'Exonérations', href: '/blog/droits/exoneration-droits-succession/' },
    ],
  },
  {
    label: 'Notaire',
    href: '/notaire/',
    children: [
      { label: 'Rôle du notaire', href: '/blog/notaire/role-notaire-succession/' },
      { label: 'Frais de notaire', href: '/blog/notaire/frais-notaire-succession/' },
      { label: 'Délai notaire', href: '/blog/notaire/delai-notaire-succession/' },
    ],
  },
  {
    label: 'Outils',
    href: '/outils/',
    children: [
      { label: 'Calculateur droits', href: '/outils/calculateur-droits-succession/' },
      { label: 'Simulateur héritage', href: '/outils/simulateur-heritage/' },
    ],
  },
];

export const footerNavigation = {
  piliers: [
    { label: 'Succession', href: '/succession/' },
    { label: 'Héritage', href: '/heritage/' },
    { label: 'Donation', href: '/donation/' },
    { label: 'Testament', href: '/testament/' },
    { label: 'Droits de succession', href: '/droits-succession/' },
    { label: 'Notaire', href: '/notaire/' },
  ],
  ressources: [
    { label: 'Blog', href: '/blog/' },
    { label: 'Guides', href: '/guides/' },
    { label: 'Outils', href: '/outils/' },
    { label: 'FAQ', href: '/faq/' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales/' },
    { label: 'Politique de confidentialité', href: '/confidentialite/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'À propos', href: '/a-propos/' },
  ],
};
