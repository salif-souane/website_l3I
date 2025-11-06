/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
         50: '#f0f9f4',
          100: '#dcf2e6',
          200: '#bae6d1',
          300: '#87d4b3',
          400: '#4eba8f',
          500: '#2E8B57',
          600: '#268050',
          700: '#1f6743',
          800: '#1a5236',
          900: '#153d2a',
  },
        secondary: {
          50:  '#f1faf5',
        100: '#def3e5',
        200: '#bde8cc',
        300: '#8dd9aa',
        400: '#57c482',
        500: '#3aa76b', // vert secondaire un peu plus clair
        600: '#2e8f5a',
        700: '#257349',
        800: '#1d5c3a',
        900: '#174930',}
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
