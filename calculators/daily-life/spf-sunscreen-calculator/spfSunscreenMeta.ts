import { CalculatorMeta } from '@/types/calculator';
import SpfSunscreenCalculator from './SpfSunscreenCalculator';

export const spfSunscreenMeta: CalculatorMeta = {
  id: 'spf-sunscreen-calculator',
  category: 'daily-life',
  slug: {
    en: 'spf-sunscreen-calculator',
    tr: 'gunes-koruma-hesaplayici',
  },
  title: {
    en: 'SPF & Sun Exposure Calculator - Safe Sun Time',
    tr: 'Güneş Koruma (SPF) Hesaplayıcı - Güvenli Güneşlenme Süresi',
  },
  description: {
    en: 'Calculate your safe sun exposure time based on skin type, SPF, and UV index. Get personalized sunscreen reapplication reminders and sun safety tips.',
    tr: 'Cilt tipinize, SPF değerine ve UV indeksine göre güvenli güneşlenme sürenizi hesaplayın. Kişiselleştirilmiş güneş kremi yeniden sürme hatırlatıcıları ve güneş güvenliği ipuçları alın.',
  },
  keywords: [
    'spf calculator',
    'sun exposure calculator',
    'sunscreen calculator',
    'uv index calculator',
    'safe sun time',
    'fitzpatrick skin type',
    'sunburn time',
    'vitamin d sun exposure',
    'güneş koruma hesaplayıcı',
    'spf hesaplama',
    'güneş kremi hesaplayıcı',
    'güneşte kalma süresi',
    'uv indeksi',
    'güneş yanığı süresi',
    'cilt tipi testi',
    'd vitamini güneşlenme',
  ],
  icon: 'Sun',
  popular: true,
  component: SpfSunscreenCalculator,
};
