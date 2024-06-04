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
        hostname: "https://media.licdn.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/api/linkedin/authorize',
        destination: `https://linkedin.com/oauth/v2/authorization?client_id=${process.env.CLIENT_ID}&response_type=code&scope=${process.env.SCOPE}&redirect_uri=${process.env.OAUTH2_REDIRECT_URL}`,
        permanent: false,
        basePath: false
      },
    ]
  },
};

export default nextConfig;
