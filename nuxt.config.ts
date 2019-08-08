const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const remove = require('lodash/remove')

export default {
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
    loaders: {
      // we want to use sass instead of node-sass
      sass: {
        import: ['~assets/style/app.sass'],
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
