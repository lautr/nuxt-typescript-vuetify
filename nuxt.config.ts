const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

export default {
  /** Build configuration */
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
      // this is required - if set to true the HMR in dev will time out
      typeCheck: false
    }
  },
  /** @see https://typescript.nuxtjs.org/migration.html */
  buildModules: ['@nuxt/typescript-build'],
  /** Plugins to load before mounting the App **/
  plugins: [
    '~/plugins/hello',
    '~/plugins/vuetify'
  ],
  /** typescript config for nuxt */
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  }
}
