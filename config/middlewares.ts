export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "https://market-assets.strapi.io"],
          "media-src": ["'self'", "data:", "blob:"],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://aloofitness.ir', 'https://www.aloofitness.ir'],
      headers: '*',
      methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
