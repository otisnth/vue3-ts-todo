import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const baseUrl = `${process.env.BASE_URL}` || "/";
// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrl,
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@shared": path.resolve(__dirname, "./src/shared/"),
    },
  },
});
