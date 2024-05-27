/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx, mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        primary: '#343434',
        secondary: '#E9EBF8',
        success: '#58B09C',
        danger: '#F45866',
        warning: '#F7EF99',
        info: '#4A60F0',
      },
    },
  },
  plugins: [],
  corePlugins: { preflight: false },
}
