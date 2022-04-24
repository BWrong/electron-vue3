module.exports = {
  appId: 'YouAppID',
  productName: 'ElectronVue3',
  copyright: 'Copyright © 2022 ${author}',
  asar: true,
  directories: {
    output: 'dist_release/${version}'
  },
  files: ['dist'],
  mac: {
    artifactName: '${productName}_${version}.${ext}',
    icon: './build/icons/icon.icns',
    category: 'public.app-category.developer-tools',
    target: ['dmg'],
    darkModeSupport: true
  },
  win: {
    icon: './build/icons/icon.ico',
    target: [
      {
        target: 'nsis',
        arch: ['x64']
      }
    ],
    artifactName: '${productName}_${version}.${ext}'
  },
  linux: {
    icon: './build/icons/icon.icns',
    target: 'AppImage'
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowElevation: true,
    allowToChangeInstallationDirectory: true,
    createDesktopShortcut: true,
    createStartMenuShortcut: true
  }
};
