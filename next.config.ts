import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // exportação estática
  distDir: 'out',             // pasta de build (opcional)
  reactStrictMode: true,      // boa prática
  trailingSlash: true,        // importante para exportação funcionar corretamente
  experimental: {
    typedRoutes: true,        // suporte a rotas tipadas no App Router
  },
  images: {
    unoptimized: true,        // necessário para exportação estática
  },
};

export default nextConfig;
