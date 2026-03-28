import { BlogPost } from './types';
import { article1, article2, article3, article4, article5 } from './articles-part1';
import { article6, article7, article8, article9, article10 } from './articles-part2';

export const blogPosts: BlogPost[] = [
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7,
  article8,
  article9,
  article10,
];

export function getBlogPost(slug: string, locale: 'en' | 'tr'): BlogPost | undefined {
  return blogPosts.find(
    (post) => (locale === 'tr' ? post.slugTr === slug : post.slug === slug)
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug || post.slugTr === slug);
}

export function getAllBlogSlugs(): { slug: string; slugTr: string }[] {
  return blogPosts.map((post) => ({ slug: post.slug, slugTr: post.slugTr }));
}

export { type BlogPost } from './types';
