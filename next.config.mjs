import nextPWA from 'next-pwa';

const isProd = process.env.NODE_ENV === 'production';
const DEV_API_END_PORT_URL = process.env.DEV_API_END_PORT_URL || '';

const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'api.ts'],
  // not sure why antd-style cause multi ThemeProvider instance
  // So we need to transpile it to lib mode
  transpilePackages: ['@lobehub/ui', 'antd-style'],
  webpack(config) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },

  async rewrites() {
    return [
      {
        source: '/api/openai/chat-dev',
        destination: `${DEV_API_END_PORT_URL}/api/openai/chat`,
      },
      {
        source: '/api/openai/models-dev',
        destination: `${DEV_API_END_PORT_URL}/api/openai/models`,
      },
      {
        source: '/api/plugins-dev',
        destination: `${DEV_API_END_PORT_URL}/api/plugins`,
      },
    ];
  },
};

export default isProd ? withPWA(nextConfig) : nextConfig;
