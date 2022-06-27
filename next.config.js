/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
