module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        gray : {
          light : '#f5f5f5'
        },
      }
    },
    screens: {
      xs: '320px',
      sm: '600px',
      md: '769px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {
      textColor : ['hover'],
      backgroundColor : ['hover']
    },
  },
  plugins: [
    
  ],
}
