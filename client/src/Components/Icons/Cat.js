import React from 'react';

const Cat = (props) => {
  return (
    <svg
      width={props.width || '48'}
      height={props.height || '48'}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      data-name='cat'
    >
      <path
        d='M9.18764 38.4456L9.17131 38.4193L9.15187 38.3953C4.83272 33.0497 4.75577 25.8086 6.79488 18.856C8.83204 11.9101 12.9503 5.3745 16.8252 1.5655C16.8467 1.54437 16.8674 1.52844 16.8854 1.51737C16.8956 1.51112 16.9039 1.50699 16.9102 1.5043C17.1624 1.65131 17.5171 1.98367 17.9481 2.48789C18.3788 2.99177 18.8489 3.62252 19.3209 4.30024C20.2646 5.65514 21.1941 7.16544 21.8047 8.15774L21.83 8.19888L21.9765 8.43684H22.2559H25.7559H26.0353L26.1817 8.19888L26.207 8.15773C26.8176 7.16544 27.7472 5.65514 28.6909 4.30024C29.1629 3.62252 29.6329 2.99177 30.0636 2.48789C30.4946 1.98367 30.8493 1.65131 31.1015 1.5043C31.1078 1.50699 31.1162 1.51112 31.1263 1.51737C31.1443 1.52844 31.165 1.54437 31.1865 1.5655C35.3281 5.63657 39.7437 12.8179 41.6039 20.2823C43.4641 27.7463 42.745 35.3596 36.8342 40.4869L36.8071 40.5105L36.7836 40.5376C33.6662 44.1427 28.9889 46.4368 23.7559 46.4368C17.5704 46.4368 12.1615 43.2316 9.18764 38.4456ZM20.2159 31.4158L20.4883 31.334L20.5573 31.0581C20.9065 29.6612 21.0042 27.5635 20.0574 25.8906C19.5765 25.0408 18.8313 24.3123 17.7435 23.8569C16.6629 23.4044 15.2734 23.2333 13.5138 23.4403L13.2185 23.475L13.108 23.7511C12.0561 26.3811 12.4157 28.7287 13.8352 30.2192C15.2489 31.7035 17.5879 32.2042 20.2159 31.4158ZM27.8205 31.1418L27.8895 31.4177L28.1619 31.4994C30.7899 32.2879 33.1289 31.7872 34.5426 30.3029C35.9621 28.8124 36.3217 26.4647 35.2698 23.8348L35.1593 23.5587L34.864 23.5239C33.1044 23.3169 31.7149 23.4881 30.6343 23.9406C29.5465 24.396 28.8013 25.1245 28.3204 25.9743C27.3736 27.6472 27.4713 29.7449 27.8205 31.1418Z'
        fill={props.fill || '#ED3501'}
        stroke={props.stroke || '#ED3501'}
      />
    </svg>
  );
};

export default Cat;
