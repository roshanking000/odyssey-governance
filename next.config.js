/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true
  },
  webpack: function (config, options) {
    config.experiments = { 
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  }
}

module.exports = nextConfig
