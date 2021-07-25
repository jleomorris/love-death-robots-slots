import React, { useEffect, useState } from 'react';
// Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { episodeData } from '../../episodeData';

const DynamicEpisodeCard = (props) => {
  const [source, setSource] = useState(null);

  useEffect(async () => {
    let sourceImport;

    sourceImport = await import(
      `../../Images/Episode/Cards/${props.episode.episodeNumber}.jpg`
    );

    setSource(sourceImport.default);
  });

  const episodeCardClickHandler = () => {
    console.log('props.episode.episodeNumber', props.episode.episodeNumber);
    props.rollHandler(props.episode.episodeNumber - 1);
    props.setAreAllEpisodesVisible(!props.areAllEpisodesVisible);
  };

  return (
    source && (
      <StyledBackgroundImage
        className={`styled-background-image`}
        onClick={episodeCardClickHandler}
        whileHover={{ scale: 1.15 }}
      >
        {props.sortedBy && (
          <div className='details'>
            {props.sortedBy === 'episodeNumber' && (
              <p className='rating'>#{props.episode.episodeNumber}</p>
            )}
            {/* <p className='sorted-by-tag'>Sorted by {props.sortedBy}</p> */}
            {props.sortedBy === 'rating' && (
              <p className='rating'>{props.episode.rating}</p>
            )}
            {props.sortedBy === 'duration' && (
              <p className='rating'>
                {props.episode.secondaryDetails.duration} mins
              </p>
            )}
          </div>
        )}
        <img className='episode-card' src={source} alt='episode card' />
      </StyledBackgroundImage>
    )
  );
};

// Styled components
const StyledBackgroundImage = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  margin: 2rem;
  cursor: pointer;
  position: relative;

  .details {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .sorted-by-tag {
      color: white;
      font-size: 60px;
      margin: 10px 0;
    }

    .rating {
      font-size: 60px;
      margin: 10px 0;
    }
  }

  img {
    height: 400px;
    width: auto;
  }
`;

export default DynamicEpisodeCard;
