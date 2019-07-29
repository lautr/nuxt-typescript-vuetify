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
    extend (config, { isDev, isClient }) {
      // we want to use sass instead of node-sass
      remove(config.module.rules, rule => {
        return rule.test.source.includes('sass') || rule.test.source.includes('scss')
      })
      config.module.rules.push(
        {
          test: /\.s(c|a)ss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                fiber: require('fibers'),
                indentedSyntax: true // optional
              }
            }
          ]
        }
      )
    },
    loaders: {
      sass: {
        import: ['~assets/style/variables.sass']
      }
    },
    plugins: [new VuetifyLoaderPlugin()],
    transpile: ['vuetify/lib'],
    typescript: {
      typeCheck: false
    }
  }
}
