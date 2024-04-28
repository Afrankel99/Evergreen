module.exports = {
  policy: [
    {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/maintenance/',
        '/thank-you/',
        '/preview/',
        '/dev/*',
        '/offline-plugin-app-shell-fallback/',
        '/404/',
        '/404.html',
        '/template/*',
      ],
    },
  ],
};
