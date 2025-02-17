import { Link } from '@remix-run/react';
import { PAGES } from '~/constants/navigation';

export default function Logo() {
  return (
    <Link to={PAGES.home.path} className="font-extrabold hover:text-orange text-3xl">
      Kanstantsin Hrytsuk
    </Link>
  );
}
