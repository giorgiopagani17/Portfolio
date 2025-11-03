import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
    ],
  },
  // 🔹 Importantissimo: indica che le risorse statiche vanno servite da root
  assetPrefix: "./",
  // 🔹 Facoltativo ma consigliato: forza percorsi relativi per export statico
  trailingSlash: true,
};

export default nextConfig;
