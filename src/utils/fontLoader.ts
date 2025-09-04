// Font loading utility
export const loadCustomFonts = () => {
  // This function can be extended to dynamically load fonts
  // For now, we'll use the CSS @font-face declarations
  console.log('Custom fonts loaded from assets/fonts directory');
};

// Font family names that can be used throughout the app
export const FONT_FAMILIES = {
  custom: 'CustomFont',
  hero: 'Playfair Display',
  sans: 'Inter',
} as const;

// Helper function to get font family
export const getFontFamily = (fontName: keyof typeof FONT_FAMILIES) => {
  return FONT_FAMILIES[fontName];
}; 