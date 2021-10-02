const production = !process.env.ROLLUP_WATCH;
module.exports = {
  purge: {
    enabled: production,
    content: ["./src/**/*.svelte"],
  },
  darkMode: false, // or 'media' or 'class'
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
}
