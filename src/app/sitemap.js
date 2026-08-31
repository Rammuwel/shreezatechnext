export default function sitemap() {
  const baseUrl = 'https://www.shreezatech.com';
  
  // This array contains all the static routes we confirmed exist in your project
  const staticRoutes = [
    '',
    '/about-us',
    '/contact-us',
    '/locate-us',
    '/careers',
    '/services',
    '/services/ai-and-automation',
    '/services/iot',
    '/services/mobile-app-development',
    '/services/robotics',
    '/services/ux-ui-design',
    '/services/web-development',
    '/solutions',
    '/solutions/digital-learning',
    '/solutions/education',
    '/solutions/finance',
    '/solutions/fintech',
    '/solutions/healthcare',
    '/solutions/immersivetech',
    '/solutions/insurtech',
    '/solutions/manufacturing',
    '/solutions/real-estate',
    '/solutions/retail',
    '/platforms/axle',
    '/platforms/migoto-ai',
    '/platforms/statim',
    '/blogs',
    '/portfolio'
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    // Give homepage the highest priority, and other pages high priority
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
