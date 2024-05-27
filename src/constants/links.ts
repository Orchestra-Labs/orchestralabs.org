import { Discord, GitHub, Telegram, XIcon } from '@/assets/icons';
import { LinkTree } from '@/assets/icons/LinkTree';
import { ROUTES } from '@/config/routes';

export const MAIN_LAYOUT_LINKS = [
  {
    id: 1,
    label: 'Whitepaper',
    url: ROUTES.WHITEPAPER,
  },
  { id: 2, label: 'Documentation', url: ROUTES.DOCUMENTATION.ROOT },
  { id: 3, label: 'Explorer', url: ROUTES.EXPLORER.ROOT },
  {
    id: 4,
    label: 'Blogs',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://medium.com/@orchestra_labs',
  },
];

export const EXPLORER_LAYOUT_LINKS = [
  { id: 1, label: 'Home', url: ROUTES.EXPLORER.ROOT },
  { id: 2, label: 'Tokens', url: ROUTES.EXPLORER.TOKENS },
  { id: 3, label: 'Blocks', url: ROUTES.EXPLORER.BLOCKS },
  { id: 4, label: 'Transactions', url: ROUTES.EXPLORER.TRANSACTIONS },
];

export const SOCIAL_LINKS = [
  { id: 1, url: 'https://twitter.com/orchestra_labs', Icon: XIcon },
  { id: 2, url: 'https://t.me/+xFieHCYYyx41NGQx', Icon: Telegram },
  { id: 3, url: 'https://github.com/Orchestra-Labs', Icon: GitHub },
  { id: 4, url: 'https://discord.gg/qEBPwncrSV', Icon: Discord },
  { id: 5, url: 'https://linktr.ee/OrchestraLabs', Icon: LinkTree },
];

export const EXPLORER_FOOTER_LINKS = [
  {
    id: 1,
    name: 'COMPANY',
    links: [
      { id: 1, name: 'About Us', href: '#' },
      { id: 2, name: 'Contact Us', href: '#' },
      { id: 3, name: 'Terms & Privacy', href: '#' },
    ],
  },
  {
    id: 2,
    name: 'COMMUNITY',
    links: [
      { id: 1, name: 'Api Documentation', href: ROUTES.DOCUMENTATION.ROOT },
      { id: 2, name: 'Knowledge Base', href: '' },
    ],
  },
];
