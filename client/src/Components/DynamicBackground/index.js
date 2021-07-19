import React, { useEffect, useState } from 'react';
// import example from '../../Images/Episode/Backgrounds/';
// Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
        className={`styled-background-image ${
          props.isHomepage ? 'styled-background-image--homepage' : ''
        }`}
      >
        <img className={props.className} src={source} alt='background' />
      </StyledBackgroundImage>
    )
  );
};

// Styled components
const StyledBackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(90deg, #0c0c0c 8%, rgba(31, 31, 31, 0)); */
`;

export default DynamicBackground;
