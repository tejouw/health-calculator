'use client';

import { Link } from '@/lib/navigation';
import { Card } from '@/components/ui';
import { Category } from '@/types/category';
import {
  Scale,
  Dumbbell,
  Apple,
  Baby,
  Heart,
  Activity,
  HeartPulse,
  Droplet,
  Stethoscope,
  Brain,
  Moon,
  Sparkles,
  Calculator,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Scale,
  Dumbbell,
  Apple,
  Baby,
  Heart,
  ActivitySquare: Activity,
  HeartPulse,
  Droplet,
  Stethoscope,
  Brain,
  Moon,
  Sparkles,
};

// Gradient color mapping to avoid Tailwind purge issues
const gradientMap: Record<string, string> = {
  'from-blue-500 to-cyan-500': 'linear-gradient(to bottom right, rgb(59 130 246), rgb(6 182 212))',
  'from-green-500 to-emerald-500': 'linear-gradient(to bottom right, rgb(34 197 94), rgb(16 185 129))',
  'from-orange-500 to-amber-500': 'linear-gradient(to bottom right, rgb(249 115 22), rgb(245 158 11))',
  'from-pink-500 to-rose-500': 'linear-gradient(to bottom right, rgb(236 72 153), rgb(244 63 94))',
  'from-purple-500 to-fuchsia-500': 'linear-gradient(to bottom right, rgb(168 85 247), rgb(217 70 239))',
  'from-indigo-500 to-blue-500': 'linear-gradient(to bottom right, rgb(99 102 241), rgb(59 130 246))',
  'from-red-500 to-pink-500': 'linear-gradient(to bottom right, rgb(239 68 68), rgb(236 72 153))',
  'from-cyan-500 to-teal-500': 'linear-gradient(to bottom right, rgb(6 182 212), rgb(20 184 166))',
  'from-teal-500 to-green-500': 'linear-gradient(to bottom right, rgb(20 184 166), rgb(34 197 94))',
  'from-violet-500 to-purple-500': 'linear-gradient(to bottom right, rgb(139 92 246), rgb(168 85 247))',
  'from-slate-500 to-gray-500': 'linear-gradient(to bottom right, rgb(100 116 139), rgb(107 114 128))',
  'from-yellow-500 to-orange-500': 'linear-gradient(to bottom right, rgb(234 179 8), rgb(249 115 22))',
};

interface CategoryCardProps {
  category: Category;
  title: string;
  locale: 'en' | 'tr';
}

export function CategoryCard({ category, title, locale }: CategoryCardProps) {
  const IconComponent = iconMap[category.icon] || Activity;
  const gradientStyle = gradientMap[category.gradient] || gradientMap['from-blue-500 to-cyan-500'];
  const description = category.description[locale] || category.description.en;

  // Localized text
  const texts = {
    en: { explore: 'Explore', tools: 'tools' },
    tr: { explore: 'Keşfet', tools: 'araç' }
  };
  const t = texts[locale];

  return (
    <Link key={category.id} href={`/${category.id}`}>
      <Card
        hoverable
        className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2"
      >
        {/* Background gradient effect */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5"
          style={{ background: gradientStyle }}
        ></div>

        <div className="relative">
          <div
            className="mb-3 sm:mb-4 md:mb-5 inline-flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-xl sm:rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: gradientStyle }}
          >
            <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
          </div>

          <h3 className="mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-neutral-900 transition-colors group-hover:text-primary-600 leading-tight">
            {title}
          </h3>

          <p className="mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed text-neutral-600 line-clamp-2 sm:line-clamp-3">
            {description}
          </p>

          <div className="flex items-center justify-between gap-2">
            {(category.calculatorCount ?? 0) > 0 && (
              <div className="flex items-center gap-1 sm:gap-1.5 text-xs font-medium text-neutral-500">
                <Calculator className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
                <span className="leading-none">{category.calculatorCount} {t.tools}</span>
              </div>
            )}

            <div className="ml-auto flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm font-semibold text-primary-600 opacity-0 sm:opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="hidden sm:inline">{t.explore}</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
