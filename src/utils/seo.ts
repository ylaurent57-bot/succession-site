import { siteConfig, generateTitle, generateCanonical, type SEOProps } from '@data/seo-config';

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString();
}

export function formatDateFR(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function generateMetaTags(props: SEOProps) {
  const title = generateTitle(props.title);
  const description = props.description || siteConfig.description;
  const canonical = props.canonical ? generateCanonical(props.canonical) : undefined;
  const ogImage = props.ogImage || siteConfig.ogImage;
  const ogType = props.ogType || 'website';

  return {
    title,
    description,
    canonical,
    ogImage: ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`,
    ogType,
    noindex: props.noindex || false,
    publishedTime: props.publishedTime,
    modifiedTime: props.modifiedTime,
    author: props.author || siteConfig.author,
    section: props.section,
    tags: props.tags,
  };
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3).trim() + '...';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export { siteConfig, generateTitle, generateCanonical };
