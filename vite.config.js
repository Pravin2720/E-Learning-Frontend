import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";

const config = defineConfig({
  build: { outDir: "build" },
  optimizeDeps: {},
  plugins: [react(), jsconfigPaths()],
});

export default config;
