import { Card } from '@/components/ui';
import { BookMarked } from 'lucide-react';

interface BiologicalAgeReferencesProps {
  references: string[];
  title: string;
}

export default function BiologicalAgeReferences({ references, title }: BiologicalAgeReferencesProps) {
  return (
    <Card className="p-6 bg-blue-50 border-blue-200">
      <div className="flex items-center gap-3 mb-4">
        <BookMarked className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      </div>

      <ol className="space-y-2 list-decimal list-inside text-blue-800">
        {references.map((reference, index) => (
          <li key={index} className="leading-relaxed">
            {reference}
          </li>
        ))}
      </ol>
    </Card>
  );
}
