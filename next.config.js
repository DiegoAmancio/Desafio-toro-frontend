/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/carteira',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
