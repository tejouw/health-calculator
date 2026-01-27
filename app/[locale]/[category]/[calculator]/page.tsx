import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getCalculatorBySlug, getAllCalculators } from '@/lib/calculatorRegistry';
import {
  generateSEO,
  generateCalculatorSchema,
  generateFAQSchema,
  generateHowToSchema,
  generateMedicalWebPageSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';
import { bmiContent } from '@/calculators/body-weight/bmi/bmiContent';
import { calorieContent } from '@/calculators/nutrition/calorie-calculator/calorieContent';

interface CalculatorPageProps {
  params: Promise<{
    locale: string;
    category: string;
    calculator: string;
  }>;
}

// Generate static paths for all calculators
export async function generateStaticParams() {
  const calculators = getAllCalculators();
  const paths: Array<{ locale: string; category: string; calculator: string }> = [];

  for (const calc of calculators) {
    paths.push({
      locale: 'en',
      category: calc.category,
      calculator: calc.slug.en,
    });
    paths.push({
      locale: 'tr',
      category: calc.category,
      calculator: calc.slug.tr,
    });
  }

  return paths;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CalculatorPageProps) {
  const { locale, category, calculator: calcSlug } = await params;
  const calculator = getCalculatorBySlug(calcSlug, locale as 'en' | 'tr');

  if (!calculator) {
    return {};
  }

  return generateSEO({
    title: calculator.title[locale as 'en' | 'tr'],
    description: calculator.description[locale as 'en' | 'tr'],
    keywords: calculator.keywords,
    locale: locale as 'en' | 'tr',
    path: `/${category}/${calcSlug}`,
  });
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { locale, category, calculator: calcSlug } = await params;
  setRequestLocale(locale);

  const calculator = getCalculatorBySlug(calcSlug, locale as 'en' | 'tr');

  if (!calculator) {
    notFound();
  }

  // Get content based on calculator ID
  const contentMap: Record<string, any> = {
    'bmi-calculator': bmiContent,
    'calorie-calculator': calorieContent,
  };

  const content = contentMap[calculator.id];

  const CalculatorComponent = calculator.component;

  const pageUrl = `https://healthcalculator.com/${locale}/${category}/${calcSlug}`;

  return (
    <>
      <CalculatorLayout calculator={calculator} content={content} locale={locale as 'en' | 'tr'}>
        <CalculatorComponent locale={locale as 'en' | 'tr'} />
      </CalculatorLayout>

      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateCalculatorSchema({
              name: calculator.title[locale as 'en' | 'tr'],
              description: calculator.description[locale as 'en' | 'tr'],
              url: pageUrl,
            })
          ),
        }}
      />

      {/* MedicalWebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateMedicalWebPageSchema({
              name: calculator.title[locale as 'en' | 'tr'],
              description: calculator.description[locale as 'en' | 'tr'],
              url: pageUrl,
              specialty: 'Body Weight Management',
            })
          ),
        }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              headline: calculator.title[locale as 'en' | 'tr'],
              description: calculator.description[locale as 'en' | 'tr'],
              url: pageUrl,
            })
          ),
        }}
      />

      {/* HowTo Schema */}
      {calculator.id === 'bmi-calculator' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateHowToSchema({
                name:
                  locale === 'en'
                    ? 'How to Calculate BMI'
                    : 'VKİ Nasıl Hesaplanır',
                description:
                  locale === 'en'
                    ? 'Step-by-step guide to calculate your Body Mass Index (BMI)'
                    : 'Vücut Kitle İndeksinizi (VKİ) hesaplamak için adım adım kılavuz',
                steps: [
                  {
                    name: locale === 'en' ? 'Measure your height' : 'Boyunuzu ölçün',
                    text:
                      locale === 'en'
                        ? 'Measure your height in centimeters or inches accurately.'
                        : 'Boyunuzu santimetre veya inç cinsinden doğru şekilde ölçün.',
                  },
                  {
                    name: locale === 'en' ? 'Measure your weight' : 'Kilonuzu ölçün',
                    text:
                      locale === 'en'
                        ? 'Measure your weight in kilograms or pounds using a reliable scale.'
                        : 'Güvenilir bir terazi kullanarak kilonuzu kilogram veya pound cinsinden ölçün.',
                  },
                  {
                    name:
                      locale === 'en'
                        ? 'Enter values into calculator'
                        : 'Değerleri hesaplayıcıya girin',
                    text:
                      locale === 'en'
                        ? 'Input your height and weight into the BMI calculator and select your preferred unit system.'
                        : 'Boy ve kilonuzu VKİ hesaplayıcısına girin ve tercih ettiğiniz birim sistemini seçin.',
                  },
                  {
                    name:
                      locale === 'en'
                        ? 'Calculate and interpret results'
                        : 'Hesaplayın ve sonuçları yorumlayın',
                    text:
                      locale === 'en'
                        ? 'Click calculate to get your BMI value and see which category you fall into (underweight, normal, overweight, or obese).'
                        : 'VKİ değerinizi almak ve hangi kategoriye düştüğünüzü görmek için hesapla\'ya tıklayın (zayıf, normal, fazla kilolu veya obez).',
                  },
                ],
                totalTime: 'PT2M',
              })
            ),
          }}
        />
      )}

      {/* FAQ Schema */}
      {content && content[locale as 'en' | 'tr'].faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(content[locale as 'en' | 'tr'].faqs!)),
          }}
        />
      )}

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              {
                name: 'Home',
                url: `https://healthcalculator.com/${locale}`,
              },
              {
                name: category
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' '),
                url: `https://healthcalculator.com/${locale}/${category}`,
              },
              {
                name: calculator.title[locale as 'en' | 'tr'],
                url: pageUrl,
              },
            ])
          ),
        }}
      />
    </>
  );
}
