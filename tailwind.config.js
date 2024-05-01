import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['11px', '13px'],
      sm: ['12px', '14px'],
      base: ['14px', '16px'],
      lg: ['16px', '20px'],
      xl: ['18px', '26px'],
    },
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      white: '#F2F2FA',
      grey: '#D5D5E0',
      'neutral-1': '#A2A2AA',
      'neutral-2': 'rgba(255, 255, 255, 0.06)',
      'neutral-3': 'rgba(82, 82, 90, 1)',
      'neutral-4': 'rgba(255, 255, 255, 0.09)',
      black: 'rgba(24, 24, 27, 1)',
      success: '#048A4E',
      'success-dark': '#131F1D',
      warning: '#D9B32E',
      'warning-dark': '#352B15',
      error: '#FC2A58',
      'error-dark': '#9C0A36',
      blue: {
        DEFAULT: '#61CBF4',
        darker: '#43ADD6',
        dark: '#2F99C2',
        pressed: '#117BA4',
        hover: 'rgba(10, 103, 144, 0.42)',
        'pressed-secondary': 'rgba(0, 103, 144, 0.18)',
        'hover-secondary': 'rgba(87, 193, 234, 0.18)',
      },
      background: {
        black: 'rgba(10, 9, 13, 1)',
        'dark-grey': 'rgba(24, 24, 27, 1)',
        'dialog-overlay': 'rgba(19, 19, 19, 0.88)',
        'dialog-bg': 'rgba(34, 34, 37, 1)',
        'tab-button': 'rgba(82, 82, 90, 0.53)',
        gradient:
          'linear-gradient(159.61deg, #202022 13.58%, rgba(51, 51, 70, 0.32) 86.49%)',
      },
    },
    extend: {
      fontSize: {
        h1: ['32px', '44px'],
        h2: ['28px', '40px'],
        h3: ['24px', '34px'],
        h4: ['22px', '30px'],
        h5: ['20px', '28px'],
        h6: ['18px', '26px'],
      },
      spacing: {
        0.5: '2px',
        7.5: '30px',
        15: '60px',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, addComponents }) {
      addVariant('not-last', '&:not(:last-child)');
      addComponents({
        '.page-container': {
          maxWidth: '1328px',
          padding: '0 25px',
          margin: '30px auto',
          '@media screen and (min-width: 48em)': {
            padding: '0 24px',
            margin: '60px auto',
          },
        },
      });
    }),
  ],
};
