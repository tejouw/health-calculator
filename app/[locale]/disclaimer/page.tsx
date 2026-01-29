import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Card } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import type { Metadata } from 'next';
import { AlertTriangle, Stethoscope, Phone, Shield, Scale, Users } from 'lucide-react';

interface DisclaimerPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: DisclaimerPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'disclaimer' });

  return {
    title: t('title'),
    description: t('intro'),
  };
}

export default async function DisclaimerPage({ params }: DisclaimerPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('disclaimer');

  const sections = [
    {
      icon: AlertTriangle,
      title: t('warning'),
      content: t('warningText'),
      color: 'text-red-600',
      bg: 'bg-red-100',
      important: true,
    },
    {
      icon: Stethoscope,
      title: t('consultation'),
      content: t('consultationText'),
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      important: true,
    },
    {
      icon: Phone,
      title: t('emergency'),
      content: t('emergencyText'),
      color: 'text-orange-600',
      bg: 'bg-orange-100',
      important: true,
    },
    {
      icon: Shield,
      title: t('accuracy'),
      content: t('accuracyText'),
      color: 'text-purple-600',
      bg: 'bg-purple-100',
      important: false,
    },
    {
      icon: Scale,
      title: t('liability'),
      content: t('liabilityText'),
      color: 'text-gray-600',
      bg: 'bg-gray-100',
      important: false,
    },
    {
      icon: Users,
      title: t('variability'),
      content: t('variabilityText'),
      color: 'text-teal-600',
      bg: 'bg-teal-100',
      important: false,
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
          <p className="text-body text-neutral-600">{t('intro')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          {/* Important Notice */}
          <Card className="mb-8 border-l-4 border-l-red-500 bg-red-50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-6 w-6 text-red-600" />
              <div>
                <h2 className="mb-2 text-lg font-bold text-red-900">
                  {locale === 'tr' ? 'ÖNEMLİ UYARI' : 'IMPORTANT WARNING'}
                </h2>
                <p className="text-red-800">
                  {locale === 'tr'
                    ? 'Bu hesaplayıcılar tıbbi tavsiye, teşhis veya tedavi yerine geçmez. Sağlık sorunlarınız için mutlaka bir sağlık profesyoneline danışın.'
                    : 'These calculators do not replace medical advice, diagnosis, or treatment. Always consult a healthcare professional for health concerns.'}
                </p>
              </div>
            </div>
          </Card>

          {/* Sections */}
          {sections.map((section, index) => (
            <Card
              key={index}
              className={`mb-6 ${section.important ? 'border-l-4 border-l-amber-500' : ''}`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${section.bg}`}>
                  <section.icon className={`h-5 w-5 ${section.color}`} />
                </div>
                <h2 className="heading-3">{section.title}</h2>
              </div>
              <p className="text-body leading-relaxed">{section.content}</p>
            </Card>
          ))}

          {/* Final Note */}
          <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
            <p className="text-center text-lg font-semibold text-neutral-900">
              {locale === 'tr'
                ? 'Sağlığınız için en doğru bilgiyi, mutlaka bir sağlık profesyonelinden alın.'
                : 'For accurate information about your health, always consult a healthcare professional.'}
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
