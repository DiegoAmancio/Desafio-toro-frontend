/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    OAUTH_GOOGLE_ID: process.env.OAUTH_GOOGLE_ID,
    TOKEN_NAME: process.env.TOKEN_NAME,
  },
};

module.exports = nextConfig;
