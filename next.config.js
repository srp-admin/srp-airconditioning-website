/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal configuration for stability
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
