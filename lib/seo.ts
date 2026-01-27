import { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';
import { getDomainForLocale } from '@/lib/domain';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  locale: 'en' | 'tr';
  path?: string;
  image?: string;
}

export function generateSEO({
  title,
  description,
  keywords = [],
  locale,
  path = '',
  image = '/og-image.jpg',
}: SEOProps): Metadata {
  // Get domain-specific URL
  const domain = getDomainForLocale(locale);
  const url = `${domain}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords].join(', '),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    metadataBase: new URL(domain),
    alternates: {
      canonical: url,
      languages: {
        en: `${getDomainForLocale('en')}${path}`,
        tr: `${getDomainForLocale('tr')}${path}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
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
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: calculator.name,
    description: calculator.description,
    url: calculator.url,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
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
  specialty?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: data.name,
    description: data.description,
    url: data.url,
    lastReviewed: data.lastReviewed || new Date().toISOString().split('T')[0],
    reviewedBy: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    medicalAudience: [
      {
        '@type': 'MedicalAudience',
        name: 'Patient',
      },
    ],
    about: {
      '@type': 'MedicalCondition',
      name: data.specialty || 'Body Weight Management',
    },
  };
}

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
