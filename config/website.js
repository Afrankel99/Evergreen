module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Evergreen', // Default Site Title used for SEO & PWA
  titleTemplate: `%s - Evergreen`, // Title Template
  description: `We are a small business, creating unique bespoke floral designs. Our little flower studio is located in North Parramatta, and we are excited to provide you with specialized quality bouquets for any occasion.`,
  siteName: 'Evergreen', // Sitename for Facebook
  siteLanguage: 'en', // Language Tag on <html> element
  banner: 'src/images/open-graph.jpg', // Default OpenGraph image
  ogLanguage: 'en_AU', // Facebook Language
  socialLinks: ['https://www.instagram.com/evergreen_flowerstudio/'], // Array of social links (facebook, insta, etc)
  // JSONLD / Manifest
  icon: 'src/images/favicon-light-mode.png', // Used for manifest favicon, splash screen, and icon generation
  shortName: 'Evergreen', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Evergreen Studio', // Author for schemaORGJSONLD
  themeColor: '#0C1924', // PWA Icon background & address bar colour if installed on desktop
  backgroundColor: '#0C1924', // PWA colour shown before styles and content loads, should match the background-color CSS property in the site’s stylesheet
};
