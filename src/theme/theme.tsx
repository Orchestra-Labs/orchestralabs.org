import { createTheme, MantineProvider, rem } from '@mantine/core';
import React from 'react';

export const theme = createTheme({
  primaryColor: 'blue',
  defaultRadius: rem(8),
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  headings: {
    fontFamily: 'Inter',
    fontWeight: '600',
    textWrap: 'wrap',
    sizes: {
      h1: {
        fontSize: '44px',
        lineHeight: '51px',
      },
      h2: {
        fontSize: '40px',
        lineHeight: '56px',
      },
      h3: {
        fontSize: '32px',
        lineHeight: '44px',
      },
      h4: {
        fontSize: '24px',
        lineHeight: '33px',
      },
      h5: {
        fontSize: '20px',
        lineHeight: '28px',
      },
      h6: {
        fontSize: '16px',
        lineHeight: '22px',
      },
    },
  },
  cursorType: 'pointer',
  components: {
    Burger: {
      styles: {
        root: {
          zIndex: 10,
        },
      },
    },
  },
});

export function ThemeWrapper(props: { children: React.ReactNode }) {
  const { children } = props;
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
