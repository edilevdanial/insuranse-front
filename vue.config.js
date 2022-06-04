module.exports = {
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:5300",
        secure: true
      }
    }
  },
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
