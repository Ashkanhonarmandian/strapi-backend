module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),

  // Required for sessions/admin
  app: {
    keys: env.array('APP_KEYS'),
  },

  // Optional: set when you have a public URL (e.g., https://api.yourdomain.com)
  url: env('PUBLIC_URL'),
});
