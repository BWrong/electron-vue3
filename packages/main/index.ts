import { app } from 'electron';
import { release } from 'os';
import { restoreOrCreateWindow } from './mainWindow';
import './modules';

export const APP_NAME = app.getName()
export const APP_VERSION = app.getVersion()
// 禁用硬件加速 for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(APP_NAME);

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

app.on('second-instance', restoreOrCreateWindow);

app.on('activate', restoreOrCreateWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.whenReady().then(restoreOrCreateWindow).catch((e) => console.error('Failed create window:', e));

/**
 * Check new app version in production mode only
 */
//  if (import.meta.env.PROD) {
//   app.whenReady()
//     .then(() => import('electron-updater'))
//     .then(({autoUpdater}) => autoUpdater.checkForUpdatesAndNotify())
//     .catch((e) => console.error('Failed check updates:', e));
// }