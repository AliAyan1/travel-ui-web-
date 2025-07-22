/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,  // <-- Add this line
  },
  // output: 'export',   // If you need static export, keep this
};

module.exports = nextConfig;
