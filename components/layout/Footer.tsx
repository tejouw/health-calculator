import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import { Heart } from 'lucide-react';
import { categories } from '@/config/categories.config';

interface FooterProps {
  locale: string;
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tCat = useTranslations('categories');

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
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
                        href={`/${category.slug[locale as 'en' | 'tr']}`}
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
                    href="/about"
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {tNav('about')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
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
                    href="/privacy-policy"
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {t('privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {t('terms')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
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
