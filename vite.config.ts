import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'
import pkg from './package.json'
import path from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import { type } from './types/src/libs/animation/variant/Shake/index'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  build: {
    lib: {
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
        entryFileNames: ({ name: fileName }) => {
          // ChunkInfo will be passed
          return `${fileName}.js`
        },
      },
      input: Object.fromEntries(
        glob.sync('src/**/!(*.stories).{ts,tsx}').map((file) => {
          return [
            relative('src', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]
        }),
      ),
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
