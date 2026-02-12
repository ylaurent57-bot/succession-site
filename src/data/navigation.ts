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
    ],
  },
  {
    label: 'Héritage',
    href: '/heritage/',
    children: [
      { label: 'Héritage sans testament', href: '/blog/heritage/heritage-sans-testament/' },
      { label: 'Héritage conjoint survivant', href: '/blog/heritage/heritage-conjoint-survivant/' },
    ],
  },
  {
    label: 'Donation',
    href: '/donation/',
    children: [
      { label: 'Donation de son vivant', href: '/blog/donation/donation-vivant/' },
    ],
  },
  {
    label: 'Testament',
    href: '/testament/',
  },
  {
    label: 'Droits de succession',
    href: '/droits-succession/',
    children: [
      { label: 'Calcul droits succession', href: '/blog/droits/calcul-droits-succession/' },
    ],
  },
  {
    label: 'Notaire',
    href: '/notaire/',
    children: [
      { label: 'Frais de notaire', href: '/blog/notaire/frais-notaire-succession/' },
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
    { label: 'Outils', href: '/outils/' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales/' },
    { label: 'Politique de confidentialité', href: '/confidentialite/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'À propos', href: '/a-propos/' },
  ],
};
