const nextConfig = {
  images: {
    domains: ["icons8.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false
      }
    }
    return config
  },
  babel: {
    presets: ['next/babel'],
  },
}


module.exports = nextConfig
