import { Link } from 'react-router-dom';

import { NavigationItemProps } from '@/types';

export const ListLinks: React.FC<{ listLinks: NavigationItemProps[] }> = ({
  listLinks,
}) => (
  <ul className="mt-10">
    {listLinks.map(item => (
      <div key={item.id} className="flex mb-4 last:mb-0">
        <p>
          <Link
            to={item.href}
            className="text-blue hover:text-blue-darker underline mr-1"
          >
            {item.label}
          </Link>
          - {item.description}
        </p>
      </div>
    ))}
  </ul>
);
