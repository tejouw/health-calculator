export const siteConfig = {
  name: 'Health Calculator',
  url: 'https://prohealthcalc.com', // Primary domain (English)
  domains: {
    en: 'https://prohealthcalc.com',
    tr: 'https://saglikhesapla.com',
  },
  /** Get locale-specific domain URL */
  getUrl(locale: 'en' | 'tr'): string {
    return this.domains[locale];
  },
  siteName: {
    en: 'ProHealthCalc',
    tr: 'Sağlık Hesapla',
  },
  description: {
    en: 'Free online health calculators for BMI, calories, pregnancy, fitness and more. Get instant, science-backed results with 65+ tools.',
    tr: '65+ ücretsiz online sağlık hesaplayıcısı: VKİ, kalori, hamilelik, fitness ve daha fazlası. Anında bilimsel sonuçlar.',
  },
  keywords: {
    en: [
      'health calculator',
      'bmi calculator',
      'calorie calculator',
      'pregnancy calculator',
      'fitness calculator',
      'online health tools',
      'body fat calculator',
      'ideal weight calculator',
      'tdee calculator',
      'macro calculator',
      'due date calculator',
      'ovulation calculator',
      'heart rate calculator',
      'sleep calculator',
      'medical calculator',
    ],
    tr: [
      'sağlık hesaplayıcı',
      'vki hesaplama',
      'kalori hesaplama',
      'hamilelik hesaplama',
      'fitness hesaplama',
      'online sağlık araçları',
      'vücut yağ oranı hesaplama',
      'ideal kilo hesaplama',
      'günlük kalori hesaplama',
      'makro hesaplama',
      'doğum tarihi hesaplama',
      'yumurtlama hesaplama',
      'kalp atış hızı hesaplama',
      'uyku hesaplama',
      'tıbbi hesaplayıcı',
    ],
  },
  author: 'Health Calculator Team',
  social: {
    twitter: '@healthcalc',
    facebook: 'healthcalculator',
    instagram: 'healthcalculator',
  },
  googleAnalyticsId: '', // Add your GA4 ID
  googleAdsenseId: '', // Add your AdSense ID
};
