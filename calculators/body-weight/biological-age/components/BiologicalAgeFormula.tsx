'use client';

import { useState } from 'react';
import { Card } from '@/components/ui';
import { ChevronDown, ChevronUp, Calculator } from 'lucide-react';

interface BiologicalAgeFormulaProps {
  content: {
    formulaTitle: string;
    formulaContent: string;
  };
}

export default function BiologicalAgeFormula({ content }: BiologicalAgeFormulaProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-3">
          <Calculator className="w-6 h-6 text-purple-600" />
          <h3 className="text-2xl font-bold">{content.formulaTitle}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-gray-400" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-400" />
        )}
      </button>

      {isOpen && (
        <div className="mt-6 prose max-w-none">
          <div className="text-gray-700 whitespace-pre-line leading-relaxed">
            {content.formulaContent}
          </div>
        </div>
      )}
    </Card>
  );
}
