import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // 启用静态导出以加快构建速度
  output: "export",
  
  // 配置 basePath 用于 GitHub Pages
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  
  // 优化图片处理
  images: {
    unoptimized: true,
  },
  
  // 并行编译以加快构建
  experimental: {
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  
  // 构建优化
  compress: true,
  swcMinify: true,
};

export default nextConfig;
