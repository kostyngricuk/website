import { Link } from 'react-router-dom';

export interface Breadcrumb {
  name: string;
  path?: string;
}

interface Props {
  paths: Breadcrumb[];
}

function Breadcrumbs({ paths }: Props) {
  return (
    <nav aria-label="breadcrumb" className="mb-8">
      <ul className="flex justify-center">
        {paths.map((breadcrumb, index) => (
          <li key={index} className="breadcrumb-item">
            {index < paths.length - 1 ? (
              <Link to={breadcrumb.path || '/'} className="hover:text-orange">
                {breadcrumb.name}
              </Link>
            ) : (
              <span>{breadcrumb.name}</span>
            )}
            {index < paths.length - 1 && <span className="mx-2 text-orange">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
