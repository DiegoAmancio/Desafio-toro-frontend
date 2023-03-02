/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
