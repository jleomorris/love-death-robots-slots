import React from 'react';
import './index.scss';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { episodeData } from '../../episodeData';
import DynamicEpisodeCard from '../../Components/DynamicEpisodeCard';
import X2 from '../../Components/Icons/X2';

const AllEpisodes = (props) => {
  return (
    <StyledAllEpisodes className='all-episodes'>
      <button
        className='exit-button'
        onClick={() =>
          props.setAreAllEpisodesVisible(!props.areAllEpisodesVisible)
        }
      >
        <X2 />
      </button>
      {episodeData.map((episode) => (
        <DynamicEpisodeCard
          fileName={episode.episodeNumber}
          setCurrentEpisode={props.setCurrentEpisode}
          areAllEpisodesVisible={props.areAllEpisodesVisible}
          setAreAllEpisodesVisible={props.setAreAllEpisodesVisible}
          rollHandler={props.rollHandler}
        />
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
  height: 90vh;
  width: 90vw;
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
export default AllEpisodes;
