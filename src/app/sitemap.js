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

  // The links you specifically want Google to show as Sitelinks
  const highPriorityRoutes = [
    '/services',
    '/solutions',
    '/about-us',
    '/contact-us',
    '/services/web-development',
    '/services/mobile-app-development'
  ];

  return staticRoutes.map((route) => {
    let priority = 0.5; // Default low priority for random pages (like retail, manufacturing)
    
    if (route === '') {
      priority = 1.0; // Homepage is always highest
    } else if (highPriorityRoutes.includes(route)) {
      priority = 0.9; // Tell Google these are the most important sub-pages
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: priority,
    };
  });
}
