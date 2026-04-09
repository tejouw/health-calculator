import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getCategoryById, getCategoryBySlug, categories } from '@/config/categories.config';
import { getCalculatorsByCategory } from '@/lib/calculatorRegistry';
import { Card, Badge } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import { Link } from '@/lib/navigation';
import { getIcon } from '@/lib/iconUtils';
import { Activity, Calculator } from 'lucide-react';
import { generateSEO, generateBreadcrumbSchema, generateCollectionPageSchema } from '@/lib/seo';
import { getDomainForLocale } from '@/lib/domain';
import type { Metadata } from 'next';

interface CategoryPageProps {
  params: Promise<{
    locale: string;
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { locale, category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug, locale as 'en' | 'tr');

  if (!category) {
    return {};
  }

  const alternateLocale = locale === 'en' ? 'tr' : 'en';

  const loc = locale as 'en' | 'tr';
  const calculators = getCalculatorsByCategory(category.id);
  const calcNames = calculators.map((c) => c.title[loc].toLowerCase());

  return generateSEO({
    title: category.name[loc],
    description: category.description[loc],
    keywords: calcNames,
    locale: loc,
    path: `/${categorySlug}`,
    alternatePath: `/${category.slug[alternateLocale as 'en' | 'tr']}`,
  });
}

// Generate static paths for all categories
export async function generateStaticParams() {
  const paths: Array<{ locale: string; category: string }> = [];

  for (const cat of categories) {
    // English version with English category slug
    paths.push({
      locale: 'en',
      category: cat.slug.en,
    });
    // Turkish version with Turkish category slug
    paths.push({
      locale: 'tr',
      category: cat.slug.tr,
    });
  }

  return paths;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category: categorySlug } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('common');
  // Get category by localized slug
  const category = getCategoryBySlug(categorySlug, locale as 'en' | 'tr');

  if (!category) {
    notFound();
  }

  const calculators = getCalculatorsByCategory(category.id);
  const CategoryIcon = getIcon(category.icon, Activity);

  const loc = locale as 'en' | 'tr';
  const domain = getDomainForLocale(loc);
  const pageUrl = `${domain}/${categorySlug}`;

  return (
    <>
    {/* BreadcrumbList Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          generateBreadcrumbSchema([
            {
              name: loc === 'en' ? 'Home' : 'Ana Sayfa',
              url: domain,
            },
            {
              name: category.name[loc],
              url: pageUrl,
            },
          ])
        ),
      }}
    />

    {/* CollectionPage Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          generateCollectionPageSchema({
            name: category.name[loc],
            description: category.description[loc],
            url: pageUrl,
            locale: loc,
            numberOfItems: calculators.length,
          })
        ),
      }}
    />

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
                const CalcIcon = getIcon(calc.icon, Calculator);

                return (
                  <Link
                    key={calc.id}
                    href={`/${category.slug[locale as 'en' | 'tr']}/${calc.slug[locale as 'en' | 'tr']}`}
                  >
                    <Card hoverable className="group h-full transition-all hover:shadow-hard">
                      <div className="mb-4 flex items-start justify-between">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient}`}
                        >
                          <CalcIcon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex gap-2">
                          {calc.popular && <Badge variant="primary">{t('popular')}</Badge>}
                          {calc.featured && <Badge variant="secondary">{t('featured')}</Badge>}
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

      {/* SEO Content Section - prevents thin content */}
      {calculators.length > 0 && (
        <section className="border-t border-neutral-200 bg-white">
          <div className="container-custom section-spacing">
            <div className="prose prose-neutral max-w-none">
              <h2 className="heading-3 mb-4">
                {loc === 'en'
                  ? `${category.name.en} Calculators`
                  : `${category.name.tr} Hesaplayıcıları`}
              </h2>
              <p className="text-body mb-4">
                {loc === 'en'
                  ? `Explore our collection of ${calculators.length} free ${category.name.en.toLowerCase()} calculators. Each tool is designed to provide instant, science-backed results to help you track and improve your health. All calculators are free to use, require no registration, and your data stays private on your device.`
                  : `${calculators.length} adet ücretsiz ${category.name.tr.toLowerCase()} hesaplayıcımızı keşfedin. Her araç, sağlığınızı takip etmenize ve geliştirmenize yardımcı olmak için anında bilimsel sonuçlar sunmak üzere tasarlanmıştır. Tüm hesaplayıcılar ücretsizdir, kayıt gerektirmez ve verileriniz cihazınızda gizli kalır.`}
              </p>
              <p className="text-body mb-6">
                {loc === 'en'
                  ? `Our ${category.name.en.toLowerCase()} tools use clinically validated formulas and are regularly updated to reflect the latest medical guidelines. Whether you're monitoring your health at home or preparing for a doctor's visit, these calculators provide reliable baseline measurements you can trust.`
                  : `${category.name.tr.toLowerCase()} araçlarımız klinik olarak doğrulanmış formüller kullanır ve en güncel tıbbi kılavuzları yansıtacak şekilde düzenli olarak güncellenir. İster evde sağlığınızı takip edin, ister doktor ziyaretine hazırlanın, bu hesaplayıcılar güvenebileceğiniz temel ölçümler sunar.`}
              </p>

              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {loc === 'en' ? 'Available Calculators' : 'Mevcut Hesaplayıcılar'}
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                {calculators.map((calc) => (
                  <li key={calc.id} className="text-body">
                    <Link
                      href={`/${category.slug[loc]}/${calc.slug[loc]}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      {calc.title[loc]}
                    </Link>
                    {' — '}
                    {calc.description[loc]}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-neutral-900 mb-3 mt-8">
                {loc === 'en' ? 'How to Use These Calculators' : 'Bu Hesaplayıcılar Nasıl Kullanılır?'}
              </h3>
              <ol className="list-decimal space-y-2 pl-6 text-body">
                <li>
                  {loc === 'en'
                    ? 'Choose the calculator that best fits your needs from the list above.'
                    : 'Yukarıdaki listeden ihtiyacınıza en uygun hesaplayıcıyı seçin.'}
                </li>
                <li>
                  {loc === 'en'
                    ? 'Enter the required values such as age, weight, height or other measurements.'
                    : 'Yaş, kilo, boy veya diğer ölçümler gibi gerekli değerleri girin.'}
                </li>
                <li>
                  {loc === 'en'
                    ? 'Click "Calculate" to get your personalized results instantly.'
                    : '"Hesapla" butonuna tıklayarak kişiselleştirilmiş sonuçlarınızı anında alın.'}
                </li>
                <li>
                  {loc === 'en'
                    ? 'Review the detailed interpretation, health tips and recommendations provided below your results.'
                    : 'Sonuçlarınızın altında sunulan detaylı yorumları, sağlık ipuçlarını ve önerileri inceleyin.'}
                </li>
              </ol>

              <div className="mt-8 rounded-lg bg-primary-50 p-4 text-sm text-neutral-700">
                <strong>{loc === 'en' ? 'Disclaimer:' : 'Sorumluluk Reddi:'}</strong>{' '}
                {loc === 'en'
                  ? 'These calculators are for informational and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for medical decisions.'
                  : 'Bu hesaplayıcılar yalnızca bilgilendirme ve eğitim amaçlıdır. Profesyonel tıbbi tavsiye, teşhis veya tedavinin yerini tutmaz. Tıbbi kararlar için her zaman nitelikli bir sağlık uzmanına danışın.'}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  );
}
