import { shell } from 'electron';

// 浏览器打开url
export function openUrlWithBrowser(url: string): void {
  shell.openExternal(url);
}
