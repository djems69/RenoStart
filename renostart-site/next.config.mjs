/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/RenoStart' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/RenoStart/' : '',
  images: {
    unoptimized: true
  }
}

export default nextConfig
