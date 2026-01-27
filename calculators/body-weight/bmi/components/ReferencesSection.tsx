'use client';

import React from 'react';
import { BookOpen } from 'lucide-react';

interface ReferencesSectionProps {
  references: string[];
  locale: 'en' | 'tr';
}

const ReferencesSection: React.FC<ReferencesSectionProps> = ({ references, locale }) => {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
          <BookOpen className="h-5 w-5 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900">
          {locale === 'en' ? 'References & Sources' : 'Kaynaklar ve Referanslar'}
        </h3>
      </div>
      <ol className="space-y-3">
        {references.map((reference, index) => (
          <li key={index} className="flex gap-3 text-sm text-neutral-700">
            <span className="flex-shrink-0 font-semibold text-neutral-500">[{index + 1}]</span>
            <span className="flex-1">{reference}</span>
          </li>
        ))}
      </ol>
      <div className="mt-4 border-t border-neutral-200 pt-4">
        <p className="text-xs text-neutral-600">
          {locale === 'en'
            ? 'These references are provided for educational purposes. Always consult healthcare professionals for medical advice.'
            : 'Bu kaynaklar eğitim amaçlıdır. Tıbbi tavsiye için her zaman sağlık profesyonellerine danışın.'}
        </p>
      </div>
    </div>
  );
};

export default ReferencesSection;
