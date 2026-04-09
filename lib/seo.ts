import { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';
import { getDomainForLocale } from '@/lib/domain';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  locale: 'en' | 'tr';
  path?: string;
  alternatePath?: string;
  image?: string;
}

export function generateSEO({
  title,
  description,
  keywords = [],
  locale,
  path = '',
  alternatePath,
  image = '/opengraph-image',
}: SEOProps): Metadata {
  // Get domain-specific URL
  const domain = getDomainForLocale(locale);
  const url = `${domain}${path}`;
  const siteName = siteConfig.siteName[locale];

  // Don't append siteName here - layout template already adds it via `%s | SiteName`
  const fullTitle = title;

  const alternateLocale = locale === 'en' ? 'tr' : 'en';
  const altPath = alternatePath !== undefined ? alternatePath : path;

  // Use absolute URLs for cross-domain hreflang
  const languages: Record<string, string> = {};
  languages[locale] = url;
  languages[alternateLocale] = `${getDomainForLocale(alternateLocale)}${altPath}`;
  languages['x-default'] = `${getDomainForLocale('en')}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords[locale], ...keywords].join(', '),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    // Use path for canonical - metadataBase from layout resolves it to full URL
    // This prevents double-domain issues (metadataBase + full URL = broken canonical)
    alternates: {
      canonical: path || '/',
      languages,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      alternateLocale: locale === 'tr' ? 'en_US' : 'tr_TR',
      url,
      title: `${fullTitle} | ${siteName}`,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: siteConfig.social.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateCalculatorSchema(calculator: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  category?: string;
  locale?: 'en' | 'tr';
}) {
  const siteUrl = calculator.locale ? siteConfig.getUrl(calculator.locale) : siteConfig.url;
  const today = new Date().toISOString().split('T')[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: calculator.name,
    description: calculator.description,
    url: calculator.url,
    applicationCategory: 'HealthApplication',
    applicationSubCategory: calculator.category || 'Health Calculator',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    softwareVersion: '1.0',
    datePublished: calculator.datePublished || '2025-01-15',
    dateModified: calculator.dateModified || today,
    inLanguage: ['en', 'tr'],
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteUrl,
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateHowToSchema(data: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.name,
    description: data.description,
    totalTime: data.totalTime || 'PT2M',
    step: data.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function generateMedicalWebPageSchema(data: {
  name: string;
  description: string;
  url: string;
  lastReviewed?: string;
  datePublished?: string;
  dateModified?: string;
  specialty?: string;
  locale?: 'en' | 'tr';
}) {
  const siteUrl = data.locale ? siteConfig.getUrl(data.locale) : siteConfig.url;
  const siteName = data.locale ? siteConfig.siteName[data.locale] : siteConfig.name;
  const today = new Date().toISOString().split('T')[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: data.name,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished || '2025-01-15',
    dateModified: data.dateModified || today,
    lastReviewed: data.lastReviewed || today,
    reviewedBy: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    mainContentOfPage: {
      '@type': 'WebPageElement',
      cssSelector: '.calculator-content',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.calculator-result', '.medical-disclaimer'],
    },
    medicalAudience: [
      {
        '@type': 'MedicalAudience',
        audienceType: 'Patient',
        healthCondition: {
          '@type': 'MedicalCondition',
          name: data.specialty || 'General Health',
        },
      },
    ],
    about: {
      '@type': 'MedicalCondition',
      name: data.specialty || 'Body Weight Management',
    },
    specialty: {
      '@type': 'MedicalSpecialty',
      name: data.specialty || 'General Practice',
    },
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
    },
  };
}

/**
 * Category to Medical Specialty mapping
 */
export const categoryToSpecialty: Record<string, string> = {
  'body-weight': 'Nutrition and Dietetics',
  'fitness': 'Sports Medicine',
  'nutrition': 'Nutrition and Dietetics',
  'pregnancy': 'Obstetrics and Gynecology',
  'womens-health': 'Obstetrics and Gynecology',
  'mens-health': 'Urology',
  'heart': 'Cardiology',
  'diabetes': 'Endocrinology',
  'medical': 'Internal Medicine',
  'mental-health': 'Psychiatry',
  'sleep': 'Sleep Medicine',
  'childrens-health': 'Pediatrics',
  'substance': 'Addiction Medicine',
};

export function generateArticleSchema(data: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
  locale?: 'en' | 'tr';
}) {
  const siteUrl = data.locale ? siteConfig.getUrl(data.locale) : siteConfig.url;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished || '2025-01-15T00:00:00Z',
    dateModified: data.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: data.author || siteConfig.name,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.svg`,
      },
    },
    image: data.image || `${siteUrl}/opengraph-image`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
  };
}

export function generateWebSiteSchema(locale: 'en' | 'tr') {
  const siteUrl = siteConfig.getUrl(locale);
  const siteName = siteConfig.siteName[locale];
  const altLocale = locale === 'en' ? 'tr' : 'en';
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    alternateName: siteConfig.siteName[altLocale],
    url: siteUrl,
    inLanguage: locale === 'en' ? 'en-US' : 'tr-TR',
    description: siteConfig.description[locale],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateCollectionPageSchema(data: {
  name: string;
  description: string;
  url: string;
  locale: 'en' | 'tr';
  numberOfItems: number;
}) {
  const siteUrl = siteConfig.getUrl(data.locale);
  const siteName = siteConfig.siteName[data.locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: data.name,
    description: data.description,
    url: data.url,
    inLanguage: data.locale === 'en' ? 'en-US' : 'tr-TR',
    numberOfItems: data.numberOfItems,
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
    },
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteUrl,
    },
  };
}

export function generateOrganizationSchema(locale: 'en' | 'tr') {
  const siteUrl = siteConfig.getUrl(locale);
  const siteName = siteConfig.siteName[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.svg`,
      width: 512,
      height: 512,
    },
    sameAs: [siteConfig.domains.en, siteConfig.domains.tr],
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
