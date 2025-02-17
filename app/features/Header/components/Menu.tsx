import type { Global } from '~/types';

import { Link, useLocation } from '@remix-run/react';
import classNames from 'classnames';
import Button from '~/components/Button';
import { PAGES } from '~/constants/navigation';
import { useMemo } from 'react';

const linkStyle = 'hover:text-orange';
const activeLinkStyle = 'border-b-2 border-orange';

export default function Menu() {
  const location = useLocation();

  const usePrepareLink = (name: Global.PageNames) =>
    useMemo(
      () => ({
        to: PAGES[name].path,
        className: classNames(linkStyle, location.pathname === name && activeLinkStyle),
      }),
      [name],
    );

  return (
    <nav>
      <ul className="flex gap-10">
        <li>
          <Link {...usePrepareLink('about')}>{PAGES.about.name}</Link>
        </li>
        <li>
          <Link {...usePrepareLink('services')}>{PAGES.services.name}</Link>
        </li>
        <li>
          <Link {...usePrepareLink('projects')}>{PAGES.projects.name}</Link>
        </li>
        <li>
          <Link {...usePrepareLink('blog')}>{PAGES.blog.name}</Link>
        </li>
        <li>
          <Button href={PAGES.contacts.path}>{PAGES.contacts.name}</Button>
        </li>
      </ul>
    </nav>
  );
}
