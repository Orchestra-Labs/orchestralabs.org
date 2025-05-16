import { Discord, GitHub, Telegram, XIcon } from '@/assets/icons';
import { LinkTree } from '@/assets/icons/LinkTree';
import { ROUTES } from '@/config/';

export const MAIN_LAYOUT_LINKS = [
  {
    id: '1',
    label: 'Airdrop',
    href: 'https://airdrop-tracker.orchestralabs.org/',
  },
  {
    id: '2',
    label: 'Swap',
    href: 'https://swap.orchestralabs.org/',
  },
  {
    id: '3',
    label: 'Whitepaper',
    href: ROUTES.WHITEPAPER,
  },
  { id: '4', label: 'Learn', href: ROUTES.DOCUMENTATION.ROOT },
  // {
  //   id: '5',
  //   label: 'Explorer',
  //   target: '_blank',
  //   href: 'https://testnet.ping.pub/symphony',
  // },
];

export const EXPLORER_LAYOUT_LINKS = [
  { id: '1', label: 'Home', href: ROUTES.EXPLORER.ROOT },
  { id: '2', label: 'Tokens', href: ROUTES.EXPLORER.TOKENS },
  { id: '3', label: 'Blocks', href: ROUTES.EXPLORER.BLOCKS },
  { id: '4', label: 'Transactions', href: ROUTES.EXPLORER.TRANSACTIONS },
];

export const SOCIAL_LINKS = [
  { id: '1', href: 'https://twitter.com/orchestra_labs', Icon: XIcon },
  {
    id: '2',
    href: 'https://discord.gg/symphony-1162823265975279636',
    Icon: Discord,
  },
  { id: '3', href: 'https://t.me/+xFieHCYYyx41NGQx', Icon: Telegram },
  { id: '4', href: 'https://github.com/Orchestra-Labs', Icon: GitHub },
  { id: '5', href: 'https://linktr.ee/OrchestraLabs', Icon: LinkTree },
];

export const FOOTER_LINKS = [
  {
    id: '1',
    name: 'COMPANY',
    links: [
      {
        id: '1',
        label: 'About Us',
        target: '',
        href: ROUTES.DOCUMENTATION.ABOUT.ROOT,
      },
      {
        id: '2',
        label: 'Contact Us',
        target: '',
        href: 'dblackstone@orchestralabs.org',
      },
      // { id: '3', label: 'Terms & Privacy', href: '#' },
      {
        id: '3',
        label: 'Brand Kit',
        target: '_blank',

        href: 'https://www.figma.com/design/RMidyza0EkEnExu0YRw9iJ/Symphony-Brand-Kit?node-id=0-1&t=VJW7ckSbrgKCK5O5-1',
      },
    ],
  },
  {
    id: '2',
    name: 'COMMUNITY',
    links: [
      {
        id: '1',
        label: 'Ambassador Program',
        target: '',

        href: ROUTES.DOCUMENTATION.AMBASSADORS.ROOT,
      },
      {
        id: '2',
        label: 'Knowledge Base',
        target: '',
        href: ROUTES.DOCUMENTATION.ROOT,
      },
      {
        id: '3',
        label: 'Developer Docs',
        target: '',

        href: ROUTES.DOCUMENTATION.DEVELOPERS.ROOT,
      },
      {
        id: '4',
        label: 'Blogs',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: 'https://medium.com/@orchestra_labs',
      },
    ],
  },
  {
    id: '3',
    name: 'LEGAL',
    links: [
      {
        id: '1',
        label: 'Privacy Policy',
        target: '',

        href: ROUTES.PRIVACY_POLICY,
      },
    ],
  },
];
