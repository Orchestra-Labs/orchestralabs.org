import type { FlexProps } from '@mantine/core';
import { Anchor, Flex } from '@mantine/core';
import React from 'react';

type NavItemProps = Pick<FlexProps, 'visibleFrom' | 'gap' | 'direction'> & {
  // visibleFrom?: MantineBreakpoint;
  linkColor?: string;
  // gap?:
};

const LINKS = [
  { 
    id: 1, 
    label: 'Whitepaper', 
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://docs.google.com/document/d/1t6mzvrnWpbq3wyUlts9HUTcLE97Y6XUol8a_bJJTUlg/edit?usp=sharing' 
  },
  { 
    id: 2, 
    label: 'Documentation', 
    url: '#' 
  },
  { 
    id: 2, 
    label: 'Explorer', 
    target: '_blank',
    rel: 'noopener noreferrer',
    url: '#' 
  },
  { 
    id: 3, 
    label: 'Blogs', 
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://medium.com/@orchestra_labs' 
  },
];

export const NavItems: React.FC<NavItemProps> = ({ linkColor, ...props }) => (
  <Flex gap="xl" align="center" {...props}>
    {LINKS.map(link => (
      <Anchor
        key={link.id}
        href={link.url}
        target={link.target}
        rel={link.rel}
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
