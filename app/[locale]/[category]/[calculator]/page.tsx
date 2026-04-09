import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getCalculatorBySlug, getAllCalculators } from '@/lib/calculatorRegistry';
import { getCategorySlugByLocale } from '@/lib/categoryMapping';
import { getCategoryById } from '@/config/categories.config';
import { getDomainForLocale } from '@/lib/domain';
import type { CalculatorContent } from '@/types/calculator';
import {
  generateSEO,
  generateCalculatorSchema,
  generateFAQSchema,
  generateHowToSchema,
  generateMedicalWebPageSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  categoryToSpecialty,
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
import { bloodPressureContent } from '@/calculators/heart/blood-pressure-calculator/bloodPressureContent';
// New calculator content
import { oneRepMaxContent } from '@/calculators/fitness/one-rep-max/oneRepMaxContent';
import { runningPaceContent } from '@/calculators/fitness/running-pace/runningPaceContent';
import { sleepContent } from '@/calculators/sleep/sleep-calculator/sleepContent';
import { sleepCycleContent } from '@/calculators/sleep/sleep-cycle/sleepCycleContent';
import { a1cContent } from '@/calculators/diabetes/a1c-calculator/a1cContent';
import { bloodSugarContent } from '@/calculators/diabetes/blood-sugar-converter/bloodSugarContent';
import { gfrContent } from '@/calculators/medical/gfr-calculator/gfrContent';
import { creatinineContent } from '@/calculators/medical/creatinine-clearance/creatinineContent';
import { bsaContent } from '@/calculators/medical/bsa-calculator/bsaContent';
import { phq9Content } from '@/calculators/mental-health/phq9-calculator/phq9Content';
// Mental Health - GAD-7
import { gad7Content } from '@/calculators/mental-health/gad7-calculator/gad7Content';
// Men's Health
import { psaContent } from '@/calculators/mens-health/psa-calculator/psaContent';
// Children's Health
import { growthContent } from '@/calculators/childrens-health/growth-percentile/growthContent';
// Nutrition - Water Intake
import { waterIntakeContent } from '@/calculators/nutrition/water-intake-calculator/waterIntakeContent';
// Nutrition - Calorie Deficit
import { calorieDeficitContent } from '@/calculators/nutrition/calorie-deficit-calculator/calorieDeficitContent';
// Nutrition - Protein
import { proteinContent } from '@/calculators/nutrition/protein-calculator/proteinContent';
// Nutrition - Intermittent Fasting
import { fastingContent } from '@/calculators/nutrition/intermittent-fasting-calculator/fastingContent';
// Women's Health - Period
import { periodContent } from '@/calculators/womens-health/period-calculator/periodContent';
// Daily Life
import { ageContent } from '@/calculators/daily-life/age-calculator/ageContent';
import { loveContent } from '@/calculators/daily-life/love-calculator/loveContent';
import { petAgeContent } from '@/calculators/daily-life/pet-age/petAgeContent';
// Body Weight - Waist-Hip Ratio
import { waistHipRatioContent } from '@/calculators/body-weight/waist-hip-ratio/waistHipRatioContent';
// Substance - Blood Alcohol
import { bloodAlcoholContent } from '@/calculators/substance/blood-alcohol-calculator/bloodAlcoholContent';
// Substance - Caffeine
import { caffeineContent } from '@/calculators/substance/caffeine-calculator/caffeineContent';
// Pregnancy - Chinese Gender Predictor
import { chineseGenderContent } from '@/calculators/pregnancy/chinese-gender-predictor/chineseGenderContent';
// Body Weight - Biological Age
import { biologicalAgeContent } from '@/calculators/body-weight/biological-age/biologicalAgeContent';
// Medical - Life Expectancy
import { lifeExpectancyContent } from '@/calculators/medical/life-expectancy/lifeExpectancyContent';
// Fitness - VO2 Max
import { vo2MaxContent } from '@/calculators/fitness/vo2-max/vo2MaxContent';
// Body Weight - Lean Body Mass
import { leanBodyMassContent } from '@/calculators/body-weight/lean-body-mass/leanBodyMassContent';
// Nutrition - Keto
import { ketoContent } from '@/calculators/nutrition/keto-calculator/ketoContent';
// Pregnancy - Fetal Weight
import { fetalWeightContent } from '@/calculators/pregnancy/fetal-weight-calculator/fetalWeightContent';
// Body Weight - Body Type
import { bodyTypeContent } from '@/calculators/body-weight/body-type/bodyTypeContent';
// Pregnancy - Weight Gain
import { pregnancyWeightGainContent } from '@/calculators/pregnancy/pregnancy-weight-gain/pregnancyWeightGainContent';
// Fitness - Calories Burned
import { caloriesBurnedContent } from '@/calculators/fitness/calories-burned/caloriesBurnedContent';
// Mental Health - Stress Level
import { stressLevelContent } from '@/calculators/mental-health/stress-level-calculator/stressLevelContent';
// Body Weight - Waist-Height Ratio
import { waistHeightRatioContent } from '@/calculators/body-weight/waist-height-ratio/waistHeightRatioContent';
// Heart - Target Heart Rate
import { targetHeartRateContent } from '@/calculators/heart/target-heart-rate/targetHeartRateContent';
// Children's Health - Height Predictor
import { heightPredictorContent } from '@/calculators/childrens-health/height-predictor/heightPredictorContent';
// Nutrition - Weight Loss
import { weightLossContent } from '@/calculators/nutrition/weight-loss-calculator/weightLossContent';
// Substance - Smoking Cessation
import { smokingCessationContent } from '@/calculators/substance/smoking-cessation-calculator/smokingCessationContent';
// Fitness - Daily Step Goal
import { dailyStepGoalContent } from '@/calculators/fitness/daily-step-goal/dailyStepGoalContent';
// Body Weight - Body Water
import { bodyWaterContent } from '@/calculators/body-weight/body-water/bodyWaterContent';
// Daily Life - Blood Type
import { bloodTypeContent } from '@/calculators/daily-life/blood-type-calculator/bloodTypeContent';
// Daily Life - Healthy Lifestyle Score
import { healthyLifestyleScoreContent } from '@/calculators/daily-life/healthy-lifestyle-score/healthyLifestyleScoreContent';
// Body Weight - Ideal Body Measurements
import { idealBodyMeasurementsContent } from '@/calculators/body-weight/ideal-body-measurements/idealBodyMeasurementsContent';
// Sleep - Sleep Debt
import { sleepDebtContent } from '@/calculators/sleep/sleep-debt/sleepDebtContent';
// Nutrition - Weight Gain
import { weightGainContent } from '@/calculators/nutrition/weight-gain-calculator/weightGainContent';
// Pregnancy - Conception Date
import { conceptionDateContent } from '@/calculators/pregnancy/conception-date-calculator/conceptionDateContent';
// Daily Life - Eye Color
import { eyeColorContent } from '@/calculators/daily-life/eye-color-calculator/eyeColorContent';
// Substance - Alcohol Calorie
import { alcoholCalorieContent } from '@/calculators/substance/alcohol-calorie-calculator/alcoholCalorieContent';
// Nutrition - Sugar Intake
import { sugarIntakeContent } from '@/calculators/nutrition/sugar-intake-calculator/sugarIntakeContent';
// Daily Life - SPF Sunscreen
import { spfSunscreenContent } from '@/calculators/daily-life/spf-sunscreen-calculator/spfSunscreenContent';
// Daily Life - Biorhythm
import { biorhythmContent } from '@/calculators/daily-life/biorhythm-calculator/biorhythmContent';
// Daily Life - Face Shape
import { faceShapeContent } from '@/calculators/daily-life/face-shape-calculator/faceShapeContent';
// Heart - Cholesterol
import { cholesterolContent } from '@/calculators/heart/cholesterol-calculator/cholesterolContent';

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

  const alternateLocale = locale === 'en' ? 'tr' : 'en';
  const altCategory = getCategorySlugByLocale(calculator.category, alternateLocale as 'en' | 'tr');
  const altCalcSlug = calculator.slug[alternateLocale as 'en' | 'tr'];

  return generateSEO({
    title: calculator.title[locale as 'en' | 'tr'],
    description: calculator.description[locale as 'en' | 'tr'],
    keywords: calculator.keywords,
    locale: locale as 'en' | 'tr',
    path: `/${category}/${calcSlug}`,
    alternatePath: `/${altCategory}/${altCalcSlug}`,
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
    'pregnancy-week-calculator': pregnancyWeekContent,
    'chinese-gender-predictor': chineseGenderContent,
    'ovulation-calculator': ovulationContent,
    'period-calculator': periodContent,
    'ideal-weight-calculator': idealWeightContent,
    'body-fat-calculator': bodyFatContent,
    'macro-calculator': macroContent,
    'bmr-calculator': bmrContent,
    'food-calorie-calculator': foodCalorieContent,
    'water-intake-calculator': waterIntakeContent,
    'calorie-deficit-calculator': calorieDeficitContent,
    'protein-calculator': proteinContent,
    'intermittent-fasting-calculator': fastingContent,
    'heart-rate-zone-calculator': heartRateZoneContent,
    'blood-pressure-calculator': bloodPressureContent,
    // Fitness
    'one-rep-max-calculator': oneRepMaxContent,
    'running-pace-calculator': runningPaceContent,
    'vo2-max-calculator': vo2MaxContent,
    // Sleep
    'sleep-calculator': sleepContent,
    'sleep-cycle-calculator': sleepCycleContent,
    // Diabetes
    'a1c-calculator': a1cContent,
    'blood-sugar-converter': bloodSugarContent,
    // Medical
    'gfr-calculator': gfrContent,
    'creatinine-clearance-calculator': creatinineContent,
    'bsa-calculator': bsaContent,
    'life-expectancy-calculator': lifeExpectancyContent,
    // Mental Health
    'phq9-calculator': phq9Content,
    'gad7-calculator': gad7Content,
    // Men's Health
    'psa-calculator': psaContent,
    // Children's Health
    'growth-percentile-calculator': growthContent,
    // Daily Life
    'age-calculator': ageContent,
    'love-calculator': loveContent,
    'pet-age-calculator': petAgeContent,
    // Body Weight - Waist-Hip Ratio
    'waist-hip-ratio-calculator': waistHipRatioContent,
    // Substance
    'blood-alcohol-calculator': bloodAlcoholContent,
    'caffeine-calculator': caffeineContent,
    // Body Weight - Biological Age
    'biological-age-calculator': biologicalAgeContent,
    // Body Weight - Lean Body Mass
    'lean-body-mass-calculator': leanBodyMassContent,
    // Nutrition - Keto
    'keto-calculator': ketoContent,
    // Pregnancy - Fetal Weight
    'fetal-weight-calculator': fetalWeightContent,
    // Body Weight - Body Type
    'body-type-calculator': bodyTypeContent,
    // Pregnancy - Weight Gain
    'pregnancy-weight-gain-calculator': pregnancyWeightGainContent,
    // Fitness - Calories Burned
    'calories-burned-calculator': caloriesBurnedContent,
    // Mental Health - Stress Level
    'stress-level-calculator': stressLevelContent,
    // Body Weight - Waist-Height Ratio
    'waist-height-ratio-calculator': waistHeightRatioContent,
    // Heart - Target Heart Rate
    'target-heart-rate-calculator': targetHeartRateContent,
    // Children's Health - Height Predictor
    'height-predictor-calculator': heightPredictorContent,
    // Nutrition - Weight Loss
    'weight-loss-calculator': weightLossContent,
    // Substance - Smoking Cessation
    'smoking-cessation-calculator': smokingCessationContent,
    // Fitness - Daily Step Goal
    'daily-step-goal-calculator': dailyStepGoalContent,
    // Body Weight - Body Water
    'body-water-calculator': bodyWaterContent,
    // Daily Life - Blood Type
    'blood-type-calculator': bloodTypeContent,
    // Daily Life - Healthy Lifestyle Score
    'healthy-lifestyle-score-calculator': healthyLifestyleScoreContent,
    // Body Weight - Ideal Body Measurements
    'ideal-body-measurements-calculator': idealBodyMeasurementsContent,
    // Sleep - Sleep Debt
    'sleep-debt-calculator': sleepDebtContent,
    // Nutrition - Weight Gain
    'weight-gain-calculator': weightGainContent,
    // Pregnancy - Conception Date
    'conception-date-calculator': conceptionDateContent,
    // Daily Life - Eye Color
    'eye-color-calculator': eyeColorContent,
    // Substance - Alcohol Calorie
    'alcohol-calorie-calculator': alcoholCalorieContent,
    // Nutrition - Sugar Intake
    'sugar-intake-calculator': sugarIntakeContent,
    // Daily Life - SPF Sunscreen
    'spf-sunscreen-calculator': spfSunscreenContent,
    // Daily Life - Biorhythm
    'biorhythm-calculator': biorhythmContent,
    // Daily Life - Face Shape
    'face-shape-calculator': faceShapeContent,
    // Heart - Cholesterol
    'cholesterol-calculator': cholesterolContent,
  };

  const content = contentMap[calculator.id];

  const CalculatorComponent = calculator.component;

  const pageUrl = `${getDomainForLocale(locale as 'en' | 'tr')}/${category}/${calcSlug}`;

  return (
    <>
      <CalculatorLayout calculator={calculator} content={content} locale={locale as 'en' | 'tr'} shareUrl={pageUrl}>
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
              locale: locale as 'en' | 'tr',
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
              specialty: categoryToSpecialty[calculator.category] || 'General Health',
              locale: locale as 'en' | 'tr',
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
              locale: locale as 'en' | 'tr',
            })
          ),
        }}
      />

      {/* Dynamic HowTo Schema - generated for ALL calculators that have content */}
      {content && content[locale as 'en' | 'tr'].howToCalculate && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateHowToSchema({
                name: locale === 'en'
                  ? `How to Use the ${calculator.title.en.split(' - ')[0]}`
                  : `${calculator.title.tr.split(' - ')[0]} Nasıl Kullanılır`,
                description: calculator.description[locale as 'en' | 'tr'],
                steps: [
                  {
                    name: locale === 'en' ? 'Enter your information' : 'Bilgilerinizi girin',
                    text: locale === 'en'
                      ? `Open the ${calculator.title.en.split(' - ')[0]} and enter the required values in the input fields.`
                      : `${calculator.title.tr.split(' - ')[0]} aracını açın ve gerekli değerleri giriş alanlarına girin.`,
                  },
                  {
                    name: locale === 'en' ? 'Select your preferences' : 'Tercihlerinizi seçin',
                    text: locale === 'en'
                      ? 'Choose your preferred unit system and any additional options available in the calculator.'
                      : 'Tercih ettiğiniz birim sistemini ve hesaplayıcıda mevcut olan ek seçenekleri belirleyin.',
                  },
                  {
                    name: locale === 'en' ? 'Calculate results' : 'Sonuçları hesaplayın',
                    text: locale === 'en'
                      ? 'Click the Calculate button to get your personalized results instantly.'
                      : 'Kişiselleştirilmiş sonuçlarınızı anında almak için Hesapla düğmesine tıklayın.',
                  },
                  {
                    name: locale === 'en' ? 'Interpret and apply' : 'Yorumlayın ve uygulayın',
                    text: locale === 'en'
                      ? 'Review your results along with the detailed interpretation, health recommendations, and actionable insights provided below the calculator.'
                      : 'Sonuçlarınızı, hesaplayıcının altında sunulan detaylı yorumlar, sağlık önerileri ve uygulanabilir bilgilerle birlikte inceleyin.',
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
                name: locale === 'en' ? 'Home' : 'Ana Sayfa',
                url: getDomainForLocale(locale as 'en' | 'tr'),
              },
              {
                name: getCategoryById(calculator.category)?.name[locale as 'en' | 'tr'] || category,
                url: `${getDomainForLocale(locale as 'en' | 'tr')}/${category}`,
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
