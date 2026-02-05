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
  image = '/og-image.jpg',
}: SEOProps): Metadata {
  // Get domain-specific URL
  const domain = getDomainForLocale(locale);
  const url = `${domain}${path}`;
  const siteName = siteConfig.siteName[locale];
  const fullTitle = `${title} | ${siteName}`;

  const alternateLocale = locale === 'en' ? 'tr' : 'en';
  const altPath = alternatePath !== undefined ? alternatePath : path;
  const languages: Record<string, string> = {};
  languages[locale] = url;
  languages[alternateLocale] = `${getDomainForLocale(alternateLocale)}${altPath}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords[locale], ...keywords].join(', '),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    metadataBase: new URL(domain),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      url,
      title: fullTitle,
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
}) {
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
    datePublished: calculator.datePublished || '2025-01-01',
    dateModified: calculator.dateModified || new Date().toISOString().split('T')[0],
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
      url: siteConfig.url,
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
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: data.name,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished || '2025-01-01',
    dateModified: data.dateModified || new Date().toISOString().split('T')[0],
    lastReviewed: data.lastReviewed || new Date().toISOString().split('T')[0],
    reviewedBy: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
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
      name: siteConfig.name,
      url: siteConfig.url,
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
};

export function generateArticleSchema(data: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished || new Date().toISOString(),
    dateModified: data.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: data.author || siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    image: data.image || `${siteConfig.url}/og-image.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
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
