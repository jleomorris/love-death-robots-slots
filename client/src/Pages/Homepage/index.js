import React, { useState, createRef } from 'react';
import Header from '../../Components/Header';
import HeaderImage from '../../Images/Header.png';
// Components
import Slots from '../../Components/Slots';
import DynamicBackground from '../../Components/DynamicBackground';
// Routing
import { useHistory } from 'react-router';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation, scrollRevealRight, slideUp } from '../../animations';
// import ScrollToTop from '../../components/ScrollToTop';
// Animation
import styled from 'styled-components';

const HomePage = (props) => {
  const history = useHistory();

  return (
    <StyledHomePage
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {/* <Header /> */}
      <div className='homepage section'>
        <DynamicBackground
          fileName='General'
          type='jpg'
          className='header__background'
        />
        <StyledTitleSlotsContainer
          className='title-slots-container'
          variants={slideUp()}
        >
          <h1 className='header__title'>
            Random Episode{' '}
            <span className='header__title header__title--highlighted'>
              Generator
            </span>
          </h1>
          <div className='img-roll-btn-container'>
            {/* <Player
            playsInline
            poster='/assets/poster.png'
            src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
            autoPlay
            loop
            controls={false}
          /> */}
            <img className='header__image' src={HeaderImage} alt='header' />
            {/* <div className='roll-btn'>Roll</div> */}
          </div>
          {/* <div className='roll-btn'>Roll</div> */}
          <Slots setCurrentEpisode={props.setCurrentEpisode} />
        </StyledTitleSlotsContainer>
      </div>
    </StyledHomePage>
  );
};

// Styled components
const StyledHomePage = styled(motion.div)``;
const StyledTitleSlotsContainer = styled(motion.div)``;
const StyledDetails = styled(motion.div)``;
const StyledDynamicBackground = styled(motion.div)`
  border: 2px solid red;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default HomePage;
