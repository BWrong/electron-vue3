import path from 'path';
import { builtinModules } from 'module';
import { defineConfig } from 'vite';
import pkg from '../../package.json';

export default defineConfig({
  root: __dirname,
  envDir: process.cwd(),
  resolve: {
    alias: {
      root: path.resolve(process.cwd())
    }
  },
  build: {
    outDir: '../../dist/main',
    lib: {
      entry: 'index.ts',
      formats: ['cjs'],
      fileName: () => '[name].cjs'
    },
    emptyOutDir:true,
    minify: process.env.NODE_ENV === 'production',
    sourcemap: false,
    rollupOptions: {
      external: [
        'electron',
        'electron-devtools-installer',
        ...builtinModules,
        ...Object.keys(pkg.dependencies || {})
      ]
    }
  }
});
