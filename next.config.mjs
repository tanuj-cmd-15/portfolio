/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Ensure public files are copied correctly
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: false,
};

export default nextConfig;
