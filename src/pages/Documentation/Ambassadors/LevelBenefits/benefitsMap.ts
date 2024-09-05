export const LEVELS = [
  'Amplifier',
  'Instrumentalist',
  'First Chair',
  'Concertmaster',
  'Soloist',
] as const;

export const BENEFITS_MAP: Record<number, string> = {
  1: 'New Discord Role',
  2: 'Access to Private Discord Channel',
  3: 'Soundwave NFT',
  4: 'Access to exclusive giveaways and contests',
  5: 'Access to exclusive airdrops',
  6: 'A "community builder" allocation from the airdrop',
  7: 'Early Access to Ecosystem Projects',
  8: 'Early Access to Symphony Alpha (Lowered Cliff/Vesting)',
  9: 'Referral Program',
  10: 'Community Grants to Run Initiatives',
  11: 'Holo-key NFT',
  12: 'Limited Edition Symphony Merch',
  13: 'Invitation to Exclusive Symphony Events',
  14: "Shout outs on Orchestra Labs' Social Media",
  15: 'Represent Symphony in the Web3 Community',
  16: 'Potential Full-time Job in the Symphony Ecosystem',
  17: 'Exclusive Events with the Orchestra Labs Team',
};

export const LEVELS_MAP: Record<string, Record<number, boolean>> = {
  Amplifier: {
    1: true,
    2: true,
    3: true,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  },
  Instrumentalist: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  },
  'First Chair': {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  },
  Concertmaster: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: false,
    14: false,
    15: false,
    16: false,
  },
  Soloist: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
  },
};