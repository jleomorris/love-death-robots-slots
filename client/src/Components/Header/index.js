import React, { useState } from 'react';
import './index.scss';
import HeaderImage from '../../Images/Header.png';
import Slots from '../Slots';
import { Player } from 'video-react';
import DynamicBackground from '../DynamicBackground';

const Header = () => {
  const [currentEpisode, setCurrentEpisode] = useState();

  return (
    <div className='header section'>
      {!currentEpisode && (
        <DynamicBackground
          fileName='General'
          type='jpg'
          className='header__background'
        />
      )}
      {currentEpisode?.backgroundImg && (
        <DynamicBackground
          fileName={currentEpisode?.backgroundImg}
          type='jpg'
          className='header__background'
        />
      )}
      <div className='title-slots-container'>
        <h1 className='header__title'>
          Random Episode{' '}
          <span className='header__title header__title--highlighted'>
            Generator
          </span>
        </h1>
        <div className='img-roll-btn-container'>
          {/* <Player
            playsInline
            poster='/assets/poster.png'
            src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
            autoPlay
            loop
            controls={false}
          /> */}
          <img className='header__image' src={HeaderImage} alt='header' />
          {/* <div className='roll-btn'>Roll</div> */}
        </div>
        {/* <div className='roll-btn'>Roll</div> */}
        <Slots setCurrentEpisode={setCurrentEpisode} />
      </div>
      <div className='details'>
        {currentEpisode !== undefined && (
          <>
            <h2 className='details__episode-number'>
              #{currentEpisode?.episodeNumber}
            </h2>
            <h2 className='details__title'>{currentEpisode?.title}</h2>
            <h2 className='details__description'>
              {currentEpisode?.description}
            </h2>
            <div className='details__secondary-details'>
              {Object.keys(currentEpisode?.secondaryDetails).map((detail) => {
                return (
                  <div className='secondary-detail'>
                    <p className='secondary-detail__title'>{detail}</p>
                    <p className='secondary-detail__content'>
                      {currentEpisode?.secondaryDetails[detail]}
                    </p>
                  </div>
                );
                // `${detail}:${secondaryDetails[detail]}`;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
