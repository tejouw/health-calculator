'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Cookie, X } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { getPageSlug } from '@/config/pages.config';

const COOKIE_CONSENT_KEY = 'cookie-consent-accepted';

const content = {
  en: {
    message: 'We use cookies to improve your experience and analyze site traffic. By continuing to use our site, you consent to our use of cookies.',
    accept: 'Accept All',
    decline: 'Essential Only',
    learnMore: 'Learn More',
  },
  tr: {
    message: 'Deneyiminizi iyileştirmek ve site trafiğini analiz etmek için çerezler kullanıyoruz. Sitemizi kullanmaya devam ederek çerez kullanımımıza onay vermiş olursunuz.',
    accept: 'Tümünü Kabul Et',
    decline: 'Yalnızca Gerekli',
    learnMore: 'Daha Fazla Bilgi',
  },
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale() as 'en' | 'tr';
  const t = content[locale];

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'all');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white p-4 shadow-lg md:p-6">
      <div className="container-custom">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
            <p className="text-sm text-neutral-700">
              {t.message}{' '}
              <Link
                href={`/${getPageSlug('privacy-policy', locale)}`}
                className="font-medium text-primary-600 underline hover:text-primary-700"
              >
                {t.learnMore}
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
            >
              {t.decline}
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
