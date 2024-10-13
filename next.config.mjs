/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sprinter-kidiloski.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'robohash.org',
      },
    ],
  },
};

export default nextConfig;
