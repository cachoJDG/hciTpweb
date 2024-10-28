/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */


import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


import '@fortawesome/fontawesome-free/css/all.css'


import { createVuetify } from 'vuetify'
import { aliases, mdi} from "vuetify/iconsets/mdi";


export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: true,
        colors: {
          primary: '#7a1ea1',
          secondary: '#111c80',
          error:  '#96052e',
          background: '#f2e6ff'
        },
      },
    },
  },

  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
