module.exports = {
  purge: [
    './src/**/*.html',
    '_site/**/*.html',
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
    }
  },
  plugins: [],
}
