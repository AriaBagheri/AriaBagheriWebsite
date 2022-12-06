/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: [
        "www.s3.ariabagheri.com"
    ]
  }
}

module.exports = nextConfig
