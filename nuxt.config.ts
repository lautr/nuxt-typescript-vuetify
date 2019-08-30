import { Context } from 'vm'

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

export default {
  /** Build configuration */
  build: {
    extend (config: any, context: Context) {
      if (context.isDev && !process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    loaders: {
      // we want to use sass instead of node-sass
      sass: {
        import: ['~assets/style/app.sass'],
        implementation: require('sass'),
        fiber: require('fibers')
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
    typeCheck: false,
    ignoreNotFoundWarnings: true
  }
}
