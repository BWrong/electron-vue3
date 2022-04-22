

// import {exposeInMainWorld} from './utils/exposeInMainWorld';
import {ipcMain} from 'electron'
// Export for types in contracts.d.ts
export const versions = process.versions;
window.versions = versions;
// exposeInMainWorld('versions', versions);
