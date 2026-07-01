/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  webpack: (config) => {
    config.cache = false;
    return config;
  },

  images: {
    unoptimized: true
  },

  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
