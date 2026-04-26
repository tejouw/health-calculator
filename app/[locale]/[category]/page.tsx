import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getCategoryById, getCategoryBySlug, categories } from '@/config/categories.config';
import { getCalculatorsByCategory } from '@/lib/calculatorRegistry';
import { Card, Badge } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import { Link } from '@/lib/navigation';
import { getIcon } from '@/lib/iconUtils';
import { Activity, Calculator, ArrowRight } from 'lucide-react';
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
              <p className="mt-2 text-sm font-medium text-primary-600">
                {loc === 'en'
                  ? `${calculators.length} free calculators available`
                  : `${calculators.length} ücretsiz hesaplayıcı mevcut`}
              </p>
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
                    <Card hoverable className="group flex h-full flex-col transition-all hover:shadow-hard hover:border-primary-200">
                      <div className="mb-4 flex items-start justify-between">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} transition-transform group-hover:scale-110`}
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
                      <p className="mb-4 flex-1 text-sm text-neutral-600">
                        {calc.description[locale as 'en' | 'tr']}
                      </p>
                      <div className="flex items-center gap-1 text-sm font-medium text-primary-600 opacity-0 transition-opacity group-hover:opacity-100">
                        <span>{loc === 'en' ? 'Calculate Now' : 'Hemen Hesapla'}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
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
                  ? `${calculators.length} ${category.name.en.toLowerCase()} calculators in this category. Each one names the formula it uses and the guideline or study the formula came from — so you can verify the math instead of trusting a black box. Calculations run in your browser; nothing you enter is sent anywhere.`
                  : `Bu kategoride ${calculators.length} adet ${category.name.tr.toLowerCase()} hesaplayıcısı var. Her biri kullandığı formülü ve formülün alındığı kılavuzu ya da çalışmayı belirtir — yani kara kutuya güvenmek yerine matematiği doğrulayabilirsiniz. Hesaplamalar tarayıcınızda yapılır; girdiğiniz hiçbir şey hiçbir yere gönderilmez.`}
              </p>
              <p className="text-body mb-6">
                {loc === 'en'
                  ? `${category.name.en.toLowerCase().charAt(0).toUpperCase() + category.name.en.toLowerCase().slice(1)} numbers are screening tools, not diagnoses. They are useful for spotting outliers and tracking changes over time, less useful for telling you what to do about a borderline result. For that, take the number to a clinician who can read it in the context of your full history.`
                  : `${category.name.tr} sayıları teşhis değil tarama araçlarıdır. Aykırı değerleri yakalamak ve zaman içindeki değişiklikleri takip etmek için yararlıdır; sınırda bir sonuç hakkında ne yapmanız gerektiğini söylemek konusunda daha az yararlıdır. Bunun için sayıyı, geçmişinizin tamamı ışığında okuyabilecek bir hekime götürün.`}
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

              <div className="mt-8 rounded-lg bg-primary-50 p-4 text-sm text-neutral-700">
                <strong>{loc === 'en' ? 'Disclaimer:' : 'Sorumluluk Reddi:'}</strong>{' '}
                {loc === 'en'
                  ? 'These calculators are for self-education. They are not a diagnosis and they do not replace a clinician who knows your medical history. If a result concerns you, see a doctor.'
                  : 'Bu hesaplayıcılar kendi kendinize bilgi edinmeniz içindir. Bir teşhis değildir ve tıbbi geçmişinizi bilen bir hekimin yerini tutmaz. Bir sonuç sizi endişelendiriyorsa bir doktora görünün.'}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  );
}
