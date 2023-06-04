import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macros from "babel-plugin-macros";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macros()],
  resolve: {
    alias: [
      {
        find: "@svg",
        replacement: "/public/svg",
      },
      {
        find: "@images",
        replacement: "/src/assets/images",
      },
      {
        find: "@data",
        replacement: "/src/assets/data",
      },
      {
        find: "@components",
        replacement: "/src/components",
      },
      {
        find: "@pages",
        replacement: "/src/pages",
      },
      {
        find: "@sections",
        replacement: "/src/sections",
      },
      {
        find: "@utils",
        replacement: "/src/utils",
      },
      {
        find: "@schemas",
        replacement: "/src/schemas",
      },
      {
        find: "@styles",
        replacement: "/src/styles",
      },
    ],
  },
});
