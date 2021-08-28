module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center: true,
      padding: '1rem', 
    },
    extend: {
      colors:{
        'secondary' : '#ef5350',
        'golden' : '#f9ba48',
        'lightGreen': '#a5d6a7',
        'lightBlue': '#00ddff',
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
      grayscale: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
