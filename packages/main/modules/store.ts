import { app, ipcMain } from 'electron';
import ElectronStore from 'electron-store';
import Store, { Schema } from 'electron-store';

const defaults = {
  theme: 'system',
  autoUpdate: true,
};
export type StoreType = typeof defaults;
const schema: Schema<StoreType> = {
  theme: {
    type: 'string',
    default: 'system'
  },
  autoUpdate: {
    type: 'boolean',
    default: true
  }
};
export let store: ElectronStore<StoreType>;

store = new Store<StoreType>({
  defaults,
  schema
  // encryptionKey: 'my-encryption-key'
});

app.whenReady().then(() => {
  ipcMain.handle('getStore',  (event,key) => key ? store.get(key) : store.store)
  ipcMain.handle('setStore',  (event,data) => data && store.set(data))
})