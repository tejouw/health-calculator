export interface BlogPost {
  slug: string;
  slugTr: string;
  title: { en: string; tr: string };
  description: { en: string; tr: string };
  content: { en: string; tr: string };
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: { en: string; tr: string };
  tags: { en: string[]; tr: string[] };
}
