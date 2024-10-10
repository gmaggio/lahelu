/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        textColor: '#ffffff',
      },
      fontFamily: {
        openSansLight: ['OpenSans_300Light'],
        openSansLightItalic: ['OpenSans_300Light_Italic'],
        openSans: ['OpenSans_400Regular'],
        openSansItalic: ['OpenSans_400Regular_Italic'],
        openSansMedium: ['OpenSans_500Medium'],
        openSansMediumItalic: ['OpenSans_500Medium_Italic'],
        openSansSemiBold: ['OpenSans_600SemiBold'],
        openSansSemiBoldItalic: ['OpenSans_600SemiBold_Italic'],
        openSansBold: ['OpenSans_700Bold'],
        openSansBoldItalic: ['OpenSans_700Bold_Italic'],
        openSansExtraBold: ['OpenSans_800ExtraBold'],
        openSansExtraBoldItalic: ['OpenSans_800ExtraBold_Italic'],
      },
    },
  },
  plugins: [],
};
