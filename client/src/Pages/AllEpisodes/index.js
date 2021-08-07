import React, { useEffect, useState } from 'react';
import './index.scss';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { episodeData } from '../../episodeData';
import DynamicEpisodeCard from '../../Components/DynamicEpisodeCard';
import X2 from '../../Components/Icons/X2';
// Animations
import { allEpisodesSlideUp, fadeIn } from '../../animations';
import useWindowSize from '../../hooks/useWindowSize';

const AllEpisodes = (props) => {
  const [allEpisodes, setAllEpisodes] = useState();
  const [sortedBy, setSortedBy] = useState('episodeNumber');
  const { screenWidth } = useWindowSize();

  useEffect(() => {
    // Copy made so original episode data doesn't get mutated on sorting (will cause bugs)
    const episodesCopy = episodeData.map((episode) => episode);
    setAllEpisodes(episodesCopy);
  }, []);

  const sortHandler = (type) => {
    let sorted;

    if (type === 'rating')
      // Desc
      sorted = allEpisodes.sort((a, b) => (b[type] > a[type] ? 1 : -1));
    if (type === 'episodeNumber')
      // Asc
      sorted = allEpisodes.sort((a, b) => (a[type] > b[type] ? 1 : -1));
    if (type === 'duration')
      sorted = allEpisodes.sort((a, b) =>
        // Desc
        b.secondaryDetails[type] > a.secondaryDetails[type] ? 1 : -1
      );

    setAllEpisodes(sorted);
    setSortedBy(type);
  };

  return (
    <StyledAllEpisodes
      className='all-episodes'
      variants={allEpisodesSlideUp(0)}
      initial='hidden'
      animate={`${screenWidth > 1200 ? 'show' : 'showTabletMobile'}`}
    >
      <button
        className='exit-button'
        onClick={() =>
          props.setAreAllEpisodesVisible(!props.areAllEpisodesVisible)
        }
      >
        <X2 />
      </button>
      <StyledSortBy className='sort-by'>
        <p className='sort__main'>Sort by:</p>
        <div className='sort-by__btn-container'>
          <div
            className={`btn btn--trans-white ${
              sortedBy === 'episodeNumber' ? 'btn--selected' : ''
            }`}
            onClick={() => sortHandler('episodeNumber')}
          >
            Number
          </div>
          <div
            className={`btn btn--trans-white ${
              sortedBy === 'rating' ? 'btn--selected' : ''
            }`}
            onClick={() => sortHandler('rating')}
          >
            Rating
          </div>
          <div
            className={`btn btn--trans-white ${
              sortedBy === 'duration' ? 'btn--selected' : ''
            }`}
            onClick={() => sortHandler('duration')}
          >
            Duration
          </div>
        </div>
      </StyledSortBy>
      {allEpisodes &&
        allEpisodes.map((episode) => (
          <>
            <DynamicEpisodeCard
              episode={episode}
              setCurrentEpisode={props.setCurrentEpisode}
              areAllEpisodesVisible={props.areAllEpisodesVisible}
              setAreAllEpisodesVisible={props.setAreAllEpisodesVisible}
              rollHandler={props.rollHandler}
              sortedBy={sortedBy}
            />
          </>
        ))}
    </StyledAllEpisodes>
  );
};

// Styled components
const StyledAllEpisodes = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 90%;
  padding: 1rem;
  z-index: 999999;
  background: #000000d1;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
`;

const StyledSortBy = styled(motion.div)``;

export default AllEpisodes;
