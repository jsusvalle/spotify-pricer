import { useNavigate } from 'react-router-dom';

import { ImageShadow } from 'components/atoms';
import { CanvasButton, IconBar } from 'components/molecules';

import './home.css';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chart_1');
  };

  return (
    <main className="main">
      <section className="main__content">
        <ImageShadow />
        <div className="main__info">
          <h1 className="main__text--title">Spotify pricing</h1>
          <p className="main__text--subtitle">
            Discover the price of the most popular music service in each country
            and region
          </p>
          <div className="main__button">
            <CanvasButton
              textButton="Click to start"
              description=""
              onClick={handleClick}
            />
          </div>
          <IconBar />
        </div>
      </section>
    </main>
  );
};
