import React, { useEffect, useState } from 'react';
// import example from '../../Images/Episode/Backgrounds/';
// Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { scrollRevealRight, fade } from '../../animations';

const DynamicBackground = (props) => {
  const [source, setSource] = useState(null);

  useEffect(async () => {
    let sourceImport;

    sourceImport = await import(
      `../../Images/Episode/Backgrounds/${props.fileName}.${props.type}`
    );

    setSource(sourceImport.default);
  });

  return (
    source && (
      <StyledBackgroundImage
        variants={fade}
        className={props.className}
        src={source}
        alt='background'
      />
    )
  );
};

// Styled components
const StyledBackgroundImage = styled(motion.img)``;

export default DynamicBackground;
