import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getCategoryById } from '@/config/categories.config';
import { getCalculatorsByCategory } from '@/lib/calculatorRegistry';
import { Card, Badge } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import { Link } from '@/lib/navigation';
import * as Icons from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    locale: string;
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category: categoryId } = await params;
  setRequestLocale(locale);

  const category = getCategoryById(categoryId);

  if (!category) {
    notFound();
  }

  const calculators = getCalculatorsByCategory(category.id);
  const CategoryIcon = (Icons as any)[category.icon] || Icons.Activity;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-custom py-8">
          <Breadcrumbs
            items={[
              {
                label: category.name[locale as 'en' | 'tr'],
              },
            ]}
            className="mb-4"
          />
          <div className="flex items-center gap-4">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient}`}
            >
              <CategoryIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="heading-2 mb-2">{category.name[locale as 'en' | 'tr']}</h1>
              <p className="text-body">{category.description[locale as 'en' | 'tr']}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          {calculators.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {calculators.map((calc) => {
                const CalcIcon = (Icons as any)[calc.icon] || Icons.Calculator;

                return (
                  <Link
                    key={calc.id}
                    href={`/${category.id}/${calc.slug[locale as 'en' | 'tr']}`}
                  >
                    <Card hoverable className="group h-full transition-all hover:shadow-hard">
                      <div className="mb-4 flex items-start justify-between">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient}`}
                        >
                          <CalcIcon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex gap-2">
                          {calc.popular && <Badge variant="primary">Popular</Badge>}
                          {calc.featured && <Badge variant="secondary">Featured</Badge>}
                        </div>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-neutral-900 group-hover:text-primary-600">
                        {calc.title[locale as 'en' | 'tr']}
                      </h3>
                      <p className="text-sm text-neutral-600">
                        {calc.description[locale as 'en' | 'tr']}
                      </p>
                    </Card>
                  </Link>
                );
              })}
            </div>
          ) : (
            <Card className="text-center">
              <p className="text-neutral-600">
                {locale === 'tr'
                  ? 'Bu kategoride henüz hesaplayıcı bulunmamaktadır.'
                  : 'No calculators available in this category yet.'}
              </p>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
