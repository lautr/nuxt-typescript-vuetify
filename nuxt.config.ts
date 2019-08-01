const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const remove = require('lodash/remove')

export default {
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.sass'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/hello',
    '~/plugins/vuetify'
  ],

  /**
   * Build configurationö
   */
  build: {
    loaders: {
      // we want to use sass instead of node-sass
      sass: {
        import: ['~assets/style/variables.sass'],
        implementation: require('sass'),
        fiber: require('fibers'),
        indentedSyntax: true // optional
      }
    },
    plugins: [new VuetifyLoaderPlugin()],
    transpile: ['vuetify/lib'],
    typescript: {
      typeCheck: false
    }
  }
}
