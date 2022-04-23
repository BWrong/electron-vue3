import {writeFile} from 'fs/promises'
import { contextBridge, ipcRenderer, NativeTheme } from 'electron';
import { appendLoading, removeLoading } from './loading';
import { StoreType } from '../main/modules/store';
export const exportApis = {
  getAppInfo: () => ipcRenderer.invoke('appInfo'), // 获取应用信息
  removeLoading, // 移除loading
  appendLoading, // 添加loading
  checkForUpdate: () => ipcRenderer.invoke('checkForUpdate'), // 检查更新
  openUrlWithBrowser: (url: string) => ipcRenderer.invoke('openUrlWithBrowser', url), // 打开url
  checkUpdate: () => ipcRenderer.invoke('checkUpdate'), // 检查更新
  showTray: () => ipcRenderer.invoke('showTray'), // 显示托盘
  hideTray: () => ipcRenderer.invoke('hideTray'), // 隐藏托盘
  setProgress: (progress: number) => ipcRenderer.invoke('setProgress', progress), // 设置进度
  removeProgress: () => ipcRenderer.invoke('removeProgress'), // 移除进度
  setTheme: (theme: NativeTheme["themeSource"]) => ipcRenderer.invoke('setTheme', theme), // 设置主题
  getTheme: () => ipcRenderer.invoke('getTheme'), // 获取主题
  getStore: (key?: string) => ipcRenderer.invoke('getStore', key), // 获取store
  setStore: (object: Partial<StoreType>) => ipcRenderer.invoke('setStore', object), // 设置store
  openDialog: (options: Electron.OpenDialogOptions) => ipcRenderer.invoke('openDialog', options), // 弹窗
  openDialogSync: (options: Electron.OpenDialogSyncOptions) => ipcRenderer.invoke('openDialogSync', options), // 同步弹窗
  saveDialog: (options: Electron.SaveDialogOptions) => ipcRenderer.invoke('saveDialog', options), // 弹窗
  saveDialogSync: (options: Electron.SaveDialogSyncOptions) => ipcRenderer.invoke('saveDialogSync', options), // 同步弹窗
  messageBox: (options: Electron.MessageBoxOptions) => ipcRenderer.invoke('messageBox', options), // 弹窗
  messageBoxSync: (options: Electron.MessageBoxSyncOptions) => ipcRenderer.invoke('messageBoxSync', options), // 同步弹窗
  errorBox: (title: string, content: string) => ipcRenderer.invoke('errorBox', { type: 'error', title, content }), // 弹窗
  writeFile: (file: any, data: any) => writeFile(file, data), // 写文件
};
contextBridge.exposeInMainWorld('electronApi', exportApis);
