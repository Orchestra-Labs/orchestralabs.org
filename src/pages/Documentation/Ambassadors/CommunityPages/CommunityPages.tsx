import { DocumentationLayout } from '@/components';
import { SOCIAL_LINKS } from '@/constants';
import { NavItem } from '@/types';

const HEADINGS = {
  0: {
    id: 'community-pages',
    label: 'Community Pages',
  },
  1: {
    id: 'community-table',
    label: 'Community Table',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '0',
    label: HEADINGS[0].label,
    href: `#${HEADINGS[0].id}`,
  },
  { id: '1', label: HEADINGS[1].label, href: `#${HEADINGS[1].id}` },
];

const COMMUNITY_DATA = [
  {
    country: 'English',
    manager: [
      '@Obsidian',
      '@CmanAUS',
      '@DuNock',
      '@Raven',
      '@Rawakinode',
      '@Testnetnodes',
    ],
    discord: SOCIAL_LINKS[3].href,
    telegram: SOCIAL_LINKS[1].href,
    reddit: 'https://www.reddit.com/r/OrchestraLabs/',
  },
  {
    country: 'Turkish',
    manager: ['@Obsidian', '@CmanAUS', '@Testnetnodes'],
    discord: SOCIAL_LINKS[3].href,
  },
  {
    country: 'Russian',
    manager: ['@Obsidian', '@CmanAUS', '@DuNock'],
    discord: SOCIAL_LINKS[3].href,
  },
  {
    country: 'Indonesian',
    manager: ['@Obsidian', '@CmanAUS', '@Raven', '@Rawakinode'],
    discord: SOCIAL_LINKS[3].href,
  },
];

export const CommunityPages = () => (
  <DocumentationLayout navigationItems={NAVIGATION_ITEMS} heading={HEADINGS[0]}>
    <p className="mt-10">
      The Symphony community is a large and diverse group from various
      countries. We are all collaborating, growing, and most importantly,
      working together to shape the future of finance. Numerous international
      communities have been created by the community members of Symphony. This
      page provides a list of those communities.
    </p>

    <div id={HEADINGS[1].id} className="mt-15">
      <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
        {HEADINGS[1].label}
      </h2>

      <table
        className="w-full mt-5 table-auto border-collapse"
        style={{ border: '2px solid white' }}
      >
        <thead>
          <tr className="bg-gray-800 text-white">
            <th
              className="p-3 border border-gray-500 text-left"
              style={{ maxWidth: '150px' }}
            >
              Country
            </th>
            <th
              className="p-3 border border-gray-500 text-left"
              style={{ maxWidth: '250px' }}
            >
              Manager
            </th>
            <th
              className="p-3 border border-gray-500 text-left"
              style={{ maxWidth: '150px' }}
            >
              Discord
            </th>
            <th
              className="p-3 border border-gray-500 text-left"
              style={{ maxWidth: '150px' }}
            >
              Telegram
            </th>
            <th
              className="p-3 border border-gray-500 text-left"
              style={{ maxWidth: '150px' }}
            >
              Reddit
            </th>
          </tr>
        </thead>
        <tbody>
          {COMMUNITY_DATA.map((community, index) => (
            <tr key={index} className="bg-gray-700 text-white">
              <td
                className="p-3 border border-gray-500"
                style={{ maxWidth: '150px', wordWrap: 'break-word' }}
              >
                {community.country}
              </td>
              <td
                className="p-3 border border-gray-500"
                style={{ maxWidth: '250px', wordWrap: 'break-word' }}
              >
                <ul>
                  {community.manager?.length > 0 ? (
                    community.manager.map((manager, idx) => (
                      <li key={idx}>{manager}</li>
                    ))
                  ) : (
                    <li>No Manager</li>
                  )}
                </ul>
              </td>
              <td
                className="p-3 border border-gray-500"
                style={{ maxWidth: '150px', wordWrap: 'break-word' }}
              >
                {community.discord ? (
                  <a
                    href={community.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue hover:text-blue-darker underline"
                  >
                    Discord
                  </a>
                ) : (
                  ''
                )}
              </td>
              <td
                className="p-3 border border-gray-500"
                style={{ maxWidth: '150px', wordWrap: 'break-word' }}
              >
                {community.telegram ? (
                  <a
                    href={community.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue hover:text-blue-darker underline"
                  >
                    Telegram
                  </a>
                ) : (
                  ''
                )}
              </td>
              <td
                className="p-3 border border-gray-500"
                style={{ maxWidth: '150px', wordWrap: 'break-word' }}
              >
                {community.reddit ? (
                  <a
                    href={community.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue hover:text-blue-darker underline"
                  >
                    Reddit
                  </a>
                ) : (
                  ''
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </DocumentationLayout>
);
