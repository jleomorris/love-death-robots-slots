import React, { useState, createRef } from 'react';
import Header from '../../Components/Header';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animations';
// import ScrollToTop from '../../components/ScrollToTop';
// Animation
import styled from 'styled-components';

const HomePage = () => {
  return (
    <StyledHomePage
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Header />
    </StyledHomePage>
  );
};

// Styled components
const StyledHomePage = styled(motion.div)``;

export default HomePage;
