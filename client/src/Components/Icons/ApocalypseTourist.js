import React from 'react';

const Apocalypse_Tourist = (props) => {
  return (
    <svg
      width={props.width || 48}
      height={props.height || 48}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      data-name='apocalypse_tourist'
    >
      <path
        opacity='0.91'
        d='M23.6386 6.75C23.8311 6.41667 24.3122 6.41667 24.5047 6.75L24.9377 6.5L24.5047 6.75L33.1649 21.75C33.3574 22.0833 33.1168 22.5 32.7319 22.5H15.4114C15.0265 22.5 14.7859 22.0833 14.9784 21.75L23.6386 6.75ZM24.0716 20C26.1427 20 27.8216 18.3211 27.8216 16.25C27.8216 14.1789 26.1427 12.5 24.0716 12.5C22.0006 12.5 20.3217 14.1789 20.3217 16.25C20.3217 18.3211 22.0006 20 24.0716 20ZM4.56625 40.5039L13.6175 24.5H34.5258L43.5771 40.5039C43.7656 40.8372 43.5248 41.25 43.1418 41.25H5.00146C4.61853 41.25 4.37774 40.8372 4.56625 40.5039Z'
        fill={props.fill || '#ED3501'}
        stroke={props.stroke || '#ED3501'}
      />
    </svg>
  );
};

export default Apocalypse_Tourist;
