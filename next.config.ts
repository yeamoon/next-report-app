/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures the app is exported as static files
  basePath: '/next-report-app', // Use the repository name here
  assetPrefix: '/next-report-app/', // Prefix static assets with the repository name
};

module.exports = nextConfig;
