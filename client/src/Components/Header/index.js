import React from 'react';
import './index.scss';
import HeaderImage from '../../Images/Header.png';
import Slots from '../Slots';

const Header = () => {
  return (
    <div className='header section'>
      <div className='title-slots-container'>
        <h1 className='header__title'>
          Random Episode{' '}
          <span className='header__title header__title--highlighted'>
            Generator
          </span>
        </h1>
        <div className='img-roll-btn-container'>
          <img className='header__image' src={HeaderImage} alt='header' />
          {/* <div className='roll-btn'>Roll</div> */}
        </div>
        {/* <div className='roll-btn'>Roll</div> */}
        <Slots />
      </div>
      <div className='description'></div>
    </div>
  );
};

export default Header;
