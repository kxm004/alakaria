export const theme = {
  colors: {
    primary: '#164765',
    secondary: '#ffa382',
    // background: '#f2f1ef',
    background: '#fff',
    black: '#000000',
    silver: '#c0c0c0',
    white: '#ffffff',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    }
  },
  fonts: {
    primary: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Playfair Display", "Cormorant Garamond", "Times New Roman", serif',
  },
  borderRadius: {
    sm: '0.4rem', // 4px
    md: '0.5rem',  // 8px
    lg: '0.5rem',    // 16px
    full: '9999px',
  }
} as const;