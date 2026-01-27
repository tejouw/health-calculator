import { Category } from '@/types/category';

export const categories: Category[] = [
  {
    id: 'body-weight',
    name: {
      en: 'Body & Weight',
      tr: 'Vücut & Kilo',
    },
    description: {
      en: 'BMI, ideal weight, body fat percentage and more',
      tr: 'VKİ, ideal kilo, vücut yağ oranı ve daha fazlası',
    },
    icon: 'Scale',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    calculatorCount: 0,
  },
  {
    id: 'fitness',
    name: {
      en: 'Fitness & Exercise',
      tr: 'Fitness & Egzersiz',
    },
    description: {
      en: 'Workout planning, calorie burn, target heart rate',
      tr: 'Egzersiz planlaması, kalori yakımı, hedef kalp atışı',
    },
    icon: 'Dumbbell',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    calculatorCount: 0,
  },
  {
    id: 'nutrition',
    name: {
      en: 'Nutrition & Diet',
      tr: 'Beslenme & Diyet',
    },
    description: {
      en: 'Calorie needs, macro calculator, meal planning',
      tr: 'Kalori ihtiyacı, makro hesaplama, öğün planlaması',
    },
    icon: 'Apple',
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500',
    calculatorCount: 0,
  },
  {
    id: 'pregnancy',
    name: {
      en: 'Pregnancy & Birth',
      tr: 'Hamilelik & Doğum',
    },
    description: {
      en: 'Due date, pregnancy week, ovulation calculator',
      tr: 'Tahmini doğum tarihi, hamilelik haftası, yumurtlama',
    },
    icon: 'Baby',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-500',
    calculatorCount: 0,
  },
  {
    id: 'womens-health',
    name: {
      en: "Women's Health",
      tr: 'Kadın Sağlığı',
    },
    description: {
      en: 'Menstrual cycle, fertility, hormonal health',
      tr: 'Adet döngüsü, doğurganlık, hormonal sağlık',
    },
    icon: 'Heart',
    color: 'purple',
    gradient: 'from-purple-500 to-fuchsia-500',
    calculatorCount: 0,
  },
  {
    id: 'mens-health',
    name: {
      en: "Men's Health",
      tr: 'Erkek Sağlığı',
    },
    description: {
      en: 'Testosterone, fitness metrics, health indicators',
      tr: 'Testosteron, fitness metrikleri, sağlık göstergeleri',
    },
    icon: 'ActivitySquare',
    color: 'indigo',
    gradient: 'from-indigo-500 to-blue-500',
    calculatorCount: 0,
  },
  {
    id: 'heart',
    name: {
      en: 'Heart & Cardiovascular',
      tr: 'Kalp & Damar',
    },
    description: {
      en: 'Heart rate, blood pressure, cardiovascular risk',
      tr: 'Kalp atışı, tansiyon, kardiyovasküler risk',
    },
    icon: 'HeartPulse',
    color: 'red',
    gradient: 'from-red-500 to-pink-500',
    calculatorCount: 0,
  },
  {
    id: 'diabetes',
    name: {
      en: 'Diabetes & Blood Sugar',
      tr: 'Diyabet & Kan Şekeri',
    },
    description: {
      en: 'Blood glucose, HbA1c, insulin calculator',
      tr: 'Kan şekeri, HbA1c, insülin hesaplama',
    },
    icon: 'Droplet',
    color: 'cyan',
    gradient: 'from-cyan-500 to-teal-500',
    calculatorCount: 0,
  },
  {
    id: 'medical',
    name: {
      en: 'Medical Calculations',
      tr: 'Tıbbi Hesaplamalar',
    },
    description: {
      en: 'Dosage, lab values, medical formulas',
      tr: 'İlaç dozajı, lab değerleri, tıbbi formüller',
    },
    icon: 'Stethoscope',
    color: 'teal',
    gradient: 'from-teal-500 to-green-500',
    calculatorCount: 0,
  },
  {
    id: 'mental-health',
    name: {
      en: 'Mental Health',
      tr: 'Ruh Sağlığı',
    },
    description: {
      en: 'Stress level, anxiety, depression screening',
      tr: 'Stres seviyesi, anksiyete, depresyon taraması',
    },
    icon: 'Brain',
    color: 'violet',
    gradient: 'from-violet-500 to-purple-500',
    calculatorCount: 0,
  },
  {
    id: 'sleep',
    name: {
      en: 'Sleep & Rest',
      tr: 'Uyku & Dinlenme',
    },
    description: {
      en: 'Sleep calculator, sleep cycles, rest quality',
      tr: 'Uyku hesaplama, uyku döngüleri, dinlenme kalitesi',
    },
    icon: 'Moon',
    color: 'slate',
    gradient: 'from-slate-500 to-gray-500',
    calculatorCount: 0,
  },
  {
    id: 'childrens-health',
    name: {
      en: "Children's Health",
      tr: 'Çocuk Sağlığı',
    },
    description: {
      en: 'Growth charts, vaccine schedule, pediatric dosing',
      tr: 'Büyüme tabloları, aşı takvimi, çocuk dozajları',
    },
    icon: 'Sparkles',
    color: 'yellow',
    gradient: 'from-yellow-500 to-orange-500',
    calculatorCount: 0,
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string, locale: 'en' | 'tr'): Category | undefined {
  // For now, slug matches category id
  return categories.find((cat) => cat.id === slug);
}
