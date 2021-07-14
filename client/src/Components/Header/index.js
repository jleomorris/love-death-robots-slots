import React, { useState, useEffect } from 'react';
import './index.scss';
import HeaderImage from '../../Images/Header.png';
import Slots from '../Slots';
import { Player } from 'video-react';
// Components
import DynamicBackground from '../DynamicBackground';
// Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  yUpAnimation,
  enterRight,
  photoAnimation,
  pageAnimation,
} from '../../animations';

const Header = (props) => {
  const [isEpisodeGenerated, setIsEpisodeGenerated] = useState(false);

  useEffect(() => {
    if (isEpisodeGenerated === true) {
      setTimeout(() => {
        setIsEpisodeGenerated(false);
      }, 500);
    }
  }, [isEpisodeGenerated]);

  return (
    <motion.div
      className='header section'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {!props.currentEpisode && (
        <DynamicBackground
          fileName='General'
          type='jpg'
          className='header__background'
        />
      )}
      {props.currentEpisode?.backgroundImg && (
        <StyledDynamicBackground
          variants={enterRight}
          animate={isEpisodeGenerated ? 'hidden' : 'show'}
          className='styled-dynamic-background'
          exit='exit'
        >
          <DynamicBackground
            fileName={props.currentEpisode?.backgroundImg}
            type='jpg'
            className='header__background'
          />
        </StyledDynamicBackground>
      )}
      <StyledTitleSlotsContainer
        className='title-slots-container'
        variants={yUpAnimation()}
      >
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
        <Slots
          setCurrentEpisode={props.setCurrentEpisode}
          setIsEpisodeGenerated={setIsEpisodeGenerated}
        />
      </StyledTitleSlotsContainer>
      {props.currentEpisode !== undefined && (
        <StyledDetails
          className='details'
          variants={yUpAnimation(1)}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          <h2 className='details__episode-number'>
            #{props.currentEpisode?.episodeNumber}
          </h2>
          <h2 className='details__title'>{props.currentEpisode?.title}</h2>
          <h2 className='details__description'>
            {props.currentEpisode?.description}
          </h2>
          <div className='details__secondary-details'>
            {Object.keys(props.currentEpisode?.secondaryDetails).map(
              (detail) => {
                return (
                  <div className='secondary-detail'>
                    <p className='secondary-detail__title'>{detail}</p>
                    <p className='secondary-detail__content'>
                      {props.currentEpisode?.secondaryDetails[detail]}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </StyledDetails>
      )}
    </motion.div>
  );
};

// Styled components
const StyledTitleSlotsContainer = styled(motion.div)``;
const StyledDetails = styled(motion.div)``;
const StyledDynamicBackground = styled(motion.div)`
  border: 1px solid red;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Header;
