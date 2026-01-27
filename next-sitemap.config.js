/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://prohealthcalc.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml', '/en/*', '/tr/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://saglikhesapla.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Determine which domain this path belongs to based on locale
    const isEnglish = !path.startsWith('/tr');
    const domain = isEnglish ? 'https://prohealthcalc.com' : 'https://saglikhesapla.com';

    return {
      loc: `${domain}${path}`,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
