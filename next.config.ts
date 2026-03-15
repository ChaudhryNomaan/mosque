/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This creates a 'out' folder for mobile
  images: { unoptimized: true } // Native apps don't use the Next.js image server
};
export default nextConfig;