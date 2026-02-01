import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getCalculatorBySlug, getAllCalculators } from '@/lib/calculatorRegistry';
import { getCategorySlugByLocale } from '@/lib/categoryMapping';
import type { CalculatorContent } from '@/types/calculator';
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
import { tdeeContent } from '@/calculators/nutrition/tdee-calculator/tdeeContent';
import { dueDateContent } from '@/calculators/pregnancy/due-date-calculator/dueDateContent';
import { ovulationContent } from '@/calculators/womens-health/ovulation-calculator/ovulationContent';
import { idealWeightContent } from '@/calculators/body-weight/ideal-weight/idealWeightContent';
import { bodyFatContent } from '@/calculators/body-weight/body-fat/bodyFatContent';
import { macroContent } from '@/calculators/nutrition/macro-calculator/macroContent';
import { bmrContent } from '@/calculators/nutrition/bmr-calculator/bmrContent';
import { foodCalorieContent } from '@/calculators/nutrition/food-calorie-calculator/foodCalorieContent';
import { pregnancyWeekContent } from '@/calculators/pregnancy/pregnancy-week-calculator/pregnancyWeekContent';
import { heartRateZoneContent } from '@/calculators/heart/heart-rate-zone/heartRateZoneContent';
// New calculator content
import { oneRepMaxContent } from '@/calculators/fitness/one-rep-max/oneRepMaxContent';
import { runningPaceContent } from '@/calculators/fitness/running-pace/runningPaceContent';
import { sleepContent } from '@/calculators/sleep/sleep-calculator/sleepContent';
import { a1cContent } from '@/calculators/diabetes/a1c-calculator/a1cContent';
import { bloodSugarContent } from '@/calculators/diabetes/blood-sugar-converter/bloodSugarContent';
import { gfrContent } from '@/calculators/medical/gfr-calculator/gfrContent';
import { creatinineContent } from '@/calculators/medical/creatinine-clearance/creatinineContent';
import { phq9Content } from '@/calculators/mental-health/phq9-calculator/phq9Content';
// Men's Health
import { psaContent } from '@/calculators/mens-health/psa-calculator/psaContent';
// Children's Health
import { growthContent } from '@/calculators/childrens-health/growth-percentile/growthContent';

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
    // English version with English category slug
    paths.push({
      locale: 'en',
      category: getCategorySlugByLocale(calc.category, 'en'),
      calculator: calc.slug.en,
    });
    // Turkish version with Turkish category slug
    paths.push({
      locale: 'tr',
      category: getCategorySlugByLocale(calc.category, 'tr'),
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
  const contentMap: Record<string, CalculatorContent> = {
    'bmi-calculator': bmiContent,
    'calorie-calculator': calorieContent,
    'tdee-calculator': tdeeContent,
    'due-date-calculator': dueDateContent,
    'ovulation-calculator': ovulationContent,
    'ideal-weight-calculator': idealWeightContent,
    'body-fat-calculator': bodyFatContent,
    'macro-calculator': macroContent,
    'bmr-calculator': bmrContent,
    'food-calorie-calculator': foodCalorieContent,
    'pregnancy-week-calculator': pregnancyWeekContent,
    'heart-rate-zone-calculator': heartRateZoneContent,
    // Fitness
    'one-rep-max-calculator': oneRepMaxContent,
    'running-pace-calculator': runningPaceContent,
    // Sleep
    'sleep-calculator': sleepContent,
    // Diabetes
    'a1c-calculator': a1cContent,
    'blood-sugar-converter': bloodSugarContent,
    // Medical
    'gfr-calculator': gfrContent,
    'creatinine-clearance-calculator': creatinineContent,
    // Mental Health
    'phq9-calculator': phq9Content,
    // Men's Health
    'psa-calculator': psaContent,
    // Children's Health
    'growth-percentile-calculator': growthContent,
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

      {calculator.id === 'tdee-calculator' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateHowToSchema({
                name:
                  locale === 'en'
                    ? 'How to Calculate TDEE'
                    : 'TDEE Nasıl Hesaplanır',
                description:
                  locale === 'en'
                    ? 'Step-by-step guide to calculate your Total Daily Energy Expenditure (TDEE)'
                    : 'Toplam Günlük Enerji Harcamanızı (TDEE) hesaplamak için adım adım kılavuz',
                steps: [
                  {
                    name: locale === 'en' ? 'Enter personal information' : 'Kişisel bilgilerinizi girin',
                    text:
                      locale === 'en'
                        ? 'Input your age, gender, height, and weight. Select your preferred unit system (metric or imperial).'
                        : 'Yaş, cinsiyet, boy ve kilonuzu girin. Tercih ettiğiniz birim sistemini (metrik veya İngiliz) seçin.',
                  },
                  {
                    name: locale === 'en' ? 'Select activity level' : 'Aktivite seviyenizi seçin',
                    text:
                      locale === 'en'
                        ? 'Choose your activity level from sedentary to extremely active based on your weekly exercise routine and daily movement.'
                        : 'Haftalık egzersiz rutininize ve günlük hareketinize göre hareketsizden aşırı aktif\'e kadar aktivite seviyenizi seçin.',
                  },
                  {
                    name: locale === 'en' ? 'Calculate BMR and TDEE' : 'BMR ve TDEE hesaplayın',
                    text:
                      locale === 'en'
                        ? 'Click calculate to get your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) using the Mifflin-St Jeor equation.'
                        : 'Mifflin-St Jeor denklemini kullanarak Bazal Metabolizma Hızınızı (BMR) ve Toplam Günlük Enerji Harcamanızı (TDEE) almak için hesapla\'ya tıklayın.',
                  },
                  {
                    name: locale === 'en' ? 'Choose your goal' : 'Hedefinizi seçin',
                    text:
                      locale === 'en'
                        ? 'Select your goal (weight loss, maintenance, or muscle gain) to get personalized daily calorie recommendations and macronutrient targets.'
                        : 'Kişiselleştirilmiş günlük kalori önerileri ve makrobesin hedefleri almak için hedefinizi (kilo verme, koruma veya kas kazanımı) seçin.',
                  },
                ],
                totalTime: 'PT3M',
              })
            ),
          }}
        />
      )}

      {calculator.id === 'due-date-calculator' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateHowToSchema({
                name:
                  locale === 'en'
                    ? 'How to Calculate Your Due Date'
                    : 'Doğum Tarihinizi Nasıl Hesaplarsınız',
                description:
                  locale === 'en'
                    ? 'Step-by-step guide to calculate your pregnancy due date'
                    : 'Hamilelik doğum tarihinizi hesaplamak için adım adım kılavuz',
                steps: [
                  {
                    name: locale === 'en' ? 'Choose calculation method' : 'Hesaplama yöntemini seçin',
                    text:
                      locale === 'en'
                        ? 'Select the method you want to use: Last Menstrual Period (LMP), Conception Date, Ultrasound Results, or IVF Transfer Date.'
                        : 'Kullanmak istediğiniz yöntemi seçin: Son Adet Tarihi (SAT), Döllendirme Tarihi, Ultrason Sonuçları veya Tüp Bebek Transfer Tarihi.',
                  },
                  {
                    name: locale === 'en' ? 'Enter relevant dates' : 'İlgili tarihleri girin',
                    text:
                      locale === 'en'
                        ? 'Input the required date(s) based on your selected method. For LMP, also enter your cycle length if different from 28 days.'
                        : 'Seçtiğiniz yönteme göre gerekli tarihleri girin. SAT için, döngü uzunluğunuz 28 günden farklıysa onu da girin.',
                  },
                  {
                    name: locale === 'en' ? 'Calculate due date' : 'Doğum tarihini hesaplayın',
                    text:
                      locale === 'en'
                        ? 'Click calculate to get your estimated due date, current pregnancy week, conception date, and trimester information.'
                        : 'Tahmini doğum tarihinizi, mevcut hamilelik haftanızı, döllendirme tarihinizi ve trimester bilgilerinizi almak için hesapla\'ya tıklayın.',
                  },
                  {
                    name: locale === 'en' ? 'Review milestones' : 'Kilometre taşlarını inceleyin',
                    text:
                      locale === 'en'
                        ? 'Check your pregnancy milestones and trimester progress. Track which developmental stages you\'ve reached and what to expect next.'
                        : 'Hamilelik kilometre taşlarınızı ve trimester ilerlemenizi kontrol edin. Hangi gelişim aşamalarına ulaştığınızı ve bundan sonra neleri beklemeniz gerektiğini takip edin.',
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
