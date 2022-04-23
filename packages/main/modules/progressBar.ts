 // 设置dock进度条


import { ipcMain } from "electron";
import { win } from "../mainWindow";

export const setProgress = (progress: number) => win?.setProgressBar(progress);

ipcMain.handle('setProgress', (event, arg) => {
  let progress = arg/100;
  setProgress(progress);
})

ipcMain.handle('removeProgress', (event) => setProgress(-1))