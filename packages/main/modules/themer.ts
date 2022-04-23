import { app, ipcMain, nativeTheme, NativeTheme } from 'electron';
import { store } from './store';
nativeTheme.themeSource = (store.get('theme') || 'system') as NativeTheme["themeSource"];
app.whenReady().then(() => {
  ipcMain.handle('setTheme', (ev, data) => {
    if (['dark', 'light', 'system'].includes(data)) {
      nativeTheme.themeSource = data;
      store.set('theme', data);
      return { isDark: nativeTheme.shouldUseDarkColors, themeSource: nativeTheme.themeSource };
    }
  });
  ipcMain.handle('getTheme', () => nativeTheme.themeSource);
});
