import { defineConfig } from "vite";

export default defineConfig({
    base: "/8bit-portfolio/",
    build: {
        minify: "terser",
    },
});