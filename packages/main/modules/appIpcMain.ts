import { BrowserWindow, ipcMain } from 'electron';
export default (win?:BrowserWindow):void => {
  ipcMain.on('message', (event, data) => {
    event.sender.send('reMessage', '主线程收到了:' + data);
  });
  // ipcMain.handle('getDeployConfig', async (event, data) => {
  //   console.log(event, data);
  //   let temp = path.normalize(data);
  //   console.log(temp);
  //   let configFile = require(temp);
  //   return configFile;
  // });
    // Communicate with the Renderer-process.
    win?.webContents.on('ipc-message', (_, channel, ...args) => {
      switch (channel) {
        case 'app.getPath':
          win?.webContents.send('app.getPath', app.getPath(args[0]));
          break;
        default:
          break;
      }
    });

    // Test active push message to Renderer-process
    win?.webContents.on('did-finish-load', () => {
      win?.webContents.send('main-process-message', new Date().toLocaleString());
    });
};
