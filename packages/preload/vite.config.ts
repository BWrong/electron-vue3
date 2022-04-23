import { builtinModules } from 'module'
import { defineConfig } from 'vite'
import pkg from '../../package.json'

export default defineConfig({
  root: __dirname,
  envDir: process.cwd(),
  build: {
    outDir: '../../dist/preload',
    emptyOutDir:true,
    lib: {
      entry: 'index.ts',
      formats: ['cjs'],
      fileName: () => '[name].cjs',
    },
    minify: process.env./* from mode option */NODE_ENV === 'production',
    // https://github.com/caoxiemeihao/electron-vue-vite/issues/61
    sourcemap: false,
    rollupOptions: {
      external: [
        'electron',
        // ...builtinModules,
        ...builtinModules.flatMap(p => [p, `node:${p}`]),
        ...Object.keys(pkg.dependencies || {}),
      ],
    },
  },
})
