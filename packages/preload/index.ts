import { contextBridge, ipcRenderer, NativeTheme } from 'electron';
import { appendLoading, removeLoading } from './loading';
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
  setStore: (object:object) => ipcRenderer.invoke('setStore', object), // 设置store
};
contextBridge.exposeInMainWorld('electronApi', exportApis);
