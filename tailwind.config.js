const colors = require('tailwindcss/colors');
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.svelte", "./src/**/*.ts"],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        fill: 'var(--main-color)',
      },
      borderColor: {
        fill: 'var(--main-color)',
      },
      backgroundColor: {
        fill: 'var(--main-color)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
