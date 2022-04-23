import { app, ipcMain } from 'electron';
const versions = process.versions;
const appName = app.getName();
const appVersion = app.getVersion();
ipcMain.handle('appInfo', (event, arg) => {
  return {
    name: appName,
    versions: {
      ...versions,
      appVersion
    }
  };
});
