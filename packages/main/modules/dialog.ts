import { app, Dialog, dialog, ipcMain } from "electron";
app.whenReady().then(() => {
  ipcMain.handle('openDialog', (event, options) => dialog.showOpenDialog(options))
  ipcMain.handle('openDialogSync', (event, options) => dialog.showOpenDialogSync(options))
  ipcMain.handle('saveDialog', (event, options) => dialog.showSaveDialog(options))
  ipcMain.handle('saveDialogSync', (event, options) => dialog.showSaveDialogSync(options))
  ipcMain.handle('messageBox', (event, options) => dialog.showMessageBox(options))
  ipcMain.handle('messageBoxSync', (event, options) => dialog.showMessageBoxSync(options))
  ipcMain.handle('errorBox', (event, title,content) => dialog.showErrorBox(title,content))
})