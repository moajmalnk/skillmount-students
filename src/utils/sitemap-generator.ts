/**
 * Sitemap Generator Utility
 * Generates dynamic sitemap.xml for better SEO
 */

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urlEntries = urls.map(url => {
    const { loc, lastmod, changefreq, priority } = url;
    return `
  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${priority !== undefined ? `<priority>${priority}</priority>` : ''}
  </url>`;
  }).join('');

  return `${xmlHeader}\n${urlsetOpen}${urlEntries}\n${urlsetClose}`;
};

export const defaultSitemapUrls: SitemapUrl[] = [
  {
    loc: 'https://students.moajmalnk.in',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: 1.0
  },
    {
      loc: 'https://students.moajmalnk.in/students',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: 'https://students.moajmalnk.in/faq',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: 'https://students.moajmalnk.in/materials',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    loc: 'https://students.moajmalnk.in/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.6
  }
];

/**
 * Generate robots.txt content
 */
export const generateRobotsTxt = (sitemapUrl: string = 'https://students.moajmalnk.in/sitemap.xml'): string => {
  return `# Robots.txt for SkillMount Students
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

# Sitemap
Sitemap: ${sitemapUrl}

# Crawl-delay
Crawl-delay: 1`;
};

/**
 * SEO-friendly URL slug generator
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Generate Open Graph image URL with dynamic text
 */
export const generateOGImageUrl = (params: {
  title: string;
  subtitle?: string;
  theme?: 'light' | 'dark';
}): string => {
  const { title, subtitle, theme = 'light' } = params;
    const baseUrl = 'https://students.moajmalnk.in/api/og';
  const queryParams = new URLSearchParams({
    title,
    ...(subtitle && { subtitle }),
    theme
  });
  
  return `${baseUrl}?${queryParams.toString()}`;
};

/**
 * Calculate reading time for content
 */
export const calculateReadingTime = (text: string, wordsPerMinute: number = 200): number => {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

/**
 * Generate breadcrumb JSON-LD
 */
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * Generate FAQ Schema
 */
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Generate Person Schema for Student Profiles
 */
export const generatePersonSchema = (person: {
  name: string;
  email?: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  skills?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": person.name,
    ...(person.email && { "email": person.email }),
    ...(person.url && { "url": person.url }),
    ...(person.image && { "image": person.image }),
    ...(person.jobTitle && { "jobTitle": person.jobTitle }),
    ...(person.skills && { "knowsAbout": person.skills })
  };
};

