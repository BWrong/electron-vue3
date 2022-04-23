import path from 'path';
import { app, nativeImage, dialog, Menu, Tray, MenuItem, MenuItemConstructorOptions, ipcMain } from 'electron';
// https://github.com/maxogden/menubar
// import { menubar } from 'menubar'

import { win } from '../mainWindow';
import { APP_NAME, APP_VERSION } from '..';
let appTray: Tray | undefined;
app.whenReady().then(createTray)
app.on('will-quit', removeTray);

ipcMain.handle('hideTray', removeTray);
ipcMain.handle('showTray', createTray);

const menuTemplate: Array<MenuItemConstructorOptions | MenuItem> = [
  {
    label: '帮助文档',
    click: () => {}
  },
  {
    label: '关于',
    click() {
      dialog.showMessageBox({
        title: APP_NAME,
        message: APP_NAME,
        detail: `版本: ${APP_VERSION}`,
      });
    }
  },
  {
    type: 'separator'
  },
  {
    label: '显示/隐藏',
    click: () => toggleWindowShow()
  },
  {
    role: 'reload',
    label: '重启'
  },
  {
    role: 'quit',
    label: '退出'
  }
];
// 创建托盘图标
function createTray() {
  if (appTray) return;
  const image = nativeImage.createFromPath(path.join(__dirname, '/images/trayTemplate.png'));
  // image.setTemplateImage(true);
  appTray = new Tray(image); //系统托盘图标
  const contextMenu = Menu.buildFromTemplate(menuTemplate);
  appTray.setToolTip(APP_NAME); // 鼠标放上时候的提示
  // appTray.setTitle(APP_NAME); // 右键菜单标题
  // 左键点击
  appTray.on('click', () => {
    appTray?.popUpContextMenu(contextMenu); // 应用菜单项
  });
  // createMenuBar(appTray)
}
// 移除tray
function toggleWindowShow() {
  win?.isVisible() ? win?.hide() : win?.show();
}
// 销毁托盘图标
function removeTray() {
  appTray?.destroy();
  appTray = undefined;
}
// 创建menuBar
// function createMenuBar(tray: Tray) {
//   // TODO: 修复
//   let url = import.meta.env.DEV ? `http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}/public/menuBar.html` : path.join(__dirname, '../renderer/menuBar.html');
//   menubar({
//     tray,
//     index: url,
//   })
// }