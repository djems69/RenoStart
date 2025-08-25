/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/RenoStart' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/RenoStart/' : '',
  images: {
    unoptimized: true
  },
  // Désactiver temporairement les règles ESLint pour le déploiement
  eslint: {
    ignoreDuringBuilds: true,
  }
}

export default nextConfig
