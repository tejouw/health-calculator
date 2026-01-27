'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface MedicalDisclaimerProps {
  content: string;
  locale: 'en' | 'tr';
}

const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({ content, locale }) => {
  return (
    <div className="rounded-lg border-2 border-yellow-400 bg-yellow-50 p-6">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-6 w-6 text-yellow-600" />
        </div>
        <div className="flex-1">
          <h3 className="mb-2 text-lg font-bold text-yellow-900">
            {locale === 'en' ? '⚕️ Medical Disclaimer' : '⚕️ Tıbbi Uyarı'}
          </h3>
          <p className="text-sm leading-relaxed text-yellow-900">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;
