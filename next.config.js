/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure React Strict Mode for development
  reactStrictMode: true,
  
  // Enable image optimization with external domains
  images: {
    domains: ['images.unsplash.com'],
  },

  // Skip checks that might cause issues in iCloud environment
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
  // Skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 