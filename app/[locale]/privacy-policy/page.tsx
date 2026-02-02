import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Card } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import type { Metadata } from 'next';
import { Shield, Database, Cookie, ExternalLink, RefreshCw, Mail, Megaphone, Target } from 'lucide-react';

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return {
    title: t('title'),
    description: t('intro'),
  };
}

export default async function PrivacyPolicyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('privacy');

  const sections = [
    {
      icon: Database,
      title: t('dataCollection'),
      content: t('dataCollectionText'),
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: Shield,
      title: t('analytics'),
      content: t('analyticsText'),
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      icon: Cookie,
      title: t('cookies'),
      content: t('cookiesText'),
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
    {
      icon: ExternalLink,
      title: t('thirdParty'),
      content: t('thirdPartyText'),
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      icon: Megaphone,
      title: t('advertising'),
      content: t('advertisingText'),
      color: 'text-amber-600',
      bg: 'bg-amber-100',
    },
    {
      icon: Target,
      title: t('advertisingCookies'),
      content: t('advertisingCookiesText'),
      color: 'text-rose-600',
      bg: 'bg-rose-100',
    },
    {
      icon: RefreshCw,
      title: t('changes'),
      content: t('changesText'),
      color: 'text-teal-600',
      bg: 'bg-teal-100',
    },
    {
      icon: Mail,
      title: t('contact'),
      content: t('contactText'),
      color: 'text-red-600',
      bg: 'bg-red-100',
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
            {t('lastUpdated')}: February 2, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          {/* Introduction */}
          <Card className="mb-8 border-l-4 border-l-primary-500">
            <p className="text-body text-lg leading-relaxed">{t('intro')}</p>
          </Card>

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
