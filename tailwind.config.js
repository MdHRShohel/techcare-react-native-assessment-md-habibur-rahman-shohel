/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        black: '#0F0D27',
        gray: '#6A697A',
        grey: '#52515D',
        tabBackground: '#EDF7F7',
        titleText: '#1E1852',
      },
    },
  },
  plugins: [],
};
