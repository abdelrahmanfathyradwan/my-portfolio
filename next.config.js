/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // تجاهل API routes أثناء البناء
  skipTrailingSlashRedirect: true,
  // تعطيل API routes للتصدير الثابت
  experimental: {
    outputFileTracingExcludes: {
      '*': ['node_modules/**/@aws-sdk/**']
    }
  }
}

// تجاهل API routes في التصدير
if (process.env.NODE_ENV === 'production') {
  nextConfig.experimental = {
    ...nextConfig.experimental,
    outputFileTracingExcludes: {
      ...nextConfig.experimental?.outputFileTracingExcludes,
      '/api/**': ['**/*']
    }
  }
}

module.exports = nextConfig