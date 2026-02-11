import { Card } from '@/components/ui';
import { AlertTriangle } from 'lucide-react';

interface BiologicalAgeDisclaimerProps {
  disclaimer: string;
  title: string;
}

export default function BiologicalAgeDisclaimer({ disclaimer, title }: BiologicalAgeDisclaimerProps) {
  return (
    <Card className="p-6 bg-amber-50 border-amber-200">
      <div className="flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-bold text-amber-900 mb-3">{title}</h3>
          <p className="text-amber-800 leading-relaxed">{disclaimer}</p>
        </div>
      </div>
    </Card>
  );
}
