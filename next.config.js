/** @type {import('next').NextConfig} */
const { withContentCollections } = require('@content-collections/next');
const withNextIntl = require('next-intl/plugin')('./app/lib/i18n.ts');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/s2/favicons',
      },
    ],
  },
};

module.exports = withNextIntl(withContentCollections(nextConfig));
