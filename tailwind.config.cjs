/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: { xs: 14, sm: 16, md: 18, large: 20, xl: 24, '2xl': 32 },
    colors: {
      transparent: 'transparent',
      black: '#111',
      light: '#f1f1f1',
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-500': '#7c7c7a',
      'gray-400': '#7c7c8a',
      'gray-200': '#c4c4cc',
      'gray-100': '#e1e1e6',
      'cyan-500': '#61dafb',
      'cyan-300': '#B1EEFF',
      wrong: '#FB6161',
      'grad-1': 'rgba(18, 18, 20, 0.92)',
      'grad-2': '#121214',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}
