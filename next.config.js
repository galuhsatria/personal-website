/** @type {import('next').NextConfig} */
const { withContentCollections } = require("@content-collections/next");

const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = withContentCollections(nextConfig);
