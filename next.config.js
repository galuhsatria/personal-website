/** @type {import('next').NextConfig} */
const { withContentCollections } = require('@content-collections/next');
const withNextIntl = require('next-intl/plugin')('./app/lib/i18n.ts');

const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
};

module.exports = withNextIntl(withContentCollections(nextConfig));
