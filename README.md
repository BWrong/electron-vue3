# Electron-vue3
基于electron和vue3搭建的桌面端项目模板。

本模板采用[electron-vue-vite](https://github.com/caoxiemeihao/electron-vue-vite)为雏形搭建。

客户端打包使用[electron-builder](https://www.electron.build/)，相关配置在`/electron-builder.json`中配置。

为了更改的支持深色模式，UI框架选择[NaiveUI](https://www.naiveui.com/zh-CN/os-theme)。

## TODO
- [x] 基本框架搭建
- [x] 数据存储: electron-store
- [x] vue devtools
- [x] 自动更新, 因mac上需要签名，目前通过引导用户升级。 将VITE_UPDATE_HOST设置为安装包对应的服务器地址即可
- [x] 托盘图标
- [x] 环境变量支持
- [x] 安全化
- [x] 自定义titlebar
- [x] 主题模式切换
- [x] builder配置