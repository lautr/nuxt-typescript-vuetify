import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import { Context } from '@nuxt/types'

Vue.use(Vuetify)

export default (ctx: Context) => {
  const vuetify = new Vuetify({
    icons: {
      iconfont: 'mdi' // default - only for display purposes
    },
    theme: {
      options: {
        minifyTheme: (css) => {
          return process.env.NODE_ENV === 'production'
            ? css.replace(/[\r\n|\r|\n]/g, '')
            : css
        }
      },
      themes: {
        light: {
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3
        },
        dark: {
          primary: colors.blue.lighten3
        }
      }
    }
  })

  ctx.app.vuetify = vuetify
  // @ts-ignore
  ctx.$vuetify = vuetify.framework
}
