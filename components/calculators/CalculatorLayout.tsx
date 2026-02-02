'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { CalculatorMeta, CalculatorContent } from '@/types/calculator';
import { Breadcrumbs } from '@/components/layout';
import { Card } from '@/components/ui';
import { getCategoryById } from '@/config/categories.config';
import { usePageViewTracking } from '@/hooks/usePageViewTracking';

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
  children: React.ReactNode;
}

const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({
  calculator,
  content,
  locale,
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
        content[locale].categories && { id: 'categories', title: locale === 'en' ? 'BMI Categories' : 'VKİ Kategorileri' },
        content[locale].interpretation && { id: 'interpretation', title: t('interpretation') },
        content[locale].limitations && { id: 'limitations', title: locale === 'en' ? 'Limitations' : 'Sınırlamalar' },
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
            </div>
            <ShareButtons
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
            <div className="lg:col-span-2">{children}</div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Content Navigation - Sticky TOC */}
              {contentSections.length > 0 && (
                <ContentNavigation sections={contentSections} locale={locale} />
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
            <div className="prose prose-neutral max-w-none">
              {/* What Is */}
              <div id="what-is" className="mb-12 scroll-mt-20">
                <h2 className="heading-3 mb-4">{t('whatIsIt')}</h2>
                <p className="text-body">{content[locale].whatIs}</p>
              </div>

              {/* Formula Details */}
              {content[locale].formulaDetails && (
                <div id="formula-details" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">
                    {locale === 'en' ? 'Formula Details' : 'Formül Detayları'}
                  </h2>
                  <p className="text-body">{content[locale].formulaDetails}</p>
                </div>
              )}

              {/* How to Calculate */}
              <div id="how-to-calculate" className="mb-12 scroll-mt-20">
                <h2 className="heading-3 mb-4">{t('howToCalculate')}</h2>
                <p className="text-body">{content[locale].howToCalculate}</p>
              </div>

              {/* BMI Categories Table */}
              {content[locale].categories && (
                <div id="categories" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-6">
                    {locale === 'en' ? 'BMI Categories' : 'VKİ Kategorileri'}
                  </h2>
                  <BMICategoriesTable categories={content[locale].categories!} locale={locale} />
                </div>
              )}

              {/* Interpretation */}
              {content[locale].interpretation && (
                <div id="interpretation" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">{t('interpretation')}</h2>
                  <p className="text-body">{content[locale].interpretation}</p>
                </div>
              )}

              {/* Limitations */}
              {content[locale].limitations && (
                <div id="limitations" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">
                    {locale === 'en' ? 'Limitations of BMI' : 'VKİ\'nin Sınırlamaları'}
                  </h2>
                  <p className="text-body">{content[locale].limitations}</p>
                </div>
              )}

              {/* Health Risks */}
              {content[locale].healthRisks && (
                <div id="health-risks" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">
                    {locale === 'en' ? 'Health Risks by BMI' : 'VKİ\'ye Göre Sağlık Riskleri'}
                  </h2>
                  <p className="text-body">{content[locale].healthRisks}</p>
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
                  <p className="text-body">{content[locale].alternativeMeasures}</p>
                </div>
              )}

              {/* Demographic Differences */}
              {content[locale].demographicDifferences && (
                <div id="demographic-differences" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">
                    {locale === 'en'
                      ? 'BMI Across Different Populations'
                      : 'Farklı Popülasyonlarda VKİ'}
                  </h2>
                  <p className="text-body">{content[locale].demographicDifferences}</p>
                </div>
              )}

              {/* Tips */}
              {content[locale].tips && content[locale].tips!.length > 0 && (
                <div id="tips" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-4">{t('tips')}</h2>
                  <ul className="list-disc space-y-3 pl-6">
                    {content[locale].tips!.map((tip, index) => (
                      <li key={index} className="text-body">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQs */}
              {content[locale].faqs && content[locale].faqs!.length > 0 && (
                <div id="faq" className="mb-12 scroll-mt-20">
                  <h2 className="heading-3 mb-6">{t('faq')}</h2>
                  <div className="space-y-6">
                    {content[locale].faqs!.map((faq, index) => (
                      <Card key={index} variant="bordered">
                        <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                          {faq.question}
                        </h3>
                        <p className="text-body">{faq.answer}</p>
                      </Card>
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
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CalculatorLayout;
