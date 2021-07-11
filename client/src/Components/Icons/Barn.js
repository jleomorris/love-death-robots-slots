import React from 'react';

const Barn = (props) => {
  return (
    <svg
      width={props.width || 48}
      height={props.height || 48}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      data-name='barn'
    >
      <path
        d='M42.1235 16.8827H27.3889V19.7346H20.7346V16.8827H6V43.5H18.358V33.9938H29.7654V43.5H42.1235V16.8827Z'
        fill={props.fill || '#ED3501'}
      />
      <path
        d='M22.1605 5L14.0802 7.85185L6 15.4568V16.4074H20.7345V13.5556H27.3889V16.4074H42.1234V15.4568L34.0432 7.85185L25.963 5H24.0617H22.1605Z'
        fill={props.fill || '#ED3501'}
      />
    </svg>
  );
};

export default Barn;
