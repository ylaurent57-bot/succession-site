import { siteConfig } from '@data/seo-config';

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  section?: string;
}

export interface FAQSchemaProps {
  questions: { question: string; answer: string }[];
}

export interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
}

export function generateArticleSchema(props: ArticleSchemaProps): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.title,
    description: props.description,
    image: props.image || `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished: props.datePublished,
    dateModified: props.dateModified || props.datePublished,
    author: {
      '@type': 'Organization',
      name: props.author || siteConfig.author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url,
    },
    articleSection: props.section,
  };
}

export function generateFAQSchema(props: FAQSchemaProps): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(props: BreadcrumbSchemaProps): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: props.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateOrganizationSchema(props?: OrganizationSchemaProps): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: props?.name || siteConfig.name,
    url: props?.url || siteConfig.url,
    logo: props?.logo || `${siteConfig.url}/images/logo.png`,
    sameAs: [
      // Ajouter vos réseaux sociaux ici
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'French',
    },
  };
}

export function generateWebsiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/recherche?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateHowToSchema(
  title: string,
  description: string,
  steps: { name: string; text: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
