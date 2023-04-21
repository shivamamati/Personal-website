/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["luxury", "dark", "light", "night"],
  },
  content: ["./src/**/*.{html,js}"],
  
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
  ],
  
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4.5xl': '2.75rem',
      '5xl': '3rem',
      'aboutme': '4rem',
      '6xl': '5rem',
      '7xl': '6rem',
      '8xl': '7rem',
      '9xl': '8rem',
     },


     fontFamily: {
      body: ['Inter'],

      fenix: ['Fenix']
    },
      
      extend: {
        lineHeight: {
          'main': '7.5rem',
          'welcome-p': '5rem'
        },

        margin: {
          '128': '15rem',
        },

        colors: {
          color1: '#131029',
          colorred: '#ff0000'
          primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
        },

        height: {
          '128': '32rem',
          '156': '40rem',
          '188': '45rem',
          '250': '70rem',
          '300': '80rem',
          '188': '45rem'
        },

        width: {
          '128': '32rem',
          '156': '40rem',
          '300': '80rem',
          '188': '50rem'

        }
      },

  },
  plugins: [require("daisyui")],
}
