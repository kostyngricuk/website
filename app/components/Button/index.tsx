import { Link } from '@remix-run/react';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const baseStyles = 'px-6 py-2 bg-orange text-white hover:bg-black';

function Button({ children, href, onClick, className }: Props) {
  if (href) {
    return (
      <Link to={href} className={classNames(baseStyles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classNames(baseStyles, className)}>
      {children}
    </button>
  );
}

export default Button;
