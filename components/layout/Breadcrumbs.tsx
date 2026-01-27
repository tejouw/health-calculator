import React from 'react';
import { Link } from '@/lib/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  const t = useTranslations('common');

  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center space-x-2', className)}>
      <Link
        href="/"
        className="flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">{t('home')}</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <ChevronRight className="h-4 w-4 text-neutral-400" />
            {isLast || !item.href ? (
              <span className="text-sm font-medium text-neutral-900">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
