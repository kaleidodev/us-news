import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // 对于 Cloudflare Pages：使用标准构建（支持 API 路由）
  // 对于静态导出：改为 output: "export"
  
  // 配置 basePath（如果需要）
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  
  // 优化图片处理
  images: {
    unoptimized: true,
  },
  
  // 并行编译以加快构建（Turbopack 已内置优化）
  experimental: {
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

export default nextConfig;
