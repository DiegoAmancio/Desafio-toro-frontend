/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    OAUTH_GOOGLE_ID: process.env.OAUTH_GOOGLE_ID,
  },
};

module.exports = nextConfig;
