/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure React Strict Mode for development
  reactStrictMode: true,
  
  // Prevent inconsistencies across builds
  experimental: {
    // Force consistent chunking to prevent issues across production/development
    optimizePackageImports: ['@headlessui/react', 'framer-motion', 'react-icons'],
  },

  // Enable image optimization with external domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },

  // Configure webpack to improve caching and reduce build issues
  webpack: (config, { dev, isServer }) => {
    // Optimize caching strategy
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    };

    return config;
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 