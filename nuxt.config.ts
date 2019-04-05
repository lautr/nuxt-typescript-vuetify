const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

export default {
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/hello',
    '~/plugins/vuetify'
  ],

  /**
   * Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    typescript: {
      typeCheck: false
    },
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    }
  }
}
