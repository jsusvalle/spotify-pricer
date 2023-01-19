import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../../helpers';
import './nav.css';

export const Nav = () => {
  const { option } = useParams();
  return (
    <nav className="nav">
      <p>Charts</p>
      <ul className="options">
        {tabs.map(({ path, title }) => (
          <Link
            className={`options__item link_styles ${
              option === path && 'active'
            }`}
            key={path}
            to={`/${path}`}>
            <li>{title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
