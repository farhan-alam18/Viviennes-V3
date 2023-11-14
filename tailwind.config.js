/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'noise': ' url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asvgjs%3D%22http%3A%2F%2Fsvgjs.dev%2Fsvgjs%22%20viewBox%3D%220%200%20700%20700%22%20width%3D%22700%22%20height%3D%22700%22%3E%3Cdefs%3E%3Cfilter%20id%3D%22nnnoise-filter%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%20filterUnits%3D%22objectBoundingBox%22%20primitiveUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22linearRGB%22%3E%0A%09%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.05%22%20numOctaves%3D%224%22%20seed%3D%2215%22%20stitchTiles%3D%22stitch%22%20x%3D%220%25%22%20y%3D%220%25%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20result%3D%22turbulence%22%3E%3C%2FfeTurbulence%3E%0A%09%3CfeSpecularLighting%20surfaceScale%3D%2220%22%20specularConstant%3D%221.1%22%20specularExponent%3D%2220%22%20lighting-color%3D%22%2324837D%22%20x%3D%220%25%22%20y%3D%220%25%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20in%3D%22turbulence%22%20result%3D%22specularLighting%22%3E%0A%09%09%3CfeDistantLight%20azimuth%3D%223%22%20elevation%3D%22112%22%3E%3C%2FfeDistantLight%3E%0A%09%3C%2FfeSpecularLighting%3E%20%20%0A%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22700%22%20height%3D%22700%22%20fill%3D%22%20%230D554A%22%3E%3C%2Frect%3E%3Crect%20width%3D%22700%22%20height%3D%22700%22%20fill%3D%22%2324837d%22%20filter%3D%22url(%23nnnoise-filter)%22%3E%3C%2Frect%3E%3C%2Fsvg%3E");'
      },
      fontFamily:{
        'logo': ['Marney'],
        'title': ['Roboto']
      },
      backgroundColor: {
        'dark-green': '#0d554a',
        'cust-yellow': '#f2c66d',
        'light-green': '#24837d',
      },
      textColor: {
        'dark-green': '#0d554a',
        'cust-yellow': '#f2c66d',
        'light-green': '#24837d',
      },
      borderColor: {
        'dark-green': '#0d554a',
        'cust-yellow': '#f2c66d',
        'light-green': '#24837d',
      }
    }
  },
  plugins: [],
}