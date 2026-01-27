'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/lib/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { translatePath } from '@/lib/pathTranslation';
import { getAlternateDomainUrl } from '@/lib/domain';

interface HeaderProps {
  locale: string;
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const t = useTranslations('navigation');
  const tBrand = useTranslations('branding');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleLanguage = () => {
    const currentLocale = locale as 'en' | 'tr';
    const currentPath = pathname;

    // Translate the path to the new locale (handles calculator slug translation)
    const newLocale = currentLocale === 'tr' ? 'en' : 'tr';
    const translatedPath = translatePath(currentPath, currentLocale, newLocale);

    // Redirect to alternate domain with translated path
    const alternateUrl = getAlternateDomainUrl(currentLocale, translatedPath);
    window.location.href = alternateUrl;
  };

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('categories'), href: '#categories' },
    { name: t('about'), href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
              <span className="text-xl font-bold text-white">H</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-neutral-900">
                {tBrand('siteName')}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:inline-flex"
            >
              <Globe className="h-4 w-4" />
              {locale === 'tr' ? 'EN' : 'TR'}
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden',
          mobileMenuOpen ? 'block' : 'hidden',
          'border-t border-neutral-200 bg-white'
        )}
      >
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
          >
            <Globe className="h-4 w-4" />
            {locale === 'tr' ? t('english') : t('turkish')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
