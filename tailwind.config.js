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
      h1: ['44px', '51px'],
      h2: ['40px', '48px'],
      h3: ['32px', '44px'],
      h4: ['24px', '34px'],
      h5: ['22px', '30px'],
      h6: ['20px', '28px'],
      display1: ['64px', '89px'],
      display2: ['56px', '67px'],
      'body-xs': ['12px', '21px'],
      'body-sm': ['14px', '24px'],
      'body-md': ['16px', '28px'],
      'body-lg': ['18px', '32px'],
      'body-xl': ['20px', '36px'],
    },
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      white: '#F2F2FA',
      grey: '#D5D5E0',
      'storm-grey': '#A7A7CC',
      grey21: '#363636',
      'neutral-1': '#A2A2AA',
      'neutral-2': 'rgba(255, 255, 255, 0.06)',
      'neutral-3': 'rgba(82, 82, 90, 1)',
      'neutral-4': 'rgba(255, 255, 255, 0.09)',
      'neutral-shadow': 'rgba(255, 255, 255, 0.1)',
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
        'dark-grey-hover': 'rgb(22 22 24)',
        'dialog-overlay': 'rgba(19, 19, 19, 0.88)',
        'dialog-bg': 'rgba(34, 34, 37, 1)',
        'tab-button': 'rgba(82, 82, 90, 0.53)',
        article: 'rgba(17, 15, 20, 1)',
        gradient:
          'linear-gradient(159.61deg, #202022 13.58%, rgba(51, 51, 70, 0.32) 86.49%)',
      },
    },
    listStyleType: {
      line: '"-"',
      disc: 'disc',
    },
    extend: {
      transitionProperty: {
        size: 'width, height',
      },
      spacing: {
        0.5: '2px',
        4.5: '18px',
        7.5: '30px',
        12.5: '50px',
        15: '60px',
        17: '68px',
        17.5: '70px',
        19: '76px',
        22.5: '90px',
        '25px': '25px',
      },
      letterSpacing: {
        'wide-20': '0.2em',
        'wide-30': '0.3em',
      },
      padding: {
        25: '100px',
      },
      backgroundImage: {
        'hero-blur-circle': 'radial-gradient(circle, #61cbf4 0%, #0a090d 100%)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
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
        '.section-container': {
          maxWidth: '1328px',
          margin: '0px auto',
        },
      });
    }),
  ],
};
