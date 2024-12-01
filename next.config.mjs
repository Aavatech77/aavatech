/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "blog.investiaa.com",
      },
    ],
  },
};

export default nextConfig;
