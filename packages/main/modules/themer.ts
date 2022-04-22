import { BrowserWindow, ipcMain, nativeTheme } from 'electron';
export default (win?: BrowserWindow): void => {
  ipcMain.handle('set-theme-mode', (ev, data) => {
    if (['dark', 'light', 'system'].includes(data)) {
      nativeTheme.themeSource = data;
      return { isDark: nativeTheme.shouldUseDarkColors, themeSource: nativeTheme.themeSource };
    }
    return null;
  });
  ipcMain.handle('get-theme-mode', () => nativeTheme.themeSource);
};
