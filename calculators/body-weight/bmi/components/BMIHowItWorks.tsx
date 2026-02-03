'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Calculator, History, Globe, TrendingUp } from 'lucide-react';

interface BMIHowItWorksProps {
  locale: 'en' | 'tr';
}

const BMIHowItWorks: React.FC<BMIHowItWorksProps> = ({ locale }) => {
  return (
    <Card>
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'VKİ Nasıl Çalışır?' : 'How Does BMI Work?'}
        </h3>
        <p className="text-sm text-neutral-600">
          {locale === 'tr'
            ? 'Vücut Kitle İndeksi hesaplamasının arkasındaki bilim'
            : 'The science behind Body Mass Index calculation'}
        </p>
      </div>

      {/* Formula */}
      <div className="mb-6 rounded-lg bg-gradient-to-r from-primary-50 to-blue-50 p-6">
        <div className="mb-3 flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary-600" />
          <h4 className="font-semibold text-primary-900">
            {locale === 'tr' ? 'Formül' : 'Formula'}
          </h4>
        </div>
        <div className="rounded-lg bg-white p-4">
          <div className="mb-2 text-center">
            <div className="text-2xl font-bold text-neutral-900">
              BMI = {locale === 'tr' ? 'Kilo (kg)' : 'Weight (kg)'} ÷ {locale === 'tr' ? 'Boy²' : 'Height²'} (m²)
            </div>
          </div>
          <div className="mt-4 border-t border-neutral-200 pt-4">
            <p className="text-center text-sm text-neutral-600">
              {locale === 'tr' ? 'Örnek: 70 kg ÷ (1.75m)² = 70 ÷ 3.06 = ' : 'Example: 70 kg ÷ (1.75m)² = 70 ÷ 3.06 = '}
              <span className="font-bold text-primary-600">22.9 BMI</span>
            </p>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="mb-6 rounded-lg border border-neutral-200 bg-white p-4">
        <div className="mb-3 flex items-center gap-2">
          <History className="h-5 w-5 text-blue-600" />
          <h4 className="font-semibold text-neutral-900">
            {locale === 'tr' ? 'Tarihçe' : 'History'}
          </h4>
        </div>
        <p className="text-sm text-neutral-700">
          {locale === 'tr' ? (
            <>
              VKİ <strong>1830'larda Belçikalı matematikçi Adolphe Quetelet</strong> tarafından
              geliştirildi. Başlangıçta bir kişinin kilonun boyunun karesine oranla nasıl
              değiştiğini ölçmek için tasarlandı. 1970'lerde sağlık profesyonelleri tarafından obezite
              taraması için geniş çaplı kullanılmaya başlandı.
            </>
          ) : (
            <>
              BMI was developed by <strong>Belgian mathematician Adolphe Quetelet in the 1830s</strong>.
              It was originally designed to measure how a person's weight varies with the square of
              their height. In the 1970s, it began to be widely used by health professionals for
              obesity screening.
            </>
          )}
        </p>
      </div>

      {/* Categories */}
      <div className="mb-6 rounded-lg border border-neutral-200 bg-white p-4">
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <h4 className="font-semibold text-neutral-900">
            {locale === 'tr' ? 'VKİ Kategorileri' : 'BMI Categories'}
          </h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3">
            <span className="font-medium text-blue-900">
              {locale === 'tr' ? 'Zayıf' : 'Underweight'}
            </span>
            <span className="text-sm text-blue-700">&lt; 18.5</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
            <span className="font-medium text-green-900">
              {locale === 'tr' ? 'Normal' : 'Normal'}
            </span>
            <span className="text-sm text-green-700">18.5 - 24.9</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-yellow-50 p-3">
            <span className="font-medium text-yellow-900">
              {locale === 'tr' ? 'Fazla Kilolu' : 'Overweight'}
            </span>
            <span className="text-sm text-yellow-700">25 - 29.9</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-orange-50 p-3">
            <span className="font-medium text-orange-900">
              {locale === 'tr' ? 'Obez' : 'Obese'}
            </span>
            <span className="text-sm text-orange-700">30 - 39.9</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-red-50 p-3">
            <span className="font-medium text-red-900">
              {locale === 'tr' ? 'Ciddi Obez' : 'Severely Obese'}
            </span>
            <span className="text-sm text-red-700">≥ 40</span>
          </div>
        </div>
      </div>

      {/* Global Standards */}
      <div className="rounded-lg border border-neutral-200 bg-gradient-to-r from-purple-50 to-pink-50 p-4">
        <div className="mb-3 flex items-center gap-2">
          <Globe className="h-5 w-5 text-purple-600" />
          <h4 className="font-semibold text-purple-900">
            {locale === 'tr' ? 'Küresel Standartlar' : 'Global Standards'}
          </h4>
        </div>
        <p className="mb-3 text-sm text-neutral-700">
          {locale === 'tr' ? (
            <>
              Dünya Sağlık Örgütü (WHO) VKİ standardını kullanırken, bazı ülkeler etnik farklılıklar
              nedeniyle kendi eşiklerini belirlemiştir:
            </>
          ) : (
            <>
              While the World Health Organization (WHO) uses the BMI standard, some countries have
              set their own thresholds due to ethnic differences:
            </>
          )}
        </p>
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-purple-600">•</span>
            <span>
              <strong>{locale === 'tr' ? 'Asya-Pasifik:' : 'Asia-Pacific:'}</strong>{' '}
              {locale === 'tr'
                ? 'Fazla kilolu ≥23, Obez ≥27.5'
                : 'Overweight ≥23, Obese ≥27.5'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600">•</span>
            <span>
              <strong>{locale === 'tr' ? 'Hong Kong:' : 'Hong Kong:'}</strong>{' '}
              {locale === 'tr'
                ? 'Fazla kilolu ≥23, Obez ≥25'
                : 'Overweight ≥23, Obese ≥25'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600">•</span>
            <span>
              <strong>{locale === 'tr' ? 'Japonya:' : 'Japan:'}</strong>{' '}
              {locale === 'tr'
                ? 'Fazla kilolu ≥25, Obez ≥30'
                : 'Overweight ≥25, Obese ≥30'}
            </span>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default BMIHowItWorks;
