/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resizer.glanacion.com",
      },
    ],
  },
};

export default nextConfig;
