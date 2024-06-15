import { Link } from 'react-router-dom';

import { NavItem } from '@/types';

export const ListLinks: React.FC<{ listLinks: NavItem[] }> = ({
  listLinks,
}) => (
  <ul className="mt-10">
    {listLinks.map(item => (
      <div id={item.id} key={item.id} className="flex mb-4 last:mb-0">
        <p>
          <Link
            to={item.href}
            target={item.target}
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
