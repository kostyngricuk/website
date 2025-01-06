import { Link, useLocation } from '@remix-run/react';
import classNames from 'classnames';
import Button from '~/components/Button';
import { PATHS } from '~/constants/paths';

const linkStyle = 'hover:text-orange';
const activeLinkStyle = 'border-b-2 border-orange';

export default function Menu() {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex gap-10">
        <li>
          <Link
            to={PATHS.about}
            className={classNames(linkStyle, location.pathname === PATHS.about && activeLinkStyle)}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link to={PATHS.blog} className={classNames(linkStyle, location.pathname === PATHS.blog && activeLinkStyle)}>
            Blog
          </Link>
        </li>
        <li>
          <Button href={PATHS.contact}>Contact</Button>
        </li>
      </ul>
    </nav>
  );
}
