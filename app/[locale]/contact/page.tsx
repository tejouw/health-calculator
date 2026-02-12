import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Breadcrumbs } from '@/components/layout';
import { ContactForm } from '@/components/contact/ContactForm';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { getPageSlug } from '@/config/pages.config';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  const alternateLocale = locale === 'en' ? 'tr' : 'en';

  return generateSEO({
    title: t('title'),
    description: t('subtitle'),
    locale: locale as 'en' | 'tr',
    path: `/${getPageSlug('contact', locale as 'en' | 'tr')}`,
    alternatePath: `/${getPageSlug('contact', alternateLocale as 'en' | 'tr')}`,
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('contact');

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-custom py-8">
          <Breadcrumbs
            items={[
              {
                label: t('title'),
              },
            ]}
            className="mb-4"
          />
          <h1 className="heading-1 mb-2">{t('title')}</h1>
          <p className="text-body text-lg text-neutral-600">{t('subtitle')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
