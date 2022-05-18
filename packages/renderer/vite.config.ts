import { fileURLToPath, URL } from 'url';
import { resolve } from 'path';
import { builtinModules } from 'module';
import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteResolve, { lib2esm } from 'vite-plugin-resolve';
import { createHtmlPlugin } from 'vite-plugin-html';
// import electronRenderer from 'vite-plugin-electron/renderer';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import pkg from '../../package.json';
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  const IS_PRODUCTION = mode === 'production';
  // 读取环境配置
  const { VITE_DEV_SERVER_HOST, VITE_DEV_SERVER_PORT } = loadEnv(mode, process.cwd());
  return defineConfig({
    mode: process.env.NODE_ENV,
    root: __dirname,
    envDir: process.cwd(),
    plugins: [
      vue({
        reactivityTransform: true // 开启语法糖转换
      }), // 支持jsx
      vueJsx(),
      // 自动导入组件
      Components({
        dts: 'src/components.d.ts',
        dirs: ['src/components'],
        extensions: ['vue', 'tsx'],
        directoryAsNamespace: false,
        resolvers: [NaiveUiResolver()]
      }),
      // electronRenderer(),
      viteResolve(
        /**
         * Here you can specify other modules
         * 🚧 You have to make sure that your module is in `dependencies` and not in the` devDependencies`,
         *    which will ensure that the electron-builder can package it correctly
         */
        {
          // If you use the following modules, the following configuration will work
          // What they have in common is that they will return - ESM format code snippets

          // ESM format string
          'electron-store': 'export default require("electron-store");',
          // Use lib2esm() to easy to convert ESM
          // Equivalent to
          /**
           * sqlite3: () => `
           * const _M_ = require('sqlite3');
           * const _D_ = _M_.default || _M_;
           * export { _D_ as default }
           * `
           */
          sqlite3: lib2esm('sqlite3', { format: 'cjs' }),
          serialport: lib2esm(
            // CJS lib name
            'serialport',
            // export memebers
            ['SerialPort', 'SerialPortMock'],
            { format: 'cjs' }
          )
        }
      ),
      createHtmlPlugin({
        minify: true,
        entry: '/src/main.ts',
        inject: {
          data: {
            title: pkg.name
          }
        }
      })
    ],
    base: './',
    build: {
      sourcemap: false,
      outDir: '../../dist/renderer',
      emptyOutDir: true,
      rollupOptions: {
        external: [...builtinModules, ...Object.keys(pkg.dependencies || {})]
      }
    },
    server: {
      host: VITE_DEV_SERVER_HOST,
      port: Number(VITE_DEV_SERVER_PORT)
    },
    resolve: {
      alias: {
        // 别名
        '@': createPath('./src'),
        root: resolve(process.cwd())
      }
    },
    css: {
      devSourcemap: true, // 开启css sourcemap
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            hack: `true;@import "${resolve(__dirname, './src/assets/styles/_variable.less')}"`
          }
        }
      }
    }
  });
};
function createPath(url: string, metaUrl = import.meta.url) {
  return fileURLToPath(new URL(url, metaUrl));
}
