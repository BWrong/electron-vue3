import { join } from 'path';
import { app, BrowserWindow, dialog, shell } from 'electron';
const APP_NAME = app.getName();
export let win: BrowserWindow | null;
async function createWindow() {
  win = new BrowserWindow({
    title: APP_NAME,
    width: !app.isPackaged ? 1700 : 1200,
    height: 680,
    minWidth: 800,
    minHeight: 640,
    center: true,
    frame: true, // 不创建frameless窗口
    fullscreenable: true, // 是否允许全屏
    backgroundColor: '#eee', // 背景颜色
    titleBarStyle: 'hidden', // 标题栏的样式，有hidden、hiddenInset、customButtonsOnHover等
    resizable: true, // 是否允许拉伸大小
    transparent: true, // 是否是透明窗口（仅macOS）
    // vibrancy: 'ultra-dark', // 窗口模糊的样式（仅macOS）
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.cjs'),
      nodeIntegration: true, // webview集成nodejsApi
      contextIsolation: false
    }
  });

  if (import.meta.env.DEV) {
     // 🚧 Use ['ENV_NAME'] avoid vite:define plugin
     const url = `http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`;
     win.loadURL(url);
    win.webContents.openDevTools();
    import('./helpers/installVueDevtools').then(installDevtools => installDevtools.default());

  } else {
    win.loadFile(join(__dirname, '../renderer/index.html'));
    // 更新
    // updateHandle(win);
    // updateChecker();
    // autoUpdater.checkForUpdatesAndNotify();
  }
  // 使用浏览器打开所有链接，而不是应用程序
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url);
    return { action: 'deny' };
  });
  return win;
}
export async function restoreOrCreateWindow() {
  let win = BrowserWindow.getAllWindows().find((w) => !w.isDestroyed());
  if (win === undefined) {
    win = await createWindow();
  }
  if (win.isMinimized()) {
    win.restore();
  }
  win.focus();
}
