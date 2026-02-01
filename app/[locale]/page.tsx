import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/lib/navigation';
import { categories } from '@/config/categories.config';
import { getAllCalculators, getCategoryCalculatorCount, getPopularCalculators } from '@/lib/calculatorRegistry';
import { CategoryCard } from '@/components/home/CategoryCard';
import { PopularCalculators } from '@/components/home/PopularCalculators';
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

  // Get popular calculators
  const popularCalculators = getPopularCalculators(8); // Show top 8 popular calculators

  // Dynamically populate calculator counts for each category
  const categoriesWithCounts = categories.map((category) => ({
    ...category,
    calculatorCount: getCategoryCalculatorCount(category.id),
  }));

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
      {/* Hero Section - Mobile Optimized */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="container-custom relative py-12 sm:py-16 md:py-20 lg:py-28 text-center px-4">
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white backdrop-blur-sm">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
            <span className="leading-none">{tHome('trustedBy')}</span>
          </div>

          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight px-2">
            {tHero('title')}
          </h1>
          <p className="mx-auto mb-6 sm:mb-8 md:mb-10 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-primary-50 leading-relaxed px-4">
            {tHero('subtitle')}
          </p>

          {/* Search Bar - Professional with real-time search */}
          <div className="mx-auto max-w-2xl px-2">
            <SearchBar
              calculators={allCalculators}
              locale={locale as 'en' | 'tr'}
              placeholder={tCommon('searchPlaceholder')}
            />
          </div>

          {/* Stats Bar - Mobile Optimized */}
          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-xl sm:rounded-2xl bg-white/10 p-3 sm:p-4 md:p-6 backdrop-blur-md transition-all hover:bg-white/20"
              >
                <stat.icon className="mx-auto mb-2 sm:mb-3 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-primary-100 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Mobile Optimized */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="mb-3 inline-flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 transition-transform group-hover:scale-110">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="mb-1.5 sm:mb-2 text-sm sm:text-base md:text-lg font-semibold text-neutral-900 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section - Mobile Optimized */}
      <section id="categories" className="section-spacing bg-gradient-to-b from-neutral-50 to-white scroll-mt-20">
        <div className="container-custom">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <div className="mb-3 sm:mb-4 inline-block rounded-full bg-primary-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-primary-700">
              {tHome('exploreCategories')}
            </div>
            <h2 className="heading-2 mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">{tCommon('allCategories')}</h2>
            <p className="text-body mx-auto max-w-2xl text-sm sm:text-base md:text-lg px-4">
              {t('seo.defaultDescription')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {categoriesWithCounts.map((category) => {
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

      {/* Popular Calculators Section - Mobile Optimized */}
      <section className="section-spacing bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom px-4">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-primary-700 shadow-sm">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{tHome('mostPopular')}</span>
            </div>
            <h2 className="heading-2 mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">{tCommon('popularCalculators')}</h2>
            <p className="text-body mx-auto max-w-2xl text-sm sm:text-base md:text-lg px-4">
              {tHome('mostUsedCalculators')}
            </p>
          </div>

          <PopularCalculators
            locale={locale as 'en' | 'tr'}
            fallbackCalculators={popularCalculators}
            limit={8}
          />
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="section-spacing bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container-custom text-center px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              {tHome('ctaTitle')}
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-primary-100 leading-relaxed px-2">
              {tHome('ctaDescription')}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/${categories[0].slug[locale as 'en' | 'tr']}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-primary-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>{tHome('tryCalculator')}</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
