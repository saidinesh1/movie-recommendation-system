import './css/components.css';

import PlayButton from '../assets/play-button.svg';

export const Card = ({
  id,
  imageUrl,
  movieName,
  movieYear,
  overview,
  onPlay,
}) => {
  return (
    <div class='cards h-[400px]'>
      <div className={`card`}>
        <span className='text-[30px] p-[10px] text-white font-Rubik absolute bg-[#dd2222] right-[-40px] w-[50%] top-[30px] h-[30px] rounded-lg flex items-center justify-center text-center rotate-[45deg]'>
          {movieYear}
        </span>
        <img src={imageUrl} class='card__image' alt='' />

        <div class='card__overlay'>
          <div class='card__header'>
            <img
              src={PlayButton}
              alt='icon'
              class='card__thumb'
              onClick={() => onPlay(id, movieName)}
            />
            <div class='card__header-text'>
              <h3 class='card__title font-Rubik font-bold text-[18px]'>
                {movieName}
              </h3>
            </div>
          </div>
          <p class='card__description no-scrollbar font-Rubik'>{overview}</p>
        </div>
      </div>
    </div>
  );
};
