import { Anchor, Flex } from '@mantine/core';
import { FlexProps } from '@mantine/core/lib';
import React from 'react';

import { Discord } from '@/assets/icons/Discord';
import { Facebook } from '@/assets/icons/Facebook';
import { Telegram } from '@/assets/icons/Telegram';
import { XIcon } from '@/assets/icons/X';
import { Youtube } from '@/assets/icons/Youtube';
import { design } from '@/theme/design';

interface SocialLinksProps extends FlexProps {
  iconFill?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  iconFill = design.colors.showWhite,
  ...props
}) => (
  <Flex align="center" gap="lg" {...props}>
    <Anchor display="inline-flex" href="#" target="_blank">
      <XIcon color={iconFill} />
    </Anchor>
    <Anchor display="inline-flex" href="#" target="_blank">
      <Telegram color={iconFill} />
    </Anchor>
    <Anchor display="inline-flex" href="#" target="_blank">
      <Youtube color={iconFill} />
    </Anchor>
    <Anchor display="inline-flex" href="#" target="_blank">
      <Facebook color={iconFill} />
    </Anchor>
    <Anchor display="inline-flex" href="#" target="_blank">
      <Discord color={iconFill} />
    </Anchor>
  </Flex>
);
