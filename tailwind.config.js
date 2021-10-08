const colors = require('tailwindcss/colors');
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.svelte", "./src/**/*.ts"],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },

  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        lime: colors.lime,
        orange: colors.orange
      }
    }
  }
}
