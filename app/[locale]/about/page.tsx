import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Card } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import type { Metadata } from 'next';
import { Target, Heart, Shield, Zap, BookOpen, RefreshCw, FlaskConical, Award } from 'lucide-react';
import { generateSEO } from '@/lib/seo';
import { getPageSlug } from '@/config/pages.config';
import { getTotalCalculatorCount } from '@/lib/calculatorRegistry';
import { categories } from '@/config/categories.config';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  const alternateLocale = locale === 'en' ? 'tr' : 'en';

  return generateSEO({
    title: t('title'),
    description: t('missionText'),
    locale: locale as 'en' | 'tr',
    path: `/${getPageSlug('about', locale as 'en' | 'tr')}`,
    alternatePath: `/${getPageSlug('about', alternateLocale as 'en' | 'tr')}`,
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');
  const calculatorCount = getTotalCalculatorCount();
  const categoryCount = categories.length;

  const features = [
    {
      icon: Heart,
      title: t('feature1'),
      color: 'text-red-600',
      bg: 'bg-red-100',
    },
    {
      icon: Shield,
      title: t('feature2'),
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: Zap,
      title: t('feature3'),
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
    },
    {
      icon: Target,
      title: t('feature4'),
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      icon: BookOpen,
      title: t('feature5'),
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      icon: RefreshCw,
      title: t('feature6'),
      color: 'text-teal-600',
      bg: 'bg-teal-100',
    },
  ];

  const stats = [
    { value: `${calculatorCount}+`, label: t('statsCalculators'), color: 'text-primary-600' },
    { value: `${categoryCount}`, label: t('statsCategories'), color: 'text-green-600' },
    { value: '2', label: t('statsLanguages'), color: 'text-purple-600' },
    { value: locale === 'tr' ? 'Aylık' : 'Monthly', label: t('statsUpdates'), color: 'text-amber-600' },
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
          <h1 className="heading-1">{t('title')}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          {/* Mission */}
          <Card className="mb-8 border-l-4 border-l-primary-500">
            <h2 className="heading-3 mb-4">{t('mission')}</h2>
            <p className="text-body text-lg leading-relaxed">{t('missionText')}</p>
          </Card>

          {/* Stats */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="mt-1 text-sm text-neutral-600">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Story */}
          <Card className="mb-8">
            <h2 className="heading-3 mb-4">{t('story')}</h2>
            <p className="text-body text-lg leading-relaxed">{t('storyText')}</p>
          </Card>

          {/* Commitment */}
          <Card className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <Award className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="heading-3">{t('commitment')}</h2>
            </div>
            <p className="text-body text-lg leading-relaxed">{t('commitmentText')}</p>
          </Card>

          {/* Methodology */}
          <Card className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <FlaskConical className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="heading-3">{t('methodology')}</h2>
            </div>
            <p className="text-body text-lg leading-relaxed">{t('methodologyText')}</p>
          </Card>

          {/* Editorial Standards */}
          <Card className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                <BookOpen className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="heading-3">{t('editorial')}</h2>
            </div>
            <p className="text-body text-lg leading-relaxed">{t('editorialText')}</p>
          </Card>

          {/* Why Choose Us */}
          <Card>
            <h2 className="heading-3 mb-6">{t('whyChooseUs')}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.bg}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <p className="flex-1 text-neutral-700">{feature.title}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
