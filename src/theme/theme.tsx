import { createTheme, MantineProvider, rem } from '@mantine/core';
import React from 'react';

import { design } from '@/theme/design';

export const theme = createTheme({
  primaryColor: 'blue',
  defaultRadius: rem(8),
  fontFamily: 'Inter, sans-serif',
  lineHeights: {
    xs: rem(21.6),
    sm: rem(25.2),
    md: rem(28.8),
    lg: rem(32.4),
    xl: rem(36),
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
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
    Button: {
      defaultProps: {
        color: design.colors.darkGrey,
        px: rem(43.5),
        py: rem(14.5),
        h: 'auto',
        radius: rem(50),
      },
      styles: {
        label: {
          fontSize: design.typography.size.buttonSm.fontSize,
          lineHeight: design.typography.size.buttonSm.lineHeight,
          '@media screen and (minWidth: 48em)': {
            fontSize: design.typography.size.buttonLg.fontSize,
            lineHeight: design.typography.size.buttonLg.lineHeight,
          },
        },
      },
    },
  },
});

export function ThemeWrapper(props: { children: React.ReactNode }) {
  const { children } = props;
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
