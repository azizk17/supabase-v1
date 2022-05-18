const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './resources/**/*.{js,ts,jsx,tsx}'
  ],
  // colors: {
  //   transparent: 'transparent',
  //   current: 'currentColor',
  //   primaryTemp: {
  //     50: 'var(--primary-50)',
  //     100: 'var(--primary-100)',
  //     200: 'var(--primary-200)',
  //     300: 'var(--primary-300)',
  //     400: 'var(--primary-400)',
  //     500: 'var(--primary-500)',
  //     600: 'var(--primary-600)',
  //     700: 'var(--primary-700)',
  //     800: 'var(--primary-800)',
  //     900: 'var(--primary-900)',
  //   },
  //   secondaryTemp: {
  //     50: 'var(--secondary-50)',
  //     100: 'var(--secondary-100)',
  //     200: 'var(--secondary-200)',
  //     300: 'var(--secondary-300)',
  //     400: 'var(--secondary-400)',
  //     500: 'var(--secondary-500)',
  //     600: 'var(--secondary-600)',
  //     700: 'var(--secondary-700)',
  //     800: 'var(--secondary-800)',
  //     900: 'var(--secondary-900)',
  //   },
  //   neutral: colors.gray,
  //   headerText: colors.emerald,
  //   textPrimary: 'var(--textPrimary)',
  //   textSecondary: 'var(--textSecondary)',
  //   danger: colors.red[500],
  //   warning: colors.orange[500],
  //   info: colors.blue[500],
  //   danger: colors.red,
  //   bgPrimary: 'var(--bgPrimary)',
  //   bgSecondary: 'var(--bgSecondary)',
  //   white: colors.white,
  //   black: colors.black,
  // },
  daisyui: {
    themes: [
      "cupcake",
      "retro",
      'dark',
    ]
  },
  plugins: [require("daisyui")],
};
