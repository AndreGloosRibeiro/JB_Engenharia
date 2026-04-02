import type { NextConfig } from "next";

// GitHub Pages para "project site" publica em:
// https://<usuario>.github.io/<nome-do-repo>/
// No nosso caso o repo é `JB_Engenharia`, então precisamos que assets fiquem
// carregando corretamente sob esse subpath.
const basePath = "/JB_Engenharia";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // GitHub Pages só serve arquivos estáticos (.html/js/css).
  // Portanto, geramos um build estático para publicar.
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    // Evita otimizações em runtime (não funcionam em export estático).
    unoptimized: true,
  },
};

export default nextConfig;
