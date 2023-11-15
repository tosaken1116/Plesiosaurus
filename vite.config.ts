import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        include: ["src/**/*.test.@(tsx|ts)"],
    },
    css: {
        modules: {
            localsConvention: "camelCase",
        },
    },
    plugins: [react(), vanillaExtractPlugin()],
});
