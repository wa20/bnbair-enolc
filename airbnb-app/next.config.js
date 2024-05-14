const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
        images: {
            domains: ['links.papareact.com']
        },
        webpack: (config, { defaultLoaders }) => {
            config.resolve.alias['@'] = path.resolve(__dirname, 'src/app');
            return config;
          },
  }
   
module.exports = nextConfig