# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 0.0.2 (2022-04-23)


### Features

* 加入预加载动画 ([0ea62ef](https://github.com/BWrong/electron-vue3/commit/0ea62ef46a338a1e3606911f285f657abfd825a0))
* add inspector node debug support ([9c90249](https://github.com/BWrong/electron-vue3/commit/9c902494a105273b6185665563c3829c1f0b3bae))
* add vscode debug file ([656519c](https://github.com/BWrong/electron-vue3/commit/656519cd681658073d158e4a99452277aa9be44d))
* app.on('activate') handle ([b62d5fa](https://github.com/BWrong/electron-vue3/commit/b62d5fae8768ff7dca1cf81506a1a5b4883b6397))
* better hot reload preload script ([9eda22f](https://github.com/BWrong/electron-vue3/commit/9eda22f3534274e35cdc95f2600d8e32248b260f))
* **ci:** add github action :hammer: ([c653a73](https://github.com/BWrong/electron-vue3/commit/c653a73a54a018f92081a7d76b82be5b23f4356a))
* **ci:** add github dependabot ([01bcf16](https://github.com/BWrong/electron-vue3/commit/01bcf16392124ff108c0adccf606ea6a48be2086))
* disableHardwareAcceleration on windows 7 ([874b06c](https://github.com/BWrong/electron-vue3/commit/874b06ccdece817c3eca36fd541c2f9c909a79bf))
* expose withPrototype ([cf3fd49](https://github.com/BWrong/electron-vue3/commit/cf3fd496abee14d0483936ea12720f1f17e5c988))
* external dependencies ([fc93d31](https://github.com/BWrong/electron-vue3/commit/fc93d313fa6ebd4dcd167a1c0a5ab95310e1df1f))
* **git-hooks:** add nano-stage & git hooks ([c1f7a40](https://github.com/BWrong/electron-vue3/commit/c1f7a402859c5c761690a4262c798d8e69c19924))
* improve some functions ([2221092](https://github.com/BWrong/electron-vue3/commit/2221092da51b0947cbfc337b20388c1580cc8cc3))
* **nodeIntegration:** set nodeIntegration as true by default ([42fb116](https://github.com/BWrong/electron-vue3/commit/42fb1168178da583e887dadfa218b3ab5e31c9ff))
* support preload script hot reload ([a4ca740](https://github.com/BWrong/electron-vue3/commit/a4ca740c996d476596feefd7428351de74488103))
* support use electron in Renderer-process ([9476b5f](https://github.com/BWrong/electron-vue3/commit/9476b5fb15621b2940af56e180c1d3827d365e3f))
* supported preload rollup package ([5e0bb24](https://github.com/BWrong/electron-vue3/commit/5e0bb24fb8377ef246da55555ce55b00df692efc))
* supported psar package ([0a0e667](https://github.com/BWrong/electron-vue3/commit/0a0e6677cefba79322b866be92f5353461a52373))
* **test:** add playwright e2e test tool ([e35dde0](https://github.com/BWrong/electron-vue3/commit/e35dde0a44dd411126c7231dd423879c568a6b77))
* use vitejs-plugin-electron ([e7406e9](https://github.com/BWrong/electron-vue3/commit/e7406e9c13432f4335a9bd3cdc989756fa10fe80))
* utils.buildins() ([7d9e364](https://github.com/BWrong/electron-vue3/commit/7d9e364b15c15d708b50fe6893005215157e686e))
* **vscode:** add typescript language support for volar ([b5bae8a](https://github.com/BWrong/electron-vue3/commit/b5bae8a607cdc99f7262a5f4091b1fff91ca0118))


### Bug Fixes

* 打包 BUG ([a6dd5d1](https://github.com/BWrong/electron-vue3/commit/a6dd5d1ad756823420cda142e63a5ee2e70ba2a9))
* 构建环境避开 esm2cjs ([abd91f8](https://github.com/BWrong/electron-vue3/commit/abd91f809a8a2970661a9dadedf8c6949a728580))
* 启动动画卡顿 ([118cc7d](https://github.com/BWrong/electron-vue3/commit/118cc7d6f8fa05789893abba6439206de0e50973))
* 相对路径加载问题 ([a13e807](https://github.com/BWrong/electron-vue3/commit/a13e807e2dbfa5fe8440ffb948ee811f6c4031fa))
* **cicd:** build stage cicd fix ([1300b63](https://github.com/BWrong/electron-vue3/commit/1300b638820bf00e5d100215783f1f9bac19905f))
* Content-Security-Policy ([2c6ca1e](https://github.com/BWrong/electron-vue3/commit/2c6ca1e800817e3f53097b0200d743c64162f5f0))
* correct process.env.NODE_ENV ([76660bb](https://github.com/BWrong/electron-vue3/commit/76660bbd6c4c56ee28b26d38cf65649265f77ed6))
* ensure process.cwd() correct. ([d5f294c](https://github.com/BWrong/electron-vue3/commit/d5f294cd2a7e299c980e298669494bc51da612d6))
* failed load preload.js. ([f28a05b](https://github.com/BWrong/electron-vue3/commit/f28a05bccba863fc59ee1060bfc766000a765f81))
* load sourcemap BUG ([862523f](https://github.com/BWrong/electron-vue3/commit/862523fdbf95d0d168c09440983552f5fbf32b3e))
* **main:** remove disableHardwareAcceleration ([5a9ffbf](https://github.com/BWrong/electron-vue3/commit/5a9ffbff27c602eadb5411409c8e951ccb563e53))
* package BUG on windows. ([fb362b2](https://github.com/BWrong/electron-vue3/commit/fb362b26a82f11124e7dc9014c14bdbdd5aa9cb8))
* **package.json:** prebuild runs twice ([642c2c9](https://github.com/BWrong/electron-vue3/commit/642c2c9eadc1a81a4cde9075e96a2d224e3a52f9))
* preload removeChild error ([5f31d09](https://github.com/BWrong/electron-vue3/commit/5f31d090982f6bf347124061a5f2d5eeebc46549))
* rollup-plugin-esbuild 低版本报错 ([48d5a92](https://github.com/BWrong/electron-vue3/commit/48d5a92e6da1963d288bc546e83797dc4879f7fd))
* tsconfig support ESM ([8e7045f](https://github.com/BWrong/electron-vue3/commit/8e7045fbcc9de4024622fdaec46805ee2de18ceb))
* typo ([c676f92](https://github.com/BWrong/electron-vue3/commit/c676f92f9e081afaf9574364ce94d49d8cfdca1e))
* watch ([e3b1cdd](https://github.com/BWrong/electron-vue3/commit/e3b1cdde92f7cadab34d6fd4cd77d8273448f940))
* with esm2cjs to resolve dev BUG. ([6ef3306](https://github.com/BWrong/electron-vue3/commit/6ef3306e54b1e2bfaec8ab39be43531774ab94fe))
