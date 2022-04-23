import { ipcMain, shell } from "electron";

// 浏览器打开url
ipcMain.handle('openUrlWithBrowser', (event, url: string) => {
  shell.openExternal(url);
})