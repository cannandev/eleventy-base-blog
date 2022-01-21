module.exports = {
  purge: [
    './_site/**/*.njk',
    './_site/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        cinnabar: '#EF3E36',
        marigold: '#ECA400',
        gainsboro: '#DBD9DB',
        keppel: '#15B097',
        darkPurple: '#22031F',
      },
      fontFamily: {
        'display': ['Mulish'],
        'body': ['Inter'],
        'hand': ['Gochi Hand'],
      }
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
