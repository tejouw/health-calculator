import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Breadcrumbs } from '@/components/layout';
import { Card } from '@/components/ui';
import { ContactForm } from '@/components/contact/ContactForm';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { getPageSlug } from '@/config/pages.config';
import { Mail, Clock, Globe } from 'lucide-react';

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

  const contactInfo = [
    {
      icon: Mail,
      label: locale === 'tr' ? 'E-posta' : 'Email',
      value: 'contact@prohealthcalc.com',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: Clock,
      label: locale === 'tr' ? 'Yanıt Süresi' : 'Response Time',
      value: locale === 'tr' ? '24-48 saat içinde' : 'Within 24-48 hours',
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      icon: Globe,
      label: locale === 'tr' ? 'Diller' : 'Languages',
      value: locale === 'tr' ? 'Türkçe & İngilizce' : 'English & Turkish',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
  ];

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
          {/* Contact Info Cards */}
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {contactInfo.map((info, index) => (
              <Card key={index} className="flex items-center gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${info.bg}`}>
                  <info.icon className={`h-5 w-5 ${info.color}`} />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">{info.label}</div>
                  <div className="font-medium text-neutral-900">{info.value}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
