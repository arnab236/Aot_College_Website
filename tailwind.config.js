/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
        'xs': '380px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '760px',
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl':'1536px',
      },

    extend: {},
  },
  plugins: [],
}

