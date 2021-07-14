import React, { useEffect, useState } from 'react';
// import example from '../../Images/Episode/Backgrounds/';
// Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { scrollRevealRight, fade, titleAnimation } from '../../animations';

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
        className='styled-background-image'
        variants={scrollRevealRight}
      >
        <img className={props.className} src={source} alt='background' />
      </StyledBackgroundImage>
    )
  );
};

// Styled components
const StyledBackgroundImage = styled(motion.div)`
  border: 2px solid green;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default DynamicBackground;
