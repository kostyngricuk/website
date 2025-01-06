import { Link } from '@remix-run/react';
import { PATHS } from '~/constants/paths';

export default function Logo() {
  return (
    <Link to={PATHS.home} className="font-extrabold hover:text-orange text-3xl">
      Kanstantsin Hrytsuk
    </Link>
  );
}
