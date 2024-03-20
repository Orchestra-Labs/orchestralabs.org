import type { FlexProps } from '@mantine/core';
import { Anchor, Flex } from '@mantine/core';
import React from 'react';

type NavItemProps = Pick<FlexProps, 'visibleFrom' | 'gap' | 'direction'> & {
  // visibleFrom?: MantineBreakpoint;
  linkColor?: string;
  // gap?:
};

const LINKS = [
  { id: 1, label: 'Whitepaper' },
  { id: 2, label: 'Documentation' },
  { id: 3, label: 'Explorer' },
  { id: 4, label: 'Blogs' },
];

export const NavItems: React.FC<NavItemProps> = ({ linkColor, ...props }) => (
  <Flex gap="xl" align="center" {...props}>
    {LINKS.map(link => (
      <Anchor
        key={link.id}
        styles={{
          root: {
            color: linkColor,
          },
        }}
      >
        {link.label}
      </Anchor>
    ))}
  </Flex>
);
