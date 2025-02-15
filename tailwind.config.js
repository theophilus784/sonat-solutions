module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        customLight: 'var(--color-customLight)',
        customDark: 'var(--color-customDark)',
        transparentDark: 'var(--color-transparentDark)',
        customGray: 'var(--color-customGray)',
        bgColor: 'var(--color-bgColor)',
      },
      boxShadow: {
        'cover': '0px 0px 5px rgba(0, 0, 0, 0.5)',
        'top': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          'scrollbar-width': 'none', // For Firefox
          '-ms-overflow-style': 'none', // For IE and Edge
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', // For Chrome, Safari, and Opera
        },
      });
    },
  ],
};
