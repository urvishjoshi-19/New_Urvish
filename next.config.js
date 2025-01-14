/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    domains: ['localhost', 'your-production-domain.com'], // Add your production domain here
    deviceSizes: [640, 768, 1024, 1280, 1600], // Optional: Define responsive sizes
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'), // Alias for accessing components
      '@images': path.resolve(__dirname, 'public/images'), // Alias for accessing images
    };
    return config;
  },
};

module.exports = nextConfig;
