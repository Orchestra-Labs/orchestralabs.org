import type { FlexProps } from '@mantine/core';
import { Anchor, Flex } from '@mantine/core';
import React from 'react';

type NavItemProps = Pick<FlexProps, 'visibleFrom' | 'gap' | 'direction'> & {
  // visibleFrom?: MantineBreakpoint;
  linkColor?: string;
  // gap?:
};

const LINKS = [
  { id: 1, label: 'Whitepaper', url: 'https://docs.google.com/document/d/1t6mzvrnWpbq3wyUlts9HUTcLE97Y6XUol8a_bJJTUlg/edit?usp=sharing' },
  // { id: 2, label: 'Documentation', url: '#' },
  { id: 2, label: 'Explorer', url: '#' },
  { id: 3, label: 'Blogs', url: 'https://medium.com/@orchestra_labs' },
];

export const NavItems: React.FC<NavItemProps> = ({ linkColor, ...props }) => (
  <Flex gap="xl" align="center" {...props}>
    {LINKS.map(link => (
      <Anchor
        key={link.id}
        href={link.url}
        target={link.id !== 2 ? "_blank" : undefined}
        rel={link.id !== 2 ? "noopener noreferrer" : undefined}
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
