
module.exports = {
  pwa: {
    name: 'Browsing-Exp',
    themeColor: '#6476DB',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      // ...other Workbox options...
    },
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8089,
    https: false,
    hotOnly: false,
    proxy: {
      '/api/': {
        target: 'http://www.royole.com/',
        ws: true,
        changOrigin: true,
        pathRewrite:{
          '^/api/':'/'
        }
      }
    },
    //before: app => {}
  }
};
