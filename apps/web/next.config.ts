import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  transpilePackages: ['@lesenelir/ui'],
  async rewrites() {
    return [
      {
        source: '/storybook/',
        destination: '/storybook/index.html',
      },
    ]
  },
}

export default nextConfig
