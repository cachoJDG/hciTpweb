/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'

//icons
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi} from "vuetify/iconsets/mdi";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: true,
        colors: {
          primary: colors.purple.darken1,  // Usa purple con su tonalidad
          secondary: colors.pink.accent2,  // Usa pink con su tonalidad
          error:  '#96052e'
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
