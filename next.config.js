/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s.gravatar.com", "lh3.googleusercontent.com"],
  },
  env: {
    IVAO_API_KEY: "B4bUrtJwvBSt1ohebDUV4ypqiiKqRk24",
    IVAO_BASE_API_URL: "https://api.ivao.aero/v2",
    MONGODB_URI: "mongodb+srv://website:Oq6gpTO40f8LVp5V@latamargvirtualcluster.wbs41.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
