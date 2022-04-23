import { app, dialog, ipcMain, net, shell } from 'electron';
import yaml from 'yaml';
import { compareVersion2Update, downloadFromUrl, getOS, request, showMsg, updateDownload } from '../helpers/utils';
import { store } from './store';

const appVersion = app.getVersion();
const osType = getOS();
const latestFileNames = {
  win: 'latest.yml',
  mac: 'latest-mac.yml',
  linux: 'latest-linux.yml'
};
const checkHost = import.meta.env.VITE_UPDATE_HOST;

const checkUrl = `${checkHost}${latestFileNames[osType!]}`;

export const checkVersion = async (isForce = false): Promise<void> => {
  request(checkUrl)
    .then((res) => {
      const parsed = yaml.parse(res);
      const { version, path } = parsed;
      const downloadUrl = `${checkHost}${path}`;
      if (compareVersion2Update(appVersion, version)) {
        dialog
          .showMessageBox({
            type: 'question',
            title: '发现新版本',
            buttons: ['立即下载', '下次再说'],
            defaultId: 0,
            message: `发现新版本${version}，是否下载？`,
            checkboxLabel: isForce ?'':'以后不再提醒',
            checkboxChecked: false
          })
          .then(({ response, checkboxChecked }) => {
            if (response === 0) {
              // shell.openExternal(downloadUrl);
              updateDownload(downloadUrl)
            }
            if (checkboxChecked) {
              store.set('autoUpdate', false);
            }
          });
      } else {
        console.log('当前没有可用的更新!');
        isForce && showMsg('当前没有可用的更新!');
      }
    })
    .catch((error) => {
      console.log('无法连接更新服务器！');
      isForce && showMsg('连接更新服务器失败，请重试或手动下载！');
    });
};

app.whenReady().then(async () => {
  let autoUpdate = await store.get('autoUpdate');
  // 自动触发更新条件：系统开启自动更新、在线、打包版本
  const hasAutoUpdate = autoUpdate && net.isOnline() && !app.isPackaged;
  // 启动更新
  setTimeout(() => {
    hasAutoUpdate && checkVersion();
  }, 3000);
  // 手动更新
  ipcMain.handle('checkUpdate', () => checkVersion(true));
});
