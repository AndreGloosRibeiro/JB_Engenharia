import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // GitHub Pages só serve arquivos estáticos (.html/js/css).
  // Portanto, geramos um build estático para publicar.
  output: "export",
  images: {
    // Evita otimizações em runtime (não funcionam em export estático).
    unoptimized: true,
  },
};

export default nextConfig;
