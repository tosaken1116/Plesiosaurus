import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'
import pkg from './package.json'
import path from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es'],
    },
    // target will be ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
    outDir: path.resolve(__dirname, `./dist`),
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies), // files that should not be bundled
      output: {
        interop: 'auto', // the default mode of "default" mimics NodeJS behavior and is different from TypeScript esModuleInterop
        exports: 'named', // 'default' can cause issues when generating CommonJS output that is meant to be interchangeable with ESM output
        // preserveModules: true, // preserve the directory structure of the source code(in order to preserve module tree structure)
        preserveModulesRoot: 'src',
        entryFileNames: ({ name: fileName }) => {
          // ChunkInfo will be passed
          return `${fileName}.js`
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./**/*.test.@(tsx|ts)'],
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  plugins: [react(), vanillaExtractPlugin(), libInjectCss()],
})
