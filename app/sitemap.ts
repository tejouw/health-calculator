import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { getAllCalculators } from '@/lib/calculatorRegistry';
import { getCategorySlugByLocale } from '@/lib/categoryMapping';
import { categories } from '@/config/categories.config';
import { pageRoutes } from '@/config/pages.config';
import { getAllBlogSlugs } from '@/content/blog';

export const dynamic = 'force-dynamic';

const EN_DOMAIN = 'https://prohealthcalc.com';
const TR_DOMAIN = 'https://saglikhesapla.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const isEN = host.includes('prohealthcalc');

  const locale: 'en' | 'tr' = isEN ? 'en' : 'tr';
  const domain = isEN ? EN_DOMAIN : TR_DOMAIN;

  const entries: MetadataRoute.Sitemap = [];

  // Homepage
  entries.push({
    url: domain,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
    alternates: {
      languages: {
        en: EN_DOMAIN,
        tr: TR_DOMAIN,
      },
    },
  });

  // Category pages
  for (const cat of categories) {
    const slug = cat.slug[locale];

    entries.push({
      url: `${domain}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${EN_DOMAIN}/${cat.slug.en}`,
          tr: `${TR_DOMAIN}/${cat.slug.tr}`,
        },
      },
    });
  }

  // Calculator pages
  const calculators = getAllCalculators();
  for (const calc of calculators) {
    const catSlug = getCategorySlugByLocale(calc.category, locale);
    const calcSlug = calc.slug[locale];

    entries.push({
      url: `${domain}/${catSlug}/${calcSlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${EN_DOMAIN}/${getCategorySlugByLocale(calc.category, 'en')}/${calc.slug.en}`,
          tr: `${TR_DOMAIN}/${getCategorySlugByLocale(calc.category, 'tr')}/${calc.slug.tr}`,
        },
      },
    });
  }

  // Static pages (about, contact, privacy, terms, disclaimer)
  for (const page of pageRoutes) {
    if (page.id === 'blog') continue; // Blog handled separately

    const slug = page.slug[locale];
    const isLegal = ['privacy-policy', 'terms-of-service', 'disclaimer'].includes(page.id);

    entries.push({
      url: `${domain}/${slug}`,
      lastModified: new Date(),
      changeFrequency: isLegal ? 'yearly' : 'monthly',
      priority: isLegal ? 0.3 : 0.5,
      alternates: {
        languages: {
          en: `${EN_DOMAIN}/${page.slug.en}`,
          tr: `${TR_DOMAIN}/${page.slug.tr}`,
        },
      },
    });
  }

  // Blog index
  entries.push({
    url: `${domain}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
    alternates: {
      languages: {
        en: `${EN_DOMAIN}/blog`,
        tr: `${TR_DOMAIN}/blog`,
      },
    },
  });

  // Blog posts
  const blogSlugs = getAllBlogSlugs();
  for (const { slug, slugTr } of blogSlugs) {
    const localSlug = locale === 'en' ? slug : slugTr;

    entries.push({
      url: `${domain}/blog/${localSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          en: `${EN_DOMAIN}/blog/${slug}`,
          tr: `${TR_DOMAIN}/blog/${slugTr}`,
        },
      },
    });
  }

  return entries;
}
