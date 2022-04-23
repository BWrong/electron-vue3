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
    emptyOutDir:true,
    lib: {
      entry: 'index.ts',
      formats: ['cjs'],
      fileName: () => '[name].cjs'
    },
    minify: process.env.NODE_ENV === 'production',
    sourcemap: true,
    rollupOptions: {
      external: [
        'electron',
        'electron-devtools-installer',
        // ...builtinModules,
        ...builtinModules.flatMap(p => [p, `node:${p}`]),
        ...Object.keys(pkg.dependencies || {})
      ]
    }
  }
});
