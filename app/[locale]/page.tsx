import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/lib/navigation';
import { categories } from '@/config/categories.config';
import { getAllCalculators } from '@/lib/calculatorRegistry';
import { Card } from '@/components/ui';
import { CategoryCard } from '@/components/home/CategoryCard';
import { SearchBar } from '@/components/search';
import type { Metadata } from 'next';
import {
  TrendingUp,
  Calculator,
  Users,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Star
} from 'lucide-react';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });

  // Metadata is already set in layout, this is just for page-specific overrides
  return {
    title: t('defaultTitle'),
    description: t('defaultDescription'),
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const tHero = await getTranslations('hero');
  const tCommon = await getTranslations('common');
  const tCat = await getTranslations('categories');
  const tStats = await getTranslations('stats');
  const tFeatures = await getTranslations('features');
  const tHome = await getTranslations('home');

  // Get all calculators for search
  const allCalculators = getAllCalculators();

  const stats = [
    { icon: Calculator, value: '350+', label: tStats('healthCalculators') },
    { icon: Users, value: '100K+', label: tStats('activeUsers') },
    { icon: Star, value: '4.9/5', label: tStats('userRating') },
    { icon: Shield, value: '100%', label: tStats('privacyProtected') },
  ];

  const features = [
    {
      icon: Zap,
      title: tFeatures('instantResults.title'),
      description: tFeatures('instantResults.description')
    },
    {
      icon: Shield,
      title: tFeatures('privacyFirst.title'),
      description: tFeatures('privacyFirst.description')
    },
    {
      icon: CheckCircle2,
      title: tFeatures('medicalAccuracy.title'),
      description: tFeatures('medicalAccuracy.description')
    },
    {
      icon: Calculator,
      title: tFeatures('easyToUse.title'),
      description: tFeatures('easyToUse.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="container-custom relative py-20 text-center lg:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{tHome('trustedBy')}</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {tHero('title')}
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-primary-50 sm:text-xl lg:text-2xl">
            {tHero('subtitle')}
          </p>

          {/* Search Bar - Professional with real-time search */}
          <div className="mx-auto max-w-2xl">
            <SearchBar
              calculators={allCalculators}
              locale={locale as 'en' | 'tr'}
              placeholder={tCommon('searchPlaceholder')}
            />
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/20"
              >
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-white" />
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - New */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 transition-transform group-hover:scale-110">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section - Enhanced */}
      <section id="categories" className="section-spacing bg-gradient-to-b from-neutral-50 to-white scroll-mt-20">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
              {tHome('exploreCategories')}
            </div>
            <h2 className="heading-2 mb-4">{tCommon('allCategories')}</h2>
            <p className="text-body mx-auto max-w-2xl text-lg">
              {t('seo.defaultDescription')}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => {
              const catKey = category.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
              const title = tCat(catKey);

              return (
                <CategoryCard
                  key={category.id}
                  category={category}
                  title={title}
                  locale={locale as 'en' | 'tr'}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Calculators Section - Enhanced */}
      <section className="section-spacing bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
              <TrendingUp className="h-4 w-4" />
              <span>{tHome('mostPopular')}</span>
            </div>
            <h2 className="heading-2 mb-4">{tCommon('popularCalculators')}</h2>
            <p className="text-body mx-auto max-w-2xl text-lg">
              {tHome('mostUsedCalculators')}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Card className="max-w-2xl border-2 border-dashed border-primary-200 bg-white/50 text-center backdrop-blur-sm">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <Calculator className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                {tHome('comingSoon')}
              </h3>
              <p className="text-neutral-600">
                {tHome('comingSoonDescription')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - New */}
      <section className="section-spacing bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              {tHome('ctaTitle')}
            </h2>
            <p className="mb-8 text-lg text-primary-100">
              {tHome('ctaDescription')}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/body-weight"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                <Calculator className="h-5 w-5" />
                <span>{tHome('tryCalculator')}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
