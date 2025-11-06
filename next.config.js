/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // تعطيل ESLint أثناء البناء
  eslint: {
    ignoreDuringBuilds: true,
  },
  // تعطيل TypeScript checking أثناء البناء
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig