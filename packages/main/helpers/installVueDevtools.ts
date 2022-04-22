import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer';
export default async () => {
  try {
    // await installExtension({
    //   id:'nhdogjmejiglipccpnnnanhbledajbpd',
    //   electron: '>=1.2.1'
    // });
    await installExtension(VUEJS3_DEVTOOLS, {
      loadExtensionOptions: {
        allowFileAccess: true,
      },
    });
  } catch (e:any) {
    console.error('Vue Devtools failed to install:', e.toString());
  }
}