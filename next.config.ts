import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   // Exportação estática
  reactStrictMode: true,
  trailingSlash: true, // adiciona / ao final das URLs (recomendado para exportação)
  // Ocultar o logotipo do Next na minha página
  devIndicators: false,
  images: { unoptimized: true }
};

export default nextConfig;
