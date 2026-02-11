'use client';

import { useState } from 'react';
import { Card } from '@/components/ui';
import { ChevronDown, ChevronUp, TrendingDown } from 'lucide-react';

interface BiologicalAgeCategoriesProps {
  content: {
    categoriesTitle: string;
    categoriesContent: string;
  };
}

export default function BiologicalAgeCategories({ content }: BiologicalAgeCategoriesProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-3">
          <TrendingDown className="w-6 h-6 text-green-600" />
          <h3 className="text-2xl font-bold">{content.categoriesTitle}</h3>
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
            {content.categoriesContent}
          </div>
        </div>
      )}
    </Card>
  );
}
