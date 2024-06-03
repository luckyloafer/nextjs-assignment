/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},

  images: {
    remotePatterns: [
      {
        
        hostname: "images.unsplash.com",
        
      },
      {
        hostname:"https://media.licdn.com"
      }
    ],
  },
};


export default nextConfig;
