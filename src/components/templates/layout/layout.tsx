import { useNavigate } from 'react-router-dom';
import { Nav } from 'components/molecules';
import './layout.css';

export const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <main className="layout">
      <header className="layout__header">
        <p onClick={handleClick}>
          <strong>Spotify</strong> Pricing
        </p>
      </header>
      <Nav></Nav>
      <div className="layout__content">{children}</div>
    </main>
  );
};
