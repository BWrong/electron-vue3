 // 设置dock进度条


import { ipcMain } from "electron";
import { win } from "../mainWindow";


ipcMain.on('set-progress', (event, arg) => {
  let progress = arg/100;
  win?.setProgressBar(progress);
})

ipcMain.on('remove-progress', (event) => win?.setProgressBar(-1))