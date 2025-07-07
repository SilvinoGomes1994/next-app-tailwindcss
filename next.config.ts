import type { NextConfig } from "next";

const isProd= process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',           // exportação estática
  reactStrictMode: true,      // boa prática
  trailingSlash: true,        // importante para exportação funcionar corretamente
  experimental: {
    typedRoutes: true,        // suporte a rotas tipadas no App Router
  },
  images: {
    unoptimized: true,        // necessário para exportação estática
  },
  basePath: isProd ? '/next-app-tailwindcss' : '',
  assetPrefix:  isProd ? '/next-app-tailwindcss' : '',
};

export default nextConfig;
