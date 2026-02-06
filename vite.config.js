import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// 仅引入需要的模块，实现@别名
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 直接实现@ -> src，无需定义__dirname，最简洁
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/bold-genius-show/", // 构建/预览的核心配置，保证IP访问无404
  server: {
    open: true, // 开发环境启动自动打开浏览器，可选
    port: 8080, // 开发环境端口，可选
  },
  preview: {
    open: true, // 预览环境启动自动打开浏览器，核心！之前没加这个可能导致"打不开"
    port: 8080, // 和package.json的preview端口一致
    host: "0.0.0.0", // 和package.json一致，暴露局域网
  },
});
