export type FontWeight =
  | '300Light'
  | '400Regular'
  | '500Medium'
  | '600SemiBold'
  | '700Bold'
  | '800ExtraBold';

export const getFontFamily = (weight?: FontWeight, italic?: boolean) =>
  `OpenSans_${weight || '400Regular'}${italic ? '_Italic' : ''}`;

// For Tailwind class
export const getFontFamilyTW = (weight?: FontWeight, italic?: boolean) => {
  switch (weight) {
    case '300Light':
      return italic ? 'font-openSansLightItalic' : 'font-openSansLight';
    case '400Regular':
      return italic ? 'font-openSansItalic' : 'font-openSans';
    case '500Medium':
      return italic ? 'font-openSansMediumItalic' : 'font-openSansMedium';
    case '600SemiBold':
      return italic ? 'font-openSansSemiBoldItalic' : 'font-openSansSemiBold';
    case '700Bold':
      return italic ? 'font-openSansBoldItalic' : 'font-openSansBold';
    case '800ExtraBold':
      return italic ? 'font-openSansExtraBoldItalic' : 'font-openSansExtraBold';
    default:
      return 'font-openSans';
  }
};
