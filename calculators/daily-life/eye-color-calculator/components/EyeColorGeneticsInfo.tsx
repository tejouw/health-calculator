'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Dna, Info, Baby, Users } from 'lucide-react';

interface EyeColorGeneticsInfoProps {
  locale: 'en' | 'tr';
}

const EyeColorGeneticsInfo: React.FC<EyeColorGeneticsInfoProps> = ({ locale }) => {
  const content = locale === 'tr' ? {
    geneticsTitle: 'Göz Rengi Genetiği Nasıl Çalışır?',
    geneticsText: `Göz rengi, başta OCA2 ve HERC2 genleri olmak üzere birden fazla genin etkileşimiyle belirlenir. Kahverengi göz rengi baskın (dominant), mavi göz rengi ise çekinik (resesif) bir özelliktir. Yeşil ve ela göz renkleri ise bu iki uç arasında yer alır.

Her ebeveyn çocuğuna bir allel (gen varyantı) aktarır. Çocuğun göz rengi, aldığı iki allelin kombinasyonuna göre belirlenir. Kahverengi allel hem yeşil hem mavi allel üzerinde baskındır; yeşil allel ise mavi üzerinde baskındır.`,
    funFactsTitle: 'İlginç Bilgiler',
    funFacts: [
      'Dünya nüfusunun yaklaşık %79\'u kahverengi gözlüdür',
      'Tüm mavi gözlü insanlar yaklaşık 6.000-10.000 yıl önce yaşamış ortak bir ataya sahiptir',
      'Bebekler genellikle daha açık göz rengiyle doğar, göz rengi 6-12 ay içinde koyulaşabilir',
      'Ela (hazel) göz rengi, ışığa göre renk değiştirir',
      'Yeşil göz, dünya üzerinde en nadir görülen doğal göz rengidir (yaklaşık %2)',
      'Heterokromi (farklı renkte iki göz) her 1.000 kişiden yaklaşık 6\'sında görülür',
    ],
    timelineTitle: 'Bebeğin Göz Rengi Ne Zaman Belli Olur?',
    timelineItems: [
      { period: 'Doğum', desc: 'Çoğu bebek açık mavi-gri gözlerle doğar' },
      { period: '3-6 Ay', desc: 'Melanin üretimi artar, renk değişmeye başlar' },
      { period: '6-9 Ay', desc: 'Göz rengi belirginleşir ama hala değişebilir' },
      { period: '12 Ay', desc: 'Çoğu bebeğin göz rengi artık bellidir' },
      { period: '3 Yaş', desc: 'Göz rengi tamamen sabitlenir' },
    ],
  } : {
    geneticsTitle: 'How Does Eye Color Genetics Work?',
    geneticsText: `Eye color is determined by the interaction of multiple genes, primarily OCA2 and HERC2. Brown eye color is dominant, while blue is recessive. Green and hazel fall between these two extremes.

Each parent passes one allele (gene variant) to their child. The child's eye color is determined by the combination of two received alleles. The brown allele is dominant over both green and blue; the green allele is dominant over blue.`,
    funFactsTitle: 'Fun Facts',
    funFacts: [
      'Approximately 79% of the world population has brown eyes',
      'All blue-eyed people share a common ancestor who lived about 6,000-10,000 years ago',
      'Babies are often born with lighter eye color; it can darken within 6-12 months',
      'Hazel eyes appear to change color depending on lighting',
      'Green is the rarest natural eye color in the world (approximately 2%)',
      'Heterochromia (two different colored eyes) occurs in about 6 out of every 1,000 people',
    ],
    timelineTitle: 'When Does a Baby\'s Eye Color Become Permanent?',
    timelineItems: [
      { period: 'Birth', desc: 'Most babies are born with light blue-gray eyes' },
      { period: '3-6 Months', desc: 'Melanin production increases, color begins to change' },
      { period: '6-9 Months', desc: 'Eye color becomes more defined but may still change' },
      { period: '12 Months', desc: 'Most babies\' eye color is now apparent' },
      { period: '3 Years', desc: 'Eye color is fully established' },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Genetics Explanation */}
      <Card>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100">
            <Dna className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold text-neutral-900">{content.geneticsTitle}</h3>
            <p className="whitespace-pre-line text-sm leading-relaxed text-neutral-700">
              {content.geneticsText}
            </p>
          </div>
        </div>
      </Card>

      {/* Timeline */}
      <Card>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
            <Baby className="h-5 w-5 text-blue-600" />
          </div>
          <div className="w-full">
            <h3 className="mb-4 text-lg font-bold text-neutral-900">{content.timelineTitle}</h3>
            <div className="space-y-3">
              {content.timelineItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-neutral-900">{item.period}: </span>
                    <span className="text-sm text-neutral-700">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Fun Facts */}
      <Card>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100">
            <Info className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h3 className="mb-3 text-lg font-bold text-neutral-900">{content.funFactsTitle}</h3>
            <ul className="space-y-2">
              {content.funFacts.map((fact, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="mt-1 text-amber-500">&#9733;</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EyeColorGeneticsInfo;
