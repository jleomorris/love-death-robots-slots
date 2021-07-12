import React from 'react';

const KinkyMask = (props) => {
  return (
    <svg
      width={props.width || '48'}
      height={props.height || '48'}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      data-name='kinky_mask'
    >
      <path
        d='M10 17.5H9.5V18V23C9.5 26.5898 12.4101 29.5 16 29.5H21H21.5V29V24C21.5 20.4102 18.5899 17.5 15 17.5H10ZM38.5 18V17.5H38H33C29.4101 17.5 26.5 20.4102 26.5 24V29V29.5H27H32C35.5899 29.5 38.5 26.5898 38.5 23V18ZM23.2134 39.2185L23.353 39.5134L23.6791 39.5044C23.7853 39.5015 23.8923 39.5 24 39.5C24.1077 39.5 24.2147 39.5015 24.3209 39.5044L24.647 39.5134L24.7866 39.2185C25.2678 38.2016 26.3025 37.5 27.5 37.5C29.1569 37.5 30.5 38.8431 30.5 40.5C30.5 41.7012 29.794 42.7386 28.7722 43.2178L28.7264 43.2393L28.6859 43.2694C27.723 43.9863 26.0103 44.5 24 44.5C21.9897 44.5 20.277 43.9863 19.3141 43.2694L19.2736 43.2393L19.2278 43.2178C18.206 42.7386 17.5 41.7012 17.5 40.5C17.5 38.8431 18.8431 37.5 20.5 37.5C21.6975 37.5 22.7322 38.2016 23.2134 39.2185ZM42.5 25.5C42.5 28.3239 42.0525 31.0218 41.2382 33.5H6.76179C5.94752 31.0218 5.5 28.3239 5.5 25.5C5.5 13.2672 13.8586 3.5 24 3.5C34.1414 3.5 42.5 13.2672 42.5 25.5Z'
        fill={props.fill || '#ED3501'}
        stroke={props.stroke || '#ED3501'}
      />
    </svg>
  );
};

export default KinkyMask;