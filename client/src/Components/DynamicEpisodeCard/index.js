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
      `../../Images/Episode/Cards/${props.fileName}.jpg`
    );

    setSource(sourceImport.default);
  });

  const episodeCardClickHandler = () => {
    props.rollHandler(props.fileName - 1);
    props.setAreAllEpisodesVisible(!props.areAllEpisodesVisible);
  };

  return (
    source && (
      <StyledBackgroundImage
        className={`styled-background-image`}
        onClick={episodeCardClickHandler}
      >
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

  img {
    height: 400px;
    width: auto;
  }
`;

export default DynamicEpisodeCard;
