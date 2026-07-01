/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    turbo: false
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  }
};

module.exports = nextConfig;
