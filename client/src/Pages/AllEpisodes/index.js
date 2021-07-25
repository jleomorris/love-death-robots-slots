import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { episodeData } from '../../episodeData';
import DynamicEpisodeCard from '../../Components/DynamicEpisodeCard';

const AllEpisodes = (props) => {
  return (
    <StyledAllEpisodes className='all-episodes'>
      <button
        onClick={() =>
          props.setAreAllEpisodesVisible(!props.areAllEpisodesVisible)
        }
      >
        Close
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
  height: 80vh;
  width: 80vw;
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
