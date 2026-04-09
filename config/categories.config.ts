import { Category } from '@/types/category';

// Note: calculatorCount is now computed dynamically from calculatorRegistry
// Do not hardcode it here - it will be populated automatically
export const categories: Category[] = [
  {
    id: 'body-weight',
    slug: {
      en: 'body-weight',
      tr: 'vucut-kilo',
    },
    name: {
      en: 'Body & Weight',
      tr: 'Vücut & Kilo',
    },
    description: {
      en: 'Free BMI, ideal weight, body fat percentage, lean body mass and waist-hip ratio calculators. Track your body composition with science-backed tools.',
      tr: 'Ücretsiz VKİ, ideal kilo, vücut yağ oranı, yağsız vücut kütlesi ve bel-kalça oranı hesaplayıcıları. Bilimsel araçlarla vücut kompozisyonunuzu takip edin.',
    },
    icon: 'Scale',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'fitness',
    slug: {
      en: 'fitness',
      tr: 'fitness',
    },
    name: {
      en: 'Fitness & Exercise',
      tr: 'Fitness & Egzersiz',
    },
    description: {
      en: 'Calculate calories burned, one-rep max, running pace, VO2 max and daily step goals. Free fitness calculators for your workout planning.',
      tr: 'Yakılan kalori, bir tekrar maksimum, koşu temposu, VO2 maks ve günlük adım hedefi hesaplayın. Antrenman planlamanız için ücretsiz fitness hesaplayıcıları.',
    },
    icon: 'Dumbbell',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 'nutrition',
    slug: {
      en: 'nutrition',
      tr: 'beslenme',
    },
    name: {
      en: 'Nutrition & Diet',
      tr: 'Beslenme & Diyet',
    },
    description: {
      en: 'Free calorie, macro, protein, TDEE and BMR calculators. Plan your meals, track calorie deficit and reach your nutrition goals with accurate tools.',
      tr: 'Ücretsiz kalori, makro, protein, TDEE ve BMR hesaplayıcıları. Öğünlerinizi planlayın, kalori açığınızı takip edin ve beslenme hedeflerinize ulaşın.',
    },
    icon: 'Apple',
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 'pregnancy',
    slug: {
      en: 'pregnancy',
      tr: 'hamilelik',
    },
    name: {
      en: 'Pregnancy & Birth',
      tr: 'Hamilelik & Doğum',
    },
    description: {
      en: 'Calculate your due date, track pregnancy week by week, estimate fetal weight and predict baby gender. Free pregnancy calculators for expecting mothers.',
      tr: 'Tahmini doğum tarihinizi hesaplayın, hamilelik haftanızı takip edin, bebek ağırlığını tahmin edin. Anne adayları için ücretsiz hamilelik hesaplayıcıları.',
    },
    icon: 'Baby',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 'womens-health',
    slug: {
      en: 'womens-health',
      tr: 'kadin-sagligi',
    },
    name: {
      en: "Women's Health",
      tr: 'Kadın Sağlığı',
    },
    description: {
      en: 'Track your menstrual cycle, calculate ovulation days and monitor fertility windows. Free tools for hormonal health and reproductive planning.',
      tr: 'Adet döngünüzü takip edin, yumurtlama günlerinizi hesaplayın ve doğurganlık pencerenizi izleyin. Hormonal sağlık için ücretsiz araçlar.',
    },
    icon: 'Heart',
    color: 'purple',
    gradient: 'from-purple-500 to-fuchsia-500',
  },
  {
    id: 'mens-health',
    slug: {
      en: 'mens-health',
      tr: 'erkek-sagligi',
    },
    name: {
      en: "Men's Health",
      tr: 'Erkek Sağlığı',
    },
    description: {
      en: 'Free PSA risk calculator and men\'s health screening tools. Monitor prostate health indicators and key fitness metrics with science-backed calculators.',
      tr: 'Ücretsiz PSA risk hesaplayıcısı ve erkek sağlığı tarama araçları. Prostat sağlığı göstergelerini ve fitness metriklerini bilimsel hesaplayıcılarla izleyin.',
    },
    icon: 'ActivitySquare',
    color: 'indigo',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'heart',
    slug: {
      en: 'heart',
      tr: 'kalp',
    },
    name: {
      en: 'Heart & Cardiovascular',
      tr: 'Kalp & Damar',
    },
    description: {
      en: 'Calculate target heart rate zones, check blood pressure ranges and assess cholesterol levels. Free cardiovascular health calculators for heart monitoring.',
      tr: 'Hedef kalp atış hızı bölgelerini hesaplayın, tansiyon aralıklarını kontrol edin ve kolesterol seviyelerini değerlendirin. Ücretsiz kardiyovasküler sağlık hesaplayıcıları.',
    },
    icon: 'HeartPulse',
    color: 'red',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    id: 'diabetes',
    slug: {
      en: 'diabetes',
      tr: 'diyabet',
    },
    name: {
      en: 'Diabetes & Blood Sugar',
      tr: 'Diyabet & Kan Şekeri',
    },
    description: {
      en: 'Convert HbA1c to average blood sugar, track glucose levels and manage diabetes with free online calculators. Instant, accurate results.',
      tr: 'HbA1c\'yi ortalama kan şekerine çevirin, glikoz seviyelerini takip edin ve ücretsiz online hesaplayıcılarla diyabetinizi yönetin. Anında doğru sonuçlar.',
    },
    icon: 'Droplet',
    color: 'cyan',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    id: 'medical',
    slug: {
      en: 'medical',
      tr: 'tibbi-hesaplamalar',
    },
    name: {
      en: 'Medical Calculations',
      tr: 'Tıbbi Hesaplamalar',
    },
    description: {
      en: 'Calculate GFR, creatinine clearance, body surface area and life expectancy. Free clinical calculators based on validated medical formulas.',
      tr: 'GFR, kreatinin klirensi, vücut yüzey alanı ve yaşam beklentisi hesaplayın. Doğrulanmış tıbbi formüllere dayanan ücretsiz klinik hesaplayıcılar.',
    },
    icon: 'Stethoscope',
    color: 'teal',
    gradient: 'from-teal-500 to-green-500',
  },
  {
    id: 'mental-health',
    slug: {
      en: 'mental-health',
      tr: 'ruh-sagligi',
    },
    name: {
      en: 'Mental Health',
      tr: 'Ruh Sağlığı',
    },
    description: {
      en: 'Screen for depression (PHQ-9), anxiety (GAD-7) and measure stress levels. Free, confidential mental health assessment tools with instant results.',
      tr: 'Depresyon (PHQ-9), anksiyete (GAD-7) taraması yapın ve stres seviyenizi ölçün. Anında sonuç veren ücretsiz ve gizli ruh sağlığı değerlendirme araçları.',
    },
    icon: 'Brain',
    color: 'violet',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: 'sleep',
    slug: {
      en: 'sleep',
      tr: 'uyku',
    },
    name: {
      en: 'Sleep & Rest',
      tr: 'Uyku & Dinlenme',
    },
    description: {
      en: 'Find your ideal bedtime, calculate sleep cycles, track sleep debt and optimize rest quality. Free sleep calculators for better sleep hygiene.',
      tr: 'İdeal yatma saatinizi bulun, uyku döngülerinizi hesaplayın, uyku borcunuzu takip edin. Daha iyi uyku hijyeni için ücretsiz uyku hesaplayıcıları.',
    },
    icon: 'Moon',
    color: 'slate',
    gradient: 'from-slate-500 to-gray-500',
  },
  {
    id: 'childrens-health',
    slug: {
      en: 'childrens-health',
      tr: 'cocuk-sagligi',
    },
    name: {
      en: "Children's Health",
      tr: 'Çocuk Sağlığı',
    },
    description: {
      en: 'Track child growth percentiles and predict adult height using WHO-standard charts. Free pediatric health calculators for parents and caregivers.',
      tr: 'WHO standart tablolarıyla çocuk büyüme persantillerini takip edin ve yetişkin boyunu tahmin edin. Ebeveynler için ücretsiz pediatrik sağlık hesaplayıcıları.',
    },
    icon: 'Sparkles',
    color: 'yellow',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'daily-life',
    slug: {
      en: 'daily-life',
      tr: 'gunluk-yasam',
    },
    name: {
      en: 'Daily Life',
      tr: 'Günlük Yaşam',
    },
    description: {
      en: 'Calculate your exact age, find your blood type compatibility, check pet age in human years and discover fun health insights. Free everyday tools.',
      tr: 'Tam yaşınızı hesaplayın, kan grubu uyumunuzu bulun, evcil hayvan yaşını öğrenin ve eğlenceli sağlık bilgileri keşfedin. Ücretsiz günlük yaşam araçları.',
    },
    icon: 'Calendar',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'substance',
    slug: {
      en: 'substance',
      tr: 'madde',
    },
    name: {
      en: 'Substance & Alcohol',
      tr: 'Madde & Alkol',
    },
    description: {
      en: 'Calculate blood alcohol content (BAC), track caffeine intake, count alcohol calories and plan smoking cessation. Free substance awareness tools.',
      tr: 'Kan alkol seviyesini (BAC) hesaplayın, kafein alımını takip edin, alkol kalorilerini sayın ve sigarayı bırakma planı yapın. Ücretsiz madde farkındalık araçları.',
    },
    icon: 'Wine',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string, locale: 'en' | 'tr'): Category | undefined {
  return categories.find((cat) => cat.slug[locale] === slug);
}
