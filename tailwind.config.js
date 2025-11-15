/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        darkBlack: '#000000',
        black: '#0F0D27',
        gray: '#6A697A',
        grey: '#52515D',
        tabBackground: '#EDF7F7',
        titleText: '#1E1852',
        plusBtnBg: '#0C2741',
        textColor: '#404559',
        textColor2: '#1E1852',
      },
    },
  },
  plugins: [],
};
