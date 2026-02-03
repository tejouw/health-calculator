'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Heart, Apple, Activity, AlertCircle, CheckCircle } from 'lucide-react';

interface PrenatalCareGuideProps {
  trimester: 1 | 2 | 3;
  locale: 'en' | 'tr';
}

const PrenatalCareGuide: React.FC<PrenatalCareGuideProps> = ({ trimester, locale }) => {
  const trimesterGuides = {
    1: {
      title: { en: 'First Trimester Care', tr: '1. Trimester Bakım' },
      nutrition: {
        en: ['Take folic acid (400-800mcg/day)', 'Eat iron-rich foods (spinach, lentils)', 'Stay hydrated (at least 8 glasses)', 'Eat small, frequent meals for nausea'],
        tr: ['Folik asit alın (400-800mcg/gün)', 'Demirce zengin gıdalar yiyin (ıspanak, mercimek)', 'Hidrate kalın (en az 8 bardak)', 'Bulantı için küçük ve sık öğünler yiyin'],
      },
      dos: {
        en: ['Schedule first prenatal appointment', 'Get prenatal blood tests', 'Start exercising gently', 'Discuss medications with your doctor', 'Track symptoms and changes'],
        tr: ['Ilk doğum öncesi randevu alın', 'Doğum öncesi kan testleri yaptırın', 'Hafifçe egzersiz yapın', 'Doktorunuzla ilaçları tartışın', 'Belirtileri ve değişiklikleri takip edin'],
      },
      warnings: {
        en: ['Morning sickness typically improves after week 12', 'Avoid raw fish and unpasteurized cheese', 'Limit caffeine to 200mg/day max', 'Avoid alcohol completely'],
        tr: ['Sabah bulantısı genellikle 12. haftadan sonra azalır', 'Pişirmemiş balık ve pastörizesiz peynir kaçının', 'Kafein 200mg/gün ile sınırlayın', 'Alkolden tamamen kaçının'],
      },
    },
    2: {
      title: { en: 'Second Trimester Care', tr: '2. Trimester Bakım' },
      nutrition: {
        en: ['Increase protein intake (75g/day)', 'Ensure calcium intake (1000mg/day)', 'Continue iron and folate supplements', 'Eat DHA-rich foods for baby\'s brain'],
        tr: ['Protein alımını artırın (75g/gün)', 'Kalsiyum alımını sağlayın (1000mg/gün)', 'Demirle folat takviyelerine devam edelim', 'Beyin gelişimi için DHA\'ca zengin gıdalar yiyin'],
      },
      dos: {
        en: ['Attend 15-20 week ultrasound', 'Start feeling baby\'s movement (quickening)', 'Do Kegel exercises for pelvic floor', 'Attend childbirth classes', 'Buy comfortable clothing'],
        tr: ['15-20. hafta ultrasona gidin', 'Bebek hareketi hissetmeye başlayın', 'Kegel egzersizleri yapın', 'Doğum hazırlık sınıflarına gidin', 'Rahat kıyafetler alın'],
      },
      warnings: {
        en: ['Watch for signs of gestational diabetes', 'Maintain healthy weight gain (400-500g/week)', 'Stay active but avoid intense exercise', 'Avoid lying flat on your back after 20 weeks'],
        tr: ['Gestasyonel diyabet belirtilerini gözlemleyin', 'Sağlıklı kilo kazanımını koruyun (400-500g/hafta)', 'Aktif kalın ama yoğun egzersiz yapın', '20. haftadan sonra sırtüstü yatmaktan kaçının'],
      },
    },
    3: {
      title: { en: 'Third Trimester Care', tr: '3. Trimester Bakım' },
      nutrition: {
        en: ['Eat more vitamin K foods (for blood clotting)', 'Maintain high protein and calcium', 'Eat smaller meals (stomach is compressed)', 'Stay well hydrated to avoid preterm labor'],
        tr: ['K vitamini zengin gıdalar yiyin (kan pıhtılaşma için)', 'Yüksek protein ve kalsiyumun sürdürün', 'Küçük öğünler yiyin (mide sıkışmış)', 'Erken doğumu önlemek için iyi hidrate kalın'],
      },
      dos: {
        en: ['Pack your hospital bag by week 36', 'Attend weekly check-ups', 'Practice breathing and relaxation techniques', 'Arrange pediatrician for newborn', 'Prepare home for baby\'s arrival'],
        tr: ['36. haftada hastane çantanızı hazırlayın', 'Haftalık kontrol ziyaretlerine gidin', 'Nefes alma ve rahatlatma tekniklerini öğrenin', 'Yenidoğan için çocuk doktoru bulun', 'Evyi bebeğin gelişine hazırlayın'],
      },
      warnings: {
        en: ['Swollen feet are normal but monitor blood pressure', 'Count fetal movements daily (after 28 weeks)', 'Seek help for severe headaches or vision changes', 'Know the signs of preeclampsia'],
        tr: ['Şişmiş ayaklar normal ama kan basıncını izleyin', 'Günlük fetal hareketleri sayın (28. haftadan sonra)', 'Ciddi baş ağrıları veya görüş değişiklikleri için yardım alın', 'Preeklamsi belirtilerini bilin'],
      },
    },
  };

  const guide = trimesterGuides[trimester];

  return (
    <>
      {/* Nutrition Guide */}
      <Card>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
            <Apple className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Beslenme Rehberi' : 'Nutrition Guide'}
            </h3>
            <p className="text-sm text-neutral-600">{guide.title[locale]}</p>
          </div>
        </div>
        <div className="space-y-2">
          {guide.nutrition[locale].map((item, index) => (
            <div key={index} className="flex items-start gap-3 rounded-lg bg-green-50 p-3">
              <Apple className="mt-0.5 h-4 w-4 text-green-600" />
              <span className="text-sm text-green-800">{item}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* What To Do */}
      <Card>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-neutral-900">
            {locale === 'tr' ? 'Yapılacaklar Listesi' : 'To-Do Checklist'}
          </h3>
        </div>
        <div className="space-y-2">
          {guide.dos[locale].map((item, index) => (
            <div key={index} className="flex items-start gap-3 rounded-lg bg-blue-50 p-3">
              <CheckCircle className="mt-0.5 h-4 w-4 text-blue-600" />
              <span className="text-sm text-blue-800">{item}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Warnings */}
      <Card className="border-2 border-amber-200 bg-amber-50">
        <div className="mb-4 flex items-center gap-3">
          <AlertCircle className="h-6 w-6 text-amber-600" />
          <h3 className="text-lg font-bold text-amber-900">
            {locale === 'tr' ? 'Önemli Uyarılar' : 'Important Warnings'}
          </h3>
        </div>
        <div className="space-y-2">
          {guide.warnings[locale].map((item, index) => (
            <div key={index} className="flex items-start gap-3 rounded-lg bg-white p-3">
              <AlertCircle className="mt-0.5 h-4 w-4 text-amber-600" />
              <span className="text-sm text-amber-800">{item}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* General Pregnancy Info */}
      <Card className="border-2 border-pink-200 bg-pink-50">
        <div className="flex items-start gap-3">
          <Heart className="h-6 w-6 text-pink-600" />
          <div>
            <h4 className="mb-2 font-semibold text-pink-900">
              {locale === 'tr' ? '💛 Hamilelik Hatırlatıcıları' : '💛 Pregnancy Reminders'}
            </h4>
            <ul className="space-y-1 text-sm text-pink-800">
              <li>• {locale === 'tr' ? 'Düzenli tıbbi takip çok önemlidir' : 'Regular medical check-ups are very important'}</li>
              <li>• {locale === 'tr' ? 'Stres azaltma teknikleri uygulayın' : 'Practice stress reduction techniques'}</li>
              <li>• {locale === 'tr' ? 'Yeterli uyuduğunuzdan emin olun' : 'Make sure you get enough sleep'}</li>
              <li>• {locale === 'tr' ? 'Sosyal destek almaktan çekinmeyin' : 'Do not hesitate to seek social support'}</li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PrenatalCareGuide;
