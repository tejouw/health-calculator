'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui';
import { Lightbulb, ChevronRight } from 'lucide-react';

interface ScientificFactsCardProps {
  locale: 'en' | 'tr';
}

const ScientificFactsCard: React.FC<ScientificFactsCardProps> = ({ locale }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const facts = locale === 'tr' ? [
    {
      title: '🫀 Kalp Sağlığı = Beyin Sağlığı',
      summary: 'Kalbiniz için iyi olan beyniniz için de iyidir',
      details: 'Araştırmalar, kardiyovasküler sağlığı iyi olanların demans riskinin %30 daha az olduğunu gösteriyor. Düzenli egzersiz hem kalp hem de beyin için kritik.',
    },
    {
      title: '😴 Uyku Temizliği',
      summary: 'Uyurken beyniniz kendini temizler',
      details: 'Uyku sırasında beyin, toksik protein birikimlerini (beta-amiloid) temizler. 7-9 saat uyumak, Alzheimer riskini önemli ölçüde azaltır.',
    },
    {
      title: '🧬 Genetik Sadece %20-30',
      summary: 'Yaşam tarzı genetikten daha güçlü',
      details: 'İkiz araştırmaları, ömrün %70-80\'inin yaşam tarzı ve çevre faktörlerine bağlı olduğunu gösteriyor. "Kötü genler" sağlıklı yaşamla dengelenebilir.',
    },
    {
      title: '🏃 Egzersiz İlacı',
      summary: 'Egzersiz bir "poli-hap" gibi çalışır',
      details: 'Haftada 150 dakika orta şiddette egzersiz: kalp hastalığı -%35, diyabet -%50, kanser -%20, demans -%30. Hiçbir ilaç bu kadar çok hastalığı önleyemez.',
    },
    {
      title: '👥 Yalnızlık = 15 Sigara/Gün',
      summary: 'Sosyal izolasyon sigara kadar zararlı',
      details: 'Meta-analizler, kronik yalnızlığın mortalite riskini günde 15 sigara kadar artırdığını gösteriyor. Güçlü sosyal bağlar 5-7 yıl ekler.',
    },
    {
      title: '🍎 Akdeniz Diyeti Gücü',
      summary: 'En çok araştırılmış uzun yaşam diyeti',
      details: 'Akdeniz diyeti: kalp hastalığı -%30, inme -%30, tip 2 diyabet -%52. Zeytinyağı, balık, sebze, kuruyemiş bazlı beslenme.',
    },
  ] : [
    {
      title: '🫀 Heart Health = Brain Health',
      summary: 'What\'s good for your heart is good for your brain',
      details: 'Studies show people with good cardiovascular health have 30% lower dementia risk. Regular exercise is critical for both heart and brain.',
    },
    {
      title: '😴 Sleep Cleansing',
      summary: 'Your brain cleans itself during sleep',
      details: 'During sleep, the brain removes toxic protein buildup (beta-amyloid). Getting 7-9 hours significantly reduces Alzheimer\'s risk.',
    },
    {
      title: '🧬 Genetics Only 20-30%',
      summary: 'Lifestyle is more powerful than genetics',
      details: 'Twin studies show 70-80% of lifespan depends on lifestyle and environment. "Bad genes" can be overcome with healthy living.',
    },
    {
      title: '🏃 Exercise as Medicine',
      summary: 'Exercise works like a "poly-pill"',
      details: '150 min/week moderate exercise: heart disease -35%, diabetes -50%, cancer -20%, dementia -30%. No single drug prevents this many diseases.',
    },
    {
      title: '👥 Loneliness = 15 Cigarettes/Day',
      summary: 'Social isolation is as harmful as smoking',
      details: 'Meta-analyses show chronic loneliness increases mortality risk equivalent to smoking 15 cigarettes daily. Strong social bonds add 5-7 years.',
    },
    {
      title: '🍎 Mediterranean Diet Power',
      summary: 'The most researched longevity diet',
      details: 'Mediterranean diet: heart disease -30%, stroke -30%, type 2 diabetes -52%. Based on olive oil, fish, vegetables, nuts.',
    },
  ];

  return (
    <Card className="bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
          <Lightbulb className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">
            {locale === 'tr' ? 'Bilimsel Gerçekler' : 'Scientific Facts'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Araştırmalardan öğrendiklerimiz'
              : 'What research teaches us'}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border-2 border-emerald-200 bg-white/80 transition-all"
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full px-4 py-3 text-left transition-colors hover:bg-emerald-50"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="mb-1 font-bold text-neutral-900">{fact.title}</h4>
                  <p className="text-sm text-neutral-600">{fact.summary}</p>
                </div>
                <ChevronRight
                  className={`h-5 w-5 flex-shrink-0 text-emerald-600 transition-transform ${
                    expandedIndex === index ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>
            {expandedIndex === index && (
              <div className="border-t border-emerald-200 bg-emerald-50/50 px-4 py-3">
                <p className="text-sm leading-relaxed text-neutral-700">{fact.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-teal-100 p-4">
        <p className="text-center text-sm font-semibold text-teal-900">
          🔬 {locale === 'tr'
            ? 'Bu bulgular yüz binlerce kişiyi takip eden uzun süreli araştırmalara dayanıyor'
            : 'These findings are based on long-term studies tracking hundreds of thousands of people'}
        </p>
      </div>
    </Card>
  );
};

export default ScientificFactsCard;
