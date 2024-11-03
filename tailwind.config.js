/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Retro color palette
        'win98': {
          'gray': '#c0c0c0',
          'blue': '#000080',
          'cyan': '#008080',
          'green': '#008000',
          'silver': '#c0c0c0',
          'black': '#000000',
        },
      },
      boxShadow: {
        'win98-inset': 'inset -1px -1px #0a0a0a,inset 1px 1px #dfdfdf,inset -2px -2px grey,inset 2px 2px #fff',
        'win98-outset': 'inset -1px -1px #fff,inset 1px 1px #0a0a0a,inset -2px -2px #dfdfdf,inset 2px 2px grey',
      },
    },
  },
  plugins: [],
}
