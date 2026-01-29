import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Card } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import type { Metadata } from 'next';
import { Target, Heart, Shield, Zap } from 'lucide-react';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('title'),
    description: t('missionText'),
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');

  const features = [
    {
      icon: Heart,
      title: t('feature1'),
      color: 'text-red-600',
      bg: 'bg-red-100',
    },
    {
      icon: Shield,
      title: t('feature2'),
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: Zap,
      title: t('feature3'),
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
    },
    {
      icon: Target,
      title: t('feature4'),
      color: 'text-green-600',
      bg: 'bg-green-100',
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
          <h1 className="heading-1">{t('title')}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          {/* Mission */}
          <Card className="mb-8">
            <h2 className="heading-3 mb-4">{t('mission')}</h2>
            <p className="text-body text-lg leading-relaxed">{t('missionText')}</p>
          </Card>

          {/* Story */}
          <Card className="mb-8">
            <h2 className="heading-3 mb-4">{t('story')}</h2>
            <p className="text-body text-lg leading-relaxed">{t('storyText')}</p>
          </Card>

          {/* Commitment */}
          <Card className="mb-8">
            <h2 className="heading-3 mb-4">{t('commitment')}</h2>
            <p className="text-body text-lg leading-relaxed">{t('commitmentText')}</p>
          </Card>

          {/* Why Choose Us */}
          <Card>
            <h2 className="heading-3 mb-6">{t('whyChooseUs')}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <p className="flex-1 text-neutral-700">{feature.title}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
