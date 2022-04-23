import { app, dialog } from 'electron';
import log from 'electron-log';
log.catchErrors({
  showDialog: false,
  onError(error, versions, submitIssue) {
    dialog.showMessageBox({
      title: 'An error occurred',
      message: error.message,
      detail: error.stack,
      type: 'error',
      buttons: ['Ignore', 'Report', 'Exit'],
    })
      .then((result) => {
        if (result.response === 1) {
          // submitIssue('https://github.com/my-acc/my-app/issues/new', {
          //   title: `Error report for ${versions.app}`,
          //   body: 'Error:\n```' + error.stack + '\n```\n' + `OS: ${versions.os}`
          // });
          return;
        }

        if (result.response === 2) {
          app.quit();
        }
      });
  }
});