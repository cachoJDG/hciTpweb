/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

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
