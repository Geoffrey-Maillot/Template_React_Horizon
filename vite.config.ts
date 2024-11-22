import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components/index.ts"),
      "@pages": path.resolve(__dirname, "./src/pages/index.ts"),
      "@interface": path.resolve(__dirname, "./src/interface/index.ts"),
      "@data-access": path.resolve(
        __dirname,
        "./src/services/data-access/index.ts",
      ),
      "@hook": path.resolve(__dirname, "./src/hook/index.ts"),
      "@hoc": path.resolve(__dirname, "./src/hoc/index.ts"),
      "@layout": path.resolve(__dirname, "./src/layout/index.ts"),
      "@context": path.resolve(__dirname, "./src/context/index.ts"),
      "@utils": path.resolve(__dirname, "./src/utils/index.ts"),
      "@constant": path.resolve(__dirname, "./src/constant/index.ts"),
    },
  },
});
