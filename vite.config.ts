import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";
import pkg from './package.json';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
          // Could also be a dictionary or array of multiple entry points
          entry: path.resolve(__dirname, 'src/index.ts'),
        },
        rollupOptions: {
            external: Object.keys(pkg.peerDependencies), // files that should not be bundled
            output: {
              interop: 'auto', // the default mode of "default" mimics NodeJS behavior and is different from TypeScript esModuleInterop
              exports: 'named', // 'default' can cause issues when generating CommonJS output that is meant to be interchangeable with ESM output
              preserveModules: true,
              preserveModulesRoot: 'src',
              entryFileNames: ({ name: fileName }) => {
                return `${fileName}.js`;
              }
            }
          }
      },
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
