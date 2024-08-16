import { Discord, GitHub, Telegram, XIcon } from '@/assets/icons';
import { LinkTree } from '@/assets/icons/LinkTree';
import { ROUTES } from '@/config/routes';

export const MAIN_LAYOUT_LINKS = [
  {
    id: '1',
    label: 'Whitepaper',
    href: ROUTES.WHITEPAPER,
  },
  { id: '2', label: 'Documentation', href: ROUTES.DOCUMENTATION.ROOT },
  {
    id: '3',
    label: 'Explorer',
    target: '_blank',
    href: 'https://testnet.ping.pub/symphony',
  },
  {
    id: '4',
    label: 'Blogs',
    target: '_blank',
    rel: 'noopener noreferrer',
    href: 'https://medium.com/@orchestra_labs',
  },
];

export const EXPLORER_LAYOUT_LINKS = [
  { id: '1', label: 'Home', href: ROUTES.EXPLORER.ROOT },
  { id: '2', label: 'Tokens', href: ROUTES.EXPLORER.TOKENS },
  { id: '3', label: 'Blocks', href: ROUTES.EXPLORER.BLOCKS },
  { id: '4', label: 'Transactions', href: ROUTES.EXPLORER.TRANSACTIONS },
];

export const SOCIAL_LINKS = [
  { id: '1', href: 'https://twitter.com/orchestra_labs', Icon: XIcon },
  { id: '2', href: 'https://t.me/+xFieHCYYyx41NGQx', Icon: Telegram },
  { id: '3', href: 'https://github.com/Orchestra-Labs', Icon: GitHub },
  { id: '4', href: 'https://discord.gg/rnf2FSerwE', Icon: Discord },
  { id: '5', href: 'https://linktr.ee/OrchestraLabs', Icon: LinkTree },
];

export const EXPLORER_FOOTER_LINKS = [
  {
    id: '1',
    name: 'COMPANY',
    links: [
      { id: '1', name: 'About Us', href: '#' },
      { id: '2', name: 'Contact Us', href: '#' },
      { id: '3', name: 'Terms & Privacy', href: '#' },
    ],
  },
  {
    id: '2',
    name: 'COMMUNITY',
    links: [
      { id: '1', name: 'Api Documentation', href: ROUTES.DOCUMENTATION.ROOT },
      { id: '2', name: 'Knowledge Base', href: '' },
    ],
  },
];
