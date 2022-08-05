/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['rl-uk2.azureedge.net'],
  },
}

module.exports = nextConfig
