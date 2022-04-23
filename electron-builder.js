module.exports = {
  appId: 'YouAppID',
  productName: 'ElectronVue3',
  copyright: 'Copyright © 2022 ${author}',
  asar: true,
  directories: {
    output: 'dist_release/${version}'
  },
  "publish": [
    {
      "provider": "generic",
      "url": "http://localhost:8888/",//更新服务器地址,可为空
    }
  ],
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
  "dmg": {
    "contents": [
      {
        "x": 410,
        "y": 150,
        "type": "link",
        "path": "/Applications"
      },
      {
        "x": 130,
        "y": 150,
        "type": "file"
      }
    ]
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
