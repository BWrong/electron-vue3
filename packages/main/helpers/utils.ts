import os from 'os'
import { app, BrowserWindow, dialog, net } from 'electron';
import electronDl,{download} from 'electron-dl'
import { setProgress } from '../modules/progressBar';
export function checkQuit(win: BrowserWindow | null, event: Event):void {
  const options = {
    type: 'info',
    title: '关闭确认',
    message: '确认要最小化程序到托盘吗？',
    buttons: ['确认', '关闭程序']
  };
  dialog.showMessageBox(options).then(({response}) => {
      if (response === 0) {
        event.preventDefault();
        win?.hide();
      } else {
        win = null;
        app.exit(0);
      }
  });
}
// 获取系统
export function getOS() {
  const platform = os.platform();
  if (platform === 'darwin') {
    return 'mac';
  } else if (platform === 'win32') {
    return 'win';
  } else if (platform === 'linux') {
    return 'linux';
  }
}
// 提示
export function showMsg(message:string) {
  dialog.showMessageBox({
    title: '提示',
    message,
  });
}
// 比较版本号
export function compareVersion2Update(current:string, latest:string){
  const currentVersion = current.split('.').map(item => parseInt(item));
  const latestVersion = latest.split('.').map(item => parseInt(item));
  let flag = false;
  for (let i = 0; i < 3; i++) {
    if (currentVersion[i] < latestVersion[i]) {
      flag = true;
    }
  }
  return flag;
};
// 请求
export function request(url: string):Promise<string> {
  let data:string =''
  return new Promise((resolve, reject) => {
    const request = net.request(url)
    request.on('response', (response) => {
      response.on('data', (chunk) => {
        data += chunk.toString()
      })
      response.on('end', () => {
        resolve(data)
      })
    })
    request.on('error', (error:Error) => {
      reject(error);
    })
    request.end()
  })
}
// 下载文件
export function downloadFromUrl(url:string, options:electronDl.Options) {
  const win = BrowserWindow.getFocusedWindow();
  if (!win) {
    return Promise.reject('下载失败，请重试！');
  }
  return download(win, url,options)
}
// 下载更新包
export function updateDownload(url:string) {
  return downloadFromUrl(url, {
    saveAs: true,
    openFolderWhenDone: true,
    onProgress(res) {
      setProgress(res.percent)
    },
    onCompleted() {
      setProgress(-1)
    },
    onCancel() {
      setProgress(-1)
    }
  })
}