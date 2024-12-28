/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures the app is exported as static files
  basePath: '/next-report-app', // Use the repository name here
  assetPrefix: '/next-report-app',
  
};

module.exports = nextConfig;
