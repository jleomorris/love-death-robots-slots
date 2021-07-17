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
  slideUp,
  enterRight,
  photoAnimation,
  halfWidth,
  pageAnimation,
} from '../../animations';
import { episodeData } from '../../episodeData';

const Header = (props) => {
  const [isEpisodeGenerated, setIsEpisodeGenerated] = useState(false);
  const [isFirstRollCompleted, setIsFirstRollCompleted] = useState(false);

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
          className='styled-dynamic-background'
          variants={enterRight}
          initial='hidden'
          animate={isEpisodeGenerated ? '' : 'show'}
          exit='exit'
        >
          <DynamicBackground
            fileName={props.currentEpisode?.backgroundImg}
            type='jpg'
            className='header__background'
          />
        </StyledDynamicBackground>
      )}
      {isFirstRollCompleted === true && (
        <Slots
          setCurrentEpisode={props.setCurrentEpisode}
          setIsEpisodeGenerated={setIsEpisodeGenerated}
          isFirstRollCompleted={isFirstRollCompleted}
          setIsFirstRollCompleted={setIsFirstRollCompleted}
        />
      )}
      <StyledTitleSlotsContainer
        className={`title-slots-container ${
          isFirstRollCompleted
            ? 'title-slots-container--details'
            : 'title-slots-container--homepage'
        }`}
        variants={halfWidth()}
        initial='hidden'
        animate={isFirstRollCompleted ? 'show' : 'slideUp'}
      >
        <h1 className='header__app-title'>
          Random Episode{' '}
          <span className='header__app-title header__app-title--highlighted'>
            Generator
          </span>
        </h1>
        {isFirstRollCompleted === false && (
          <img className='header__series-logo' src={HeaderImage} alt='header' />
        )}
        {isFirstRollCompleted === false && (
          <Slots
            setCurrentEpisode={props.setCurrentEpisode}
            setIsEpisodeGenerated={setIsEpisodeGenerated}
            isFirstRollCompleted={isFirstRollCompleted}
            setIsFirstRollCompleted={setIsFirstRollCompleted}
          />
        )}
        {props.setCurrentEpisode !== undefined && (
          <h1 className='episode-title'>{props.currentEpisode?.title}</h1>
        )}
      </StyledTitleSlotsContainer>
      {props.currentEpisode !== undefined && (
        <StyledDetails
          className='details'
          variants={slideUp(1.5)}
          initial='hidden'
          animate={isEpisodeGenerated ? '' : 'show'}
          exit='exit'
        >
          <h2 className='details__episode-number'>
            #{props.currentEpisode?.episodeNumber}
          </h2>
          <h2 className='details__season'>
            Season {props.currentEpisode?.season}
          </h2>
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
          <img
            className='details__series-logo'
            src={HeaderImage}
            alt='header'
          />
        </StyledDetails>
      )}
    </motion.div>
  );
};

// Styled components
const StyledTitleSlotsContainer = styled(motion.div)``;
const StyledDetails = styled(motion.div)``;
const StyledDynamicBackground = styled(motion.div)`
  /* border: 1px solid red; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Header;
