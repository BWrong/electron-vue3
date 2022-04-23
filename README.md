# Electron-vue3
基于electron和vue3搭建的桌面端项目模板。

本模板采用[electron-vue-vite](https://github.com/caoxiemeihao/electron-vue-vite)为雏形搭建。

客户端打包使用[electron-builder](https://www.electron.build/)，相关配置在`/electron-builder.js`中配置。

为了更改的支持深色模式，UI框架选择[NaiveUI](https://www.naiveui.com/zh-CN/os-theme)。

![image-20220424000800330](https://cdn.jsdelivr.net/gh/BWrong/Pictures@master/uPic/20220424000806.png)

## 关于更新

自动更新需要证书，所以目前只能通过请求检查是否有新版本，然后下载，引导用户手动升级。 将VITE_UPDATE_HOST设置为安装包对应的服务器地址即可，更新逻辑已写好, 见'./packages/main/modules/updater.ts',下载时dock栏有进度条。

![image-20220424000859857](https://cdn.jsdelivr.net/gh/BWrong/Pictures@master/uPic/20220424000900.png)

![image-20220424000940431](https://cdn.jsdelivr.net/gh/BWrong/Pictures@master/uPic/20220424000941.png)

![WX20220423-181429@2x](https://cdn.jsdelivr.net/gh/BWrong/Pictures@master/uPic/20220424000911.png)

## 深色模式

![image-20220424001051295](https://cdn.jsdelivr.net/gh/BWrong/Pictures@master/uPic/20220424001051.png)

![image-20220424001120604](https://cdn.jsdelivr.net/gh/BWrong/Pictures@master/uPic/20220424001121.png)

## TODO
- [x] 基本框架搭建
- [x] 数据存储: electron-store
- [x] vue devtools
- [x] 自动更新
- [x] 托盘图标
- [x] 环境变量支持
- [x] 安全化
- [x] 自定义titlebar
- [x] 主题模式切换
- [x] builder配置