import './css/components.css';

import PlayButton from '../assets/play-button.svg';

export const Card = ({ imageUrl, movieName, movieYear, overview }) => {
  return (
    <div class='cards h-[400px]'>
      <div class='card'>
        <img src={imageUrl} class='card__image' alt='' />
        <div class='card__overlay'>
          <div class='card__header'>
            <img src={PlayButton} alt='icon' class='card__thumb' />
            <div class='card__header-text'>
              <h3 class='card__title font-Rubik font-bold text-[18px]'>
                {movieName}
              </h3>
              <span class='card__status'>{movieYear}</span>
            </div>
          </div>
          <p class='card__description no-scrollbar font-Rubik'>{overview}</p>
        </div>
      </div>
    </div>
  );
};
