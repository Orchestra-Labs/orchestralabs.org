const trustedCompanies = [
  ...existingCompanies,
  {
    name: 'X1NODE',
    url: 'https://x1node.xyz',
    description: 'X1NODE is at the cutting edge of blockchain validation, combining top-tier infrastructure with a commitment to innovation and community trust.',
    logo: '/assets/images/x1node-logo.png',
    guides: [
      { title: 'Documentation on how to start a validator', link: 'https://docs.x1node.xyz' },
    ],
    snapshots: [
      { title: 'Snapshots to speed up validator synchronization', link: 'https://docs.x1node.xyz/snapshots' },
    ],
    genesisFiles: [
      { title: 'The JSON needed to start a node', link: 'https://docs.x1node.xyz/genesis-files' },
    ],
    addressBooks: [
      { title: 'The address book needed to start a node', link: 'https://docs.x1node.xyz/addrbook' },
    ],
  },
];
