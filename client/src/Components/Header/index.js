import React, { useState, useEffect } from 'react';
import './index.scss';
import HeaderImage from '../../Images/Header.png';
import Slots from '../Slots';
import { Player } from 'video-react';
// Components
import DynamicBackground from '../DynamicBackground';
import DynamicEpisodeIcon from '../DynamicEpisodeIcon';
import AllEpisodes from '../../Pages/AllEpisodes';
// Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  slideUp,
  slideDown,
  enterRight,
  photoAnimation,
  halfWidth,
  pageAnimation,
  fadeOut,
  leaveLeft,
  fadeIn,
  fadeInOut,
} from '../../animations';
import { episodeData } from '../../episodeData';
import Star from '../Icons/Star';
import { stripBasename } from 'history/PathUtils';
import StarRatings from 'react-star-ratings';
// Responsive styling
import { device } from '../../util/device';
import useWindowSize from '../../hooks/useWindowSize';

const Header = (props) => {
  const [isEpisodeGenerated, setIsEpisodeGenerated] = useState();
  const [isFirstRollCompleted, setIsFirstRollCompleted] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [episodesGenerated, setEpisodesGenerated] = useState(0);
  const [areAllEpisodesVisible, setAreAllEpisodesVisible] = useState(false);
  const { screenWidth } = useWindowSize();

  useEffect(() => {
    if (isEpisodeGenerated === false) {
      setTimeout(() => {
        setIsEpisodeGenerated(true);
      }, 500);
    }
  }, [isEpisodeGenerated]);

  const calculateStarRating = () => {
    const stars = [];

    const limit = Math.floor(props.currentEpisode.rating);

    for (let i = 0; i < limit; i += 1) {
      stars.push(<Star />);
    }

    // debugger;

    return stars;
  };

  return (
    <StyledHeader
      className='header section'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <StyledSeriesLogo
        className='styled-series-logo'
        variants={slideDown()}
        animate={isFirstRollCompleted ? 'show' : ''}
      >
        <img className='header__series-logo' src={HeaderImage} alt='header' />
      </StyledSeriesLogo>
      <StyledDynamicBackground
        className='styled-dynamic-background'
        variants={leaveLeft}
        initial='hidden'
        animate={isRolling ? 'show' : ''}
        exit='exit'
      >
        {props.currentEpisode === undefined && (
          <DynamicBackground
            fileName='General'
            type='jpg'
            className='header__background'
            isHomepage
          />
        )}
      </StyledDynamicBackground>
      {props.currentEpisode?.backgroundImg && (
        <StyledDynamicBackground
          className='styled-dynamic-background'
          variants={episodesGenerated === 1 ? enterRight(0.5) : enterRight(2)}
          initial='hidden'
          animate={isEpisodeGenerated ? 'show' : ''}
          exit='exit'
        >
          <DynamicBackground
            fileName={props.currentEpisode?.backgroundImg}
            type='jpg'
            className='header__background'
          />
        </StyledDynamicBackground>
      )}
      {screenWidth > 1200 && (
        <Slots
          setCurrentEpisode={props.setCurrentEpisode}
          currentEpisode={props.currentEpisode}
          isEpisodeGenerated={isEpisodeGenerated}
          setIsEpisodeGenerated={setIsEpisodeGenerated}
          isFirstRollCompleted={isFirstRollCompleted}
          setIsFirstRollCompleted={setIsFirstRollCompleted}
          isRolling={isRolling}
          setIsRolling={setIsRolling}
          episodesGenerated={episodesGenerated}
          setEpisodesGenerated={setEpisodesGenerated}
          areAllEpisodesVisible={areAllEpisodesVisible}
          setAreAllEpisodesVisible={setAreAllEpisodesVisible}
          isTablet={false}
        />
      )}
      <StyledTitleSlotsContainer
        className={`title-slots-container ${
          isFirstRollCompleted
            ? 'title-slots-container--details'
            : 'title-slots-container--homepage'
        }`}
        variants={halfWidth()}
        // initial='hidden'
        animate={
          isFirstRollCompleted
            ? screenWidth > 1200
              ? 'show'
              : 'showTablet'
            : 'slideUp'
        }
      >
        <StyledAppTitleContainer
          variants={fadeIn}
          animate={isFirstRollCompleted ? 'animate' : ''}
        >
          <h1
            className={`header__app-title ${
              screenWidth < 1200 ? 'header__app-title--tablet' : ''
            }`}
          >
            Random Episode{' '}
            <span className='header__app-title header__app-title--highlighted'>
              Generator
            </span>
          </h1>
        </StyledAppTitleContainer>
        {screenWidth < 1200 && (
          <Slots
            setCurrentEpisode={props.setCurrentEpisode}
            currentEpisode={props.currentEpisode}
            isEpisodeGenerated={isEpisodeGenerated}
            setIsEpisodeGenerated={setIsEpisodeGenerated}
            isFirstRollCompleted={isFirstRollCompleted}
            setIsFirstRollCompleted={setIsFirstRollCompleted}
            isRolling={isRolling}
            setIsRolling={setIsRolling}
            episodesGenerated={episodesGenerated}
            setEpisodesGenerated={setEpisodesGenerated}
            areAllEpisodesVisible={areAllEpisodesVisible}
            setAreAllEpisodesVisible={setAreAllEpisodesVisible}
            isTablet
          />
        )}
        {props.setCurrentEpisode !== undefined && (
          <StyledEpisodeTitleContainer
            className={`episode-title-container ${
              screenWidth < 1200 ? 'episode-title-container--tablet' : '' > 1200
            }`}
            variants={episodesGenerated === 1 ? slideUp(2) : slideUp(3)}
            initial='hidden'
            animate={isEpisodeGenerated ? 'show' : ''}
            exit='exit'
          >
            <h1
              className={`episode-title ${
                screenWidth < 1200 ? 'episode-title--tablet' : ''
              }`}
            >
              {props.currentEpisode?.title}
            </h1>
            {screenWidth > 1200 && (
              <>
                <h1 className='episode-title'>{props.currentEpisode?.title}</h1>
                <h1 className='episode-title'>{props.currentEpisode?.title}</h1>
              </>
            )}
          </StyledEpisodeTitleContainer>
        )}
      </StyledTitleSlotsContainer>
      {props.currentEpisode !== undefined && (
        <StyledDetails
          className='details'
          variants={episodesGenerated === 1 ? slideUp(1.5) : slideUp(2.5)}
          initial='hidden'
          animate={isEpisodeGenerated ? 'show' : ''}
          exit='exit'
        >
          <h2 className='details__episode-number'>
            #{props.currentEpisode?.episodeNumber}
          </h2>
          <h2 className='details__season'>
            Season {props.currentEpisode?.season}
          </h2>
          <div className='star-ratings'>
            {/* {calculateStarRating()}
            <p className="star-ratings__rating">({props.currentEpisode.rating})</p> */}
            <StarRatings
              rating={props.currentEpisode.rating / 2}
              starRatedColor='#ed3501'
              numberOfStars={5}
              name='rating'
            />
            <p className='star-ratings__rating'>
              ({Math.round((props.currentEpisode.rating / 2) * 10) / 10})
            </p>
          </div>
          <div className='episode-icons'>
            {props.currentEpisode.icons.map((icon) => (
              <DynamicEpisodeIcon fileName={icon} />
            ))}
          </div>
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
                      {detail === 'duration' ? ' mins' : ''}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </StyledDetails>
      )}
    </StyledHeader>
  );
};

// Styled components
const StyledHeader = styled(motion.div)`
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
const StyledTitleSlotsContainer = styled(motion.div)`
  /* @media ${device.mobileS} {
    border: 1px solid red;
    width: 100% !important;
  } */
  /* @media ${device.laptop} {
    border: 1px solid blue;
    width: 70% !important;
  } */
`;
const StyledEpisodeTitleContainer = styled(motion.div)``;
const StyledDetails = styled(motion.div)`
  /* @media ${device.mobileS} {
    border: 1px solid red;
    width: 100% !important;
  }
  @media ${device.laptop} {
    border: 1px solid blue;
    width: 25% !important;
  } */
`;
const StyledAppTitleContainer = styled(motion.div)``;
const StyledSeriesLogo = styled(motion.div)`
  position: absolute;
  left: 20px;
  opacity: 0.3;
  z-index: 1;
`;
const StyledDynamicBackground = styled(motion.div)`
  /* border: 1px solid red; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Header;
