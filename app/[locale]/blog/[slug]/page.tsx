import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Card } from '@/components/ui';
import { Breadcrumbs } from '@/components/layout';
import type { Metadata } from 'next';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { generateSEO } from '@/lib/seo';
import { getPageSlug } from '@/config/pages.config';
import { getBlogPost, blogPosts } from '@/content/blog';
import { Link } from '@/lib/navigation';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = locale as 'en' | 'tr';
  const post = getBlogPost(slug, loc);

  if (!post) {
    return { title: 'Not Found' };
  }

  return generateSEO({
    locale: loc,
    title: post.title[loc],
    description: post.description[loc],
    path: `/${getPageSlug('blog', loc)}/${slug}`,
  });
}

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const post of blogPosts) {
    params.push({ locale: 'en', slug: post.slug });
    params.push({ locale: 'tr', slug: post.slugTr });
  }

  return params;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('blog');
  const loc = locale as 'en' | 'tr';
  const post = getBlogPost(slug, loc);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { label: t('title'), href: `/${getPageSlug('blog', loc)}` },
    { label: post.title[loc] },
  ];

  // Get related articles (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 py-12">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs
            items={breadcrumbs}
            className="mb-6 [&_a]:text-white/80 [&_li]:text-white/60 [&_span]:text-white"
          />
          <h1 className="heading-1 mb-4 text-white">{post.title[loc]}</h1>
          <p className="mb-4 text-lg text-white/80">{post.description[loc]}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {t('publishedOn')}:{' '}
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
        </div>
      </section>

      {/* Article Content */}
      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          <Card className="mb-8">
            <article
              className="prose prose-neutral max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-a:text-primary-600 prose-strong:text-neutral-800 prose-ul:text-neutral-700 prose-ol:text-neutral-700 prose-li:text-neutral-700"
              dangerouslySetInnerHTML={{ __html: post.content[loc] }}
            />
          </Card>

          {/* Tags */}
          <Card className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="h-5 w-5 text-neutral-500" />
              <h3 className="font-semibold text-neutral-700">{t('tags')}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags[loc].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mb-8">
              <h2 className="heading-3 mb-4">{t('relatedArticles')}</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {relatedPosts.map((related) => {
                  const relatedSlug = loc === 'tr' ? related.slugTr : related.slug;
                  return (
                    <Link
                      key={related.slug}
                      href={`/${getPageSlug('blog', loc)}/${relatedSlug}`}
                    >
                      <Card className="h-full transition-shadow hover:shadow-md">
                        <h4 className="mb-2 font-semibold text-neutral-900 line-clamp-2">
                          {related.title[loc]}
                        </h4>
                        <p className="text-sm text-neutral-600 line-clamp-3">
                          {related.description[loc]}
                        </p>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <Link
            href={`/${getPageSlug('blog', loc)}`}
            className="inline-flex items-center gap-2 text-primary-600 transition-colors hover:text-primary-700"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('backToBlog')}
          </Link>
        </div>
      </section>
    </div>
  );
}
