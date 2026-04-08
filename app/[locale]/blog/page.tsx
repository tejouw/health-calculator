import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Card } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import type { Metadata } from 'next';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { generateSEO, generateBreadcrumbSchema, generateCollectionPageSchema } from '@/lib/seo';
import { getDomainForLocale } from '@/lib/domain';
import { getPageSlug } from '@/config/pages.config';
import { blogPosts } from '@/content/blog';
import { Link } from '@/lib/navigation';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  return generateSEO({
    locale: locale as 'en' | 'tr',
    title: locale === 'tr' ? 'Sağlık ve Yaşam Blogu' : 'Health & Wellness Blog',
    description:
      locale === 'tr'
        ? 'Bilimsel araştırmalarla desteklenen sağlık, beslenme, fitness ve yaşam kalitesi hakkında uzman makaleleri.'
        : 'Expert articles on health, nutrition, fitness, and wellness backed by scientific research.',
    path: `/${getPageSlug('blog', locale as 'en' | 'tr')}`,
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('blog');
  const loc = locale as 'en' | 'tr';

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const breadcrumbs = [{ label: t('title') }];

  const domain = getDomainForLocale(loc);
  const blogSlug = getPageSlug('blog', loc);
  const pageUrl = `${domain}/${blogSlug}`;

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
              name: t('title'),
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
            name: loc === 'en' ? 'Health & Wellness Blog' : 'Sağlık ve Yaşam Blogu',
            description: loc === 'en'
              ? 'Expert articles on health, nutrition, fitness, and wellness backed by scientific research.'
              : 'Bilimsel araştırmalarla desteklenen sağlık, beslenme, fitness ve yaşam kalitesi hakkında uzman makaleleri.',
            url: pageUrl,
            locale: loc,
            numberOfItems: sortedPosts.length,
          })
        ),
      }}
    />

    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 py-12">
        <div className="container-custom max-w-4xl text-center">
          <Breadcrumbs
            items={breadcrumbs}
            className="mb-6 justify-center [&_a]:text-white/80 [&_li]:text-white/60 [&_span]:text-white"
          />
          <BookOpen className="mx-auto mb-4 h-12 w-12 text-white/80" />
          <h1 className="heading-1 mb-2 text-white">{t('title')}</h1>
          <p className="text-lg text-white/80">{t('subtitle')}</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-2 mb-8">{t('latestPosts')}</h2>

          {sortedPosts.length === 0 ? (
            <p className="text-body text-neutral-500">{t('noArticles')}</p>
          ) : (
            <div className="grid gap-6">
              {sortedPosts.map((post) => {
                const slug = loc === 'tr' ? post.slugTr : post.slug;
                return (
                  <Link
                    key={post.slug}
                    href={`/${getPageSlug('blog', loc)}/${slug}`}
                  >
                    <Card className="transition-shadow hover:shadow-md">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <h3 className="heading-4 mb-2 text-neutral-900 group-hover:text-primary-600">
                            {post.title[loc]}
                          </h3>
                          <p className="mb-3 text-body text-neutral-600 line-clamp-2">
                            {post.description[loc]}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(post.publishedAt).toLocaleDateString(
                                loc === 'tr' ? 'tr-TR' : 'en-US',
                                { year: 'numeric', month: 'long', day: 'numeric' }
                              )}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readingTime[loc]}
                            </span>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {post.tags[loc].slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="hidden h-5 w-5 shrink-0 text-primary-500 sm:block" />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
    </>
  );
}
