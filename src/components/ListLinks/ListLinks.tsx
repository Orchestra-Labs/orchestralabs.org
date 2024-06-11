import { Link } from 'react-router-dom';

import { DocumentationNavItem } from '@/types';

export const ListLinks: React.FC<{ listLinks: DocumentationNavItem[] }> = ({
  listLinks,
}) => (
  <ul className="mt-10">
    {listLinks.map(item => (
      <div key={item.id} className="flex mb-4 last:mb-0">
        <p>
          <Link
            to={item.link}
            className="text-blue hover:text-blue-darker underline mr-1"
          >
            {item.title}
          </Link>
          - {item.description}
        </p>
      </div>
    ))}
  </ul>
);
