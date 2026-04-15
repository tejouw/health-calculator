import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import { Heart } from 'lucide-react';
import { categories } from '@/config/categories.config';
import { getPageSlug } from '@/config/pages.config';
import { getCategorySlugByLocale } from '@/lib/categoryMapping';
import type { CategoryId } from '@/types/calculator';

// Top calculators for internal linking - ordered by search volume
const POPULAR_CALCULATOR_LINKS: Array<{
  slug: { en: string; tr: string };
  category: CategoryId;
  label: { en: string; tr: string };
}> = [
  { slug: { en: 'bmi-calculator', tr: 'vucut-kitle-indeksi-hesaplama' }, category: 'body-weight', label: { en: 'BMI Calculator', tr: 'VKİ Hesaplama' } },
  { slug: { en: 'calorie-calculator', tr: 'kalori-hesaplayici' }, category: 'nutrition', label: { en: 'Calorie Calculator', tr: 'Kalori Hesaplama' } },
  { slug: { en: 'ideal-weight-calculator', tr: 'ideal-kilo-hesaplayici' }, category: 'body-weight', label: { en: 'Ideal Weight', tr: 'İdeal Kilo' } },
  { slug: { en: 'body-fat-calculator', tr: 'vucut-yag-orani-hesaplama' }, category: 'body-weight', label: { en: 'Body Fat Calculator', tr: 'Vücut Yağ Oranı' } },
  { slug: { en: 'tdee-calculator', tr: 'tdee-hesaplayici' }, category: 'nutrition', label: { en: 'TDEE Calculator', tr: 'TDEE Hesaplama' } },
  { slug: { en: 'bmr-calculator', tr: 'bmr-hesaplama' }, category: 'nutrition', label: { en: 'BMR Calculator', tr: 'BMR Hesaplama' } },
  { slug: { en: 'due-date-calculator', tr: 'dogum-tarihi-hesaplayici' }, category: 'pregnancy', label: { en: 'Due Date Calculator', tr: 'Doğum Tarihi Hesaplama' } },
  { slug: { en: 'macro-calculator', tr: 'makro-hesaplama' }, category: 'nutrition', label: { en: 'Macro Calculator', tr: 'Makro Hesaplama' } },
  { slug: { en: 'sleep-calculator', tr: 'uyku-hesaplayici' }, category: 'sleep', label: { en: 'Sleep Calculator', tr: 'Uyku Hesaplama' } },
  { slug: { en: 'water-intake-calculator', tr: 'su-ihtiyaci-hesaplama' }, category: 'nutrition', label: { en: 'Water Intake', tr: 'Su İhtiyacı' } },
];

interface FooterProps {
  locale: string;
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tCat = useTranslations('categories');
  const loc = locale as 'en' | 'tr';

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      {/* Popular Calculators - Internal Linking Section */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="container-custom py-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-900">
            {loc === 'en' ? 'Popular Calculators' : 'Popüler Hesaplayıcılar'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {POPULAR_CALCULATOR_LINKS.map((calc) => (
              <Link
                key={calc.slug.en}
                href={`/${getCategorySlugByLocale(calc.category, loc)}/${calc.slug[loc]}`}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
              >
                {calc.label[loc]}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
                  <span className="text-xl font-bold text-white">H</span>
                </div>
                <div className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Sağlık Hesaplayıcı' : 'Health Calculator'}
                </div>
              </div>
              <p className="text-sm text-neutral-600">{t('description')}</p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-900">
                {tNav('categories')}
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => {
                  const catKey = category.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                  return (
                    <li key={category.id}>
                      <Link
                        href={`/${category.slug[loc]}`}
                        className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                      >
                        {tCat(catKey)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-900">
                {locale === 'tr' ? 'Hızlı Linkler' : 'Quick Links'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {tNav('home')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${getPageSlug('blog', loc)}`}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {tNav('blog')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${getPageSlug('about', loc)}`}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {tNav('about')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${getPageSlug('contact', loc)}`}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {tNav('contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-900">
                {locale === 'tr' ? 'Yasal' : 'Legal'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`/${getPageSlug('privacy-policy', loc)}`}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {t('privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${getPageSlug('terms-of-service', loc)}`}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {t('terms')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${getPageSlug('disclaimer', loc)}`}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {t('disclaimer')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-200 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-neutral-600">{t('copyright')}</p>
            <div className="flex items-center gap-1 text-sm text-neutral-600">
              <span>{locale === 'tr' ? 'Sevgiyle yapıldı' : 'Made with'}</span>
              <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-neutral-200 bg-amber-50 py-4">
          <p className="text-center text-xs text-neutral-600">{t('disclaimerText')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
