/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ad-dev.net/',
  generateRobotsTxt: true,
  sitemapSize: 7000, // จำนวน URL สูงสุดในแต่ละ Sitemap
  transform: async (config, path) => {
    const images = [];

    if (path === '/') {
      images.push({
        loc: 'https://www.ad-dev.net/img/01.webp',
        caption: 'Image Caption 1',
        title: 'Image Title 1',
      });
      images.push({
        loc: 'https://www.ad-dev.net/img/facebook_ads.webp',
        caption: 'Image Caption 2',
        title: 'Image Title 2',
      });
    }

    return {
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.6,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      images: images,
    };
  },
};
