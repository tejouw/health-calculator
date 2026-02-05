import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Card } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import type { Metadata } from 'next';
import { Mail, MessageSquare, Clock } from 'lucide-react';
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
        <div className="container-custom max-w-3xl">
          {/* Email Contact */}
          <Card className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="heading-3">{t('email')}</h2>
            </div>
            <p className="mb-4 text-neutral-700">{t('emailDescription')}</p>
            <a
              href={`mailto:${t('emailAddress')}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
            >
              <Mail className="h-5 w-5" />
              {t('emailAddress')}
            </a>
          </Card>

          {/* Response Time */}
          <Card className="mb-8 border-l-4 border-l-blue-500">
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Yanıt Süresi' : 'Response Time'}
                </p>
                <p className="mt-1 text-neutral-700">
                  {locale === 'tr'
                    ? 'Genellikle 24-48 saat içinde yanıt veriyoruz.'
                    : 'We typically respond within 24-48 hours.'}
                </p>
              </div>
            </div>
          </Card>

          {/* Feedback */}
          <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                <MessageSquare className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="heading-3">
                {locale === 'tr' ? 'Geri Bildirim' : 'Feedback'}
              </h2>
            </div>
            <p className="text-neutral-700">
              {locale === 'tr'
                ? 'Sitemizi geliştirmemize yardımcı olmak için önerilerinizi ve geri bildirimlerinizi bekliyoruz. Her türlü soru, öneri veya hata bildirimi için bizimle iletişime geçebilirsiniz.'
                : "We welcome your suggestions and feedback to help us improve our site. Feel free to contact us with any questions, suggestions, or bug reports."}
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
