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
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
