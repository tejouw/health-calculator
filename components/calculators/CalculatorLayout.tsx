'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { CalculatorMeta, CalculatorContent } from '@/types/calculator';
import { Breadcrumbs } from '@/components/layout';
import { Card } from '@/components/ui';
import { getCategoryById } from '@/config/categories.config';
import { usePageViewTracking } from '@/hooks/usePageViewTracking';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

// Import BMI-specific components (will be conditionally rendered)
import BMICategoriesTable from '@/calculators/body-weight/bmi/components/BMICategoriesTable';
import MedicalDisclaimer from '@/calculators/body-weight/bmi/components/MedicalDisclaimer';
import ReferencesSection from '@/calculators/body-weight/bmi/components/ReferencesSection';
import ContentNavigation from '@/calculators/body-weight/bmi/components/ContentNavigation';

// Import related calculators and ad components
import RelatedCalculators from '@/components/calculators/RelatedCalculators';
import { SidebarAd } from '@/components/ads';
import { ShareButtons } from '@/components/social';

interface CalculatorLayoutProps {
  calculator: CalculatorMeta;
  content?: CalculatorContent;
  locale: 'en' | 'tr';
  shareUrl: string;
  children: React.ReactNode;
}

const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({
  calculator,
  content,
  locale,
  shareUrl,
  children,
}) => {
  const t = useTranslations('calculator');
  const category = getCategoryById(calculator.category);

  // Track page views for analytics
  usePageViewTracking(calculator.id);

  const breadcrumbItems = [
    {
      label: category?.name[locale] || calculator.category,
      href: `/${category?.slug[locale] || calculator.category}`,
    },
    {
      label: calculator.title[locale],
    },
  ];

  // Build content navigation sections
  const contentSections = content
    ? [
        { id: 'what-is', title: t('whatIsIt') },
        content[locale].formulaDetails && { id: 'formula-details', title: locale === 'en' ? 'Formula Details' : 'Formül Detayları' },
        { id: 'how-to-calculate', title: t('howToCalculate') },
        content[locale].categories && { id: 'categories', title: locale === 'en' ? 'Categories' : 'Kategoriler' },
        content[locale].interpretation && { id: 'interpretation', title: t('interpretation') },
        content[locale].limitations && { id: 'limitations', title: locale === 'en' ? 'Limitations' : 'Sınırlamalar' },
        content[locale].healthBenefits && { id: 'health-benefits', title: locale === 'en' ? 'Health Benefits' : 'Sağlık Faydaları' },
        content[locale].improvementTips && { id: 'improvement-tips', title: locale === 'en' ? 'How to Improve' : 'Nasıl Geliştir ilir' },
        content[locale].healthRisks && { id: 'health-risks', title: locale === 'en' ? 'Health Risks' : 'Sağlık Riskleri' },
        content[locale].alternativeMeasures && { id: 'alternative-measures', title: locale === 'en' ? 'Alternative Measures' : 'Alternatif Ölçümler' },
        content[locale].demographicDifferences && { id: 'demographic-differences', title: locale === 'en' ? 'Demographic Differences' : 'Demografik Farklılıklar' },
        content[locale].tips && content[locale].tips!.length > 0 && { id: 'tips', title: t('tips') },
        content[locale].faqs && content[locale].faqs!.length > 0 && { id: 'faq', title: t('faq') },
        content[locale].references && { id: 'references', title: locale === 'en' ? 'References' : 'Kaynaklar' },
      ].filter(Boolean) as Array<{ id: string; title: string }>
    : [];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header Section */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-custom py-8">
          <Breadcrumbs items={breadcrumbItems} className="mb-4" />
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="heading-2 mb-3">{calculator.title[locale]}</h1>
              <p className="text-body max-w-3xl">{calculator.description[locale]}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {t('medicallyReviewedBy')}: {t('medicalReviewTeam')}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
                  <Zap className="h-3.5 w-3.5" />
                  {locale === 'tr' ? 'Anında Sonuç' : 'Instant Results'}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700">
                  <Lock className="h-3.5 w-3.5" />
                  {locale === 'tr' ? 'Verileriniz Gizli' : 'Privacy Protected'}
                </span>
              </div>
            </div>
            <ShareButtons
              url={shareUrl}
              title={calculator.title[locale]}
              description={calculator.description[locale]}
              calculatorId={calculator.id}
              size="sm"
              className="flex-shrink-0"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Calculator */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border-2 border-primary-100 bg-gradient-to-b from-primary-50/30 to-transparent p-1">
                {children}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Content Navigation - Sticky TOC */}
              {contentSections.length > 0 && (
                <div className="lg:sticky lg:top-20">
                  <ContentNavigation sections={contentSections} locale={locale} />
                </div>
              )}

              {/* Ad Space - CLS Protected */}
              <SidebarAd />

              {/* Related Calculators */}
              <RelatedCalculators
                calculatorId={calculator.id}
                currentCategory={calculator.category}
                locale={locale}
                maxItems={5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer - Top of page */}
      {content && content[locale].medicalDisclaimer && (
        <section className="border-t border-neutral-200 bg-neutral-50 py-6">
          <div className="container-custom">
            <MedicalDisclaimer content={content[locale].medicalDisclaimer!} locale={locale} />
          </div>
        </section>
      )}

      {/* SEO Content Section */}
      {content && (
        <section className="border-t border-neutral-200 bg-white">
          <div className="container-custom section-spacing">
            <article className="prose prose-neutral max-w-none">
              {/* What Is */}
              <div id="what-is" className="mb-12 scroll-mt-20">
                <h2 className="heading-3 mb-4">{t('whatIsIt')}</h2>
                <div className="text-body whitespace-pre-line">{content[locale].whatIs}</div>
              </div>

              {/* Formula Details */}
              {content[locale].formulaDetails && (
                <div id="formula-details" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">
                    {locale === 'en' ? 'Formula Details' : 'Formül Detayları'}
                  </h2>
                  <div className="text-body whitespace-pre-line rounded-lg bg-neutral-50 p-5 border border-neutral-200">
                    {content[locale].formulaDetails}
                  </div>
                </div>
              )}

              {/* How to Calculate */}
              <div id="how-to-calculate" className="mb-12 scroll-mt-20">
                <h2 className="heading-3 mb-4">{t('howToCalculate')}</h2>
                <div className="text-body whitespace-pre-line">{content[locale].howToCalculate}</div>
              </div>

              {/* BMI Categories Table */}
              {content[locale].categories && (
                <div id="categories" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-6">
                    {locale === 'en' ? 'Categories' : 'Kategoriler'}
                  </h2>
                  <BMICategoriesTable categories={content[locale].categories!} locale={locale} />
                </div>
              )}

              {/* Interpretation */}
              {content[locale].interpretation && (
                <div id="interpretation" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">{t('interpretation')}</h2>
                  <div className="text-body whitespace-pre-line">{content[locale].interpretation}</div>
                </div>
              )}

              {/* Limitations */}
              {content[locale].limitations && (
                <div id="limitations" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">
                    {locale === 'en' ? 'Limitations' : 'Sınırlamalar'}
                  </h2>
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
                    <div className="text-body whitespace-pre-line">{content[locale].limitations}</div>
                  </div>
                </div>
              )}

              {/* Health Benefits */}
              {content[locale].healthBenefits && (
                <div id="health-benefits" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">
                    {locale === 'en' ? 'Health Benefits' : 'Sağlık Faydaları'}
                  </h2>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-5">
                    <div className="text-body whitespace-pre-line">{content[locale].healthBenefits}</div>
                  </div>
                </div>
              )}

              {/* Improvement Tips */}
              {content[locale].improvementTips && (
                <div id="improvement-tips" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">
                    {locale === 'en' ? 'How to Improve' : 'Nasıl Geliştirilir'}
                  </h2>
                  <div className="text-body whitespace-pre-line">{content[locale].improvementTips}</div>
                </div>
              )}

              {/* Health Risks */}
              {content[locale].healthRisks && (
                <div id="health-risks" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">
                    {locale === 'en' ? 'Health Risks' : 'Sağlık Riskleri'}
                  </h2>
                  <div className="rounded-lg border border-red-200 bg-red-50 p-5">
                    <div className="text-body whitespace-pre-line">{content[locale].healthRisks}</div>
                  </div>
                </div>
              )}

              {/* Alternative Measures */}
              {content[locale].alternativeMeasures && (
                <div id="alternative-measures" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">
                    {locale === 'en'
                      ? 'Alternative Body Composition Measures'
                      : 'Alternatif Vücut Kompozisyonu Ölçümleri'}
                  </h2>
                  <div className="text-body whitespace-pre-line">{content[locale].alternativeMeasures}</div>
                </div>
              )}

              {/* Demographic Differences */}
              {content[locale].demographicDifferences && (
                <div id="demographic-differences" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">
                    {locale === 'en'
                      ? 'Demographic Differences'
                      : 'Demografik Farklılıklar'}
                  </h2>
                  <div className="text-body whitespace-pre-line">{content[locale].demographicDifferences}</div>
                </div>
              )}

              {/* Tips */}
              {content[locale].tips && content[locale].tips!.length > 0 && (
                <div id="tips" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">{t('tips')}</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {content[locale].tips!.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4">
                        <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                          {index + 1}
                        </span>
                        <span className="text-sm text-neutral-700 leading-relaxed">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs - Accordion style for better UX and SEO */}
              {content[locale].faqs && content[locale].faqs!.length > 0 && (
                <div id="faq" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-6">{t('faq')}</h2>
                  <div className="divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white">
                    {content[locale].faqs!.map((faq, index) => (
                      <details key={index} className="group" {...(index === 0 ? { open: true } : {})}>
                        <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 [&::-webkit-details-marker]:hidden">
                          <h3 className="text-base font-semibold">{faq.question}</h3>
                          <span className="flex-shrink-0 text-neutral-400 transition-transform group-open:rotate-180">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                        </summary>
                        <div className="px-5 pb-4 text-body">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* References */}
              {content[locale].references && (
                <div id="references" className="scroll-mt-20">
                  <ReferencesSection references={content[locale].references!} locale={locale} />
                </div>
              )}
            </article>
          </div>
        </section>
      )}
    </div>
  );
};

export default CalculatorLayout;
