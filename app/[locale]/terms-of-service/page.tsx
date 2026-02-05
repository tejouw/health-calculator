import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Card } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import type { Metadata } from 'next';
import { FileCheck, AlertTriangle, Scale, Copyright, Ban, RefreshCw } from 'lucide-react';
import { generateSEO } from '@/lib/seo';
import { getPageSlug } from '@/config/pages.config';

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });
  const alternateLocale = locale === 'en' ? 'tr' : 'en';

  return generateSEO({
    title: t('title'),
    description: t('acceptanceText'),
    locale: locale as 'en' | 'tr',
    path: `/${getPageSlug('terms-of-service', locale as 'en' | 'tr')}`,
    alternatePath: `/${getPageSlug('terms-of-service', alternateLocale as 'en' | 'tr')}`,
  });
}

export default async function TermsOfServicePage({ params }: TermsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('terms');

  const sections = [
    {
      icon: FileCheck,
      title: t('acceptance'),
      content: t('acceptanceText'),
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: AlertTriangle,
      title: t('medicalDisclaimer'),
      content: t('medicalDisclaimerText'),
      color: 'text-red-600',
      bg: 'bg-red-100',
    },
    {
      icon: Scale,
      title: t('accuracy'),
      content: t('accuracyText'),
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
    },
    {
      icon: Copyright,
      title: t('intellectualProperty'),
      content: t('intellectualPropertyText'),
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      icon: Ban,
      title: t('prohibitedUse'),
      content: t('prohibitedUseText'),
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
    {
      icon: RefreshCw,
      title: t('changes'),
      content: t('changesText'),
      color: 'text-teal-600',
      bg: 'bg-teal-100',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-custom py-8">
          <Breadcrumbs
            items={[
              {
                label: t('title'),
              },
            ]}
            className="mb-4"
          />
          <h1 className="heading-1 mb-2">{t('title')}</h1>
          <p className="text-body text-neutral-600">
            {t('lastUpdated')}: January 29, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          {/* Sections */}
          {sections.map((section, index) => (
            <Card key={index} className="mb-6">
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${section.bg}`}>
                  <section.icon className={`h-5 w-5 ${section.color}`} />
                </div>
                <h2 className="heading-3">{section.title}</h2>
              </div>
              <p className="text-body leading-relaxed">{section.content}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
