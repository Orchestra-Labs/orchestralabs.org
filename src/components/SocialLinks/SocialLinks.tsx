import { Anchor, Flex } from '@mantine/core';
import { FlexProps } from '@mantine/core/lib';
import React from 'react';

import { Discord } from '@/assets/icons/Discord';
import { Telegram } from '@/assets/icons/Telegram';
import { XIcon } from '@/assets/icons/X';
import { design } from '@/theme/design';
import { GitHub } from '@/assets/icons/GitHub';

interface SocialLinksProps extends FlexProps {
  iconFill?: string;
}

const SOCIAL_LINKS = [
  { id: 1, url: "https://twitter.com/orchestra_labs", Icon: XIcon },
  { id: 2, url: "https://t.me/+xFieHCYYyx41NGQx", Icon: Telegram },
  { id: 3, url: "https://github.com/Orchestra-Labs", Icon: GitHub},
  { id: 4, url: "https://discord.gg/3fvGM779", Icon: Discord }
];

export const SocialLinks: React.FC<SocialLinksProps> = ({
  iconFill = design.colors.showWhite,
  ...props
}) => (
  <Flex align="center" gap="lg" {...props}>
    {SOCIAL_LINKS.map(link => (
      <Anchor key={link.id} display="inline-flex" href={link.url} target="_blank">
        <link.Icon color={iconFill} />
      </Anchor>
    ))}
  </Flex>
);
