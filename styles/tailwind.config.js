module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.njk',
  ],
  theme: {
    extend: {
      colors: {
        change: 'transparent',
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ['active'],
      textColor: ['before', 'after'],
      fontSize: ['before', 'after'],
    }
  },
  plugins: [
    require('tailwindcss-pseudo-elements')({
      contentUtilities: true,
      emptyContent: true,
    }),
  ],
}
