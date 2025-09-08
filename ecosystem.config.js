module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/var/www/strapi',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
