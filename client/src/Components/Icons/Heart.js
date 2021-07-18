import React from 'react';

const Heart = (props) => {
  return (
    <svg
      width={props.width || '48'}
      height={props.height || '48'}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      data-name='heart'
    >
      <mask id='path-1-inside-1' fill='white'>
        <path d='M23.2435 44.1247C23.6423 44.5862 24.3577 44.5862 24.7565 44.1247L42.832 23.2131C40.7301 24.9499 37.993 26 35 26C30.0806 26 25.8525 23.1631 24 19.1033C22.1475 23.1631 17.9194 26 13 26C10.007 26 7.26988 24.9499 5.168 23.2132L23.2435 44.1247Z' />
        <path
          fill-rule='evenodd'
          //   clip-rule='evenodd'
          d='M13 26C17.9194 26 22.1475 23.1631 24 19.1033C23.3568 17.6937 23 16.1368 23 14.5C23 12.8632 23.3568 11.3063 24 9.89672C22.1475 5.83689 17.9194 3 13 3C6.37258 3 1 8.14873 1 14.5C1 17.983 2.61569 21.1043 5.168 23.2132C7.26988 24.9499 10.007 26 13 26Z'
        />
        <path d='M25 14.5C25 12.8632 24.6432 11.3063 24 9.89672C23.3568 11.3063 23 12.8632 23 14.5C23 16.1368 23.3568 17.6937 24 19.1033C24.6432 17.6938 25 16.1368 25 14.5Z' />
        <path d='M47 14.5C47 8.14873 41.6274 3 35 3C30.0806 3 25.8525 5.83689 24 9.89672C24.6432 11.3063 25 12.8632 25 14.5C25 16.1368 24.6432 17.6938 24 19.1033C25.8525 23.1631 30.0806 26 35 26C37.993 26 40.7301 24.9499 42.832 23.2131C45.3843 21.1043 47 17.9829 47 14.5Z' />
      </mask>
      <path
        d='M23.2435 44.1247C23.6423 44.5862 24.3577 44.5862 24.7565 44.1247L42.832 23.2131C40.7301 24.9499 37.993 26 35 26C30.0806 26 25.8525 23.1631 24 19.1033C22.1475 23.1631 17.9194 26 13 26C10.007 26 7.26988 24.9499 5.168 23.2132L23.2435 44.1247Z'
        // fill={props.fill || '#ED3501'}
      />
      <path
        // fill-rule='evenodd'
        // clip-rule='evenodd'
        d='M13 26C17.9194 26 22.1475 23.1631 24 19.1033C23.3568 17.6937 23 16.1368 23 14.5C23 12.8632 23.3568 11.3063 24 9.89672C22.1475 5.83689 17.9194 3 13 3C6.37258 3 1 8.14873 1 14.5C1 17.983 2.61569 21.1043 5.168 23.2132C7.26988 24.9499 10.007 26 13 26Z'
        // fill={props.fill || '#ED3501'}
      />
      <path
        d='M25 14.5C25 12.8632 24.6432 11.3063 24 9.89672C23.3568 11.3063 23 12.8632 23 14.5C23 16.1368 23.3568 17.6937 24 19.1033C24.6432 17.6938 25 16.1368 25 14.5Z'
        // fill={props.fill || '#ED3501'}
      />
      <path
        d='M47 14.5C47 8.14873 41.6274 3 35 3C30.0806 3 25.8525 5.83689 24 9.89672C24.6432 11.3063 25 12.8632 25 14.5C25 16.1368 24.6432 17.6938 24 19.1033C25.8525 23.1631 30.0806 26 35 26C37.993 26 40.7301 24.9499 42.832 23.2131C45.3843 21.1043 47 17.9829 47 14.5Z'
        // fill={props.fill || '#ED3501'}
      />
      <path
        d='M42.832 23.2131L43.1505 23.5986L43.1829 23.5719L43.2103 23.5401L42.832 23.2131ZM24 9.89672L24.4549 9.68916L24 8.69228L23.5451 9.68916L24 9.89672ZM5.168 23.2132L4.78972 23.5401L4.81716 23.5719L4.84951 23.5986L5.168 23.2132ZM23.5451 10.1043C24.1593 11.4504 24.5 12.9367 24.5 14.5H25.5C25.5 12.7897 25.127 11.1621 24.4549 9.68916L23.5451 10.1043ZM24.5 14.5C24.5 16.0633 24.1593 17.5496 23.5451 18.8957L24.4549 19.3108C25.127 17.8379 25.5 16.2103 25.5 14.5H24.5ZM23.5451 19.3108C25.4798 23.5507 29.8868 26.5 35 26.5V25.5C30.2743 25.5 26.2253 22.7755 24.4549 18.8957L23.5451 19.3108ZM35 26.5C38.1114 26.5 40.9606 25.408 43.1505 23.5986L42.5136 22.8277C40.4997 24.4917 37.8747 25.5 35 25.5V26.5ZM23.5451 18.8957C21.7747 22.7755 17.7257 25.5 13 25.5V26.5C18.1132 26.5 22.5202 23.5507 24.4549 19.3108L23.5451 18.8957ZM24.4549 18.8957C23.8407 17.5496 23.5 16.0633 23.5 14.5H22.5C22.5 16.2103 22.873 17.8379 23.5451 19.3108L24.4549 18.8957ZM23.5 14.5C23.5 12.9367 23.8407 11.4504 24.4549 10.1043L23.5451 9.68916C22.873 11.1621 22.5 12.7897 22.5 14.5H23.5ZM43.2103 23.5401L45.6385 20.7309L44.882 20.077L42.4538 22.8862L43.2103 23.5401ZM13 25.5C10.1253 25.5 7.50037 24.4917 5.48648 22.8277L4.84951 23.5986C7.03939 25.4081 9.88864 26.5 13 26.5V25.5ZM2.36149 20.7309L4.78972 23.5401L5.54627 22.8862L3.11804 20.077L2.36149 20.7309ZM23.2435 44.1247L24 43.4708L24 43.4708L23.2435 44.1247ZM24.7565 44.1247L24 43.4708L24 43.4708L24.7565 44.1247ZM42.832 23.2131L42.1951 22.4423L42.1304 22.4957L42.0755 22.5592L42.832 23.2131ZM24 9.89672L23.0902 10.3119L24 12.3056L24.9098 10.3119L24 9.89672ZM5.168 23.2132L5.92454 22.5592L5.86966 22.4957L5.80496 22.4423L5.168 23.2132ZM22.4869 44.7787C23.2846 45.7015 24.7154 45.7015 25.5131 44.7787L24 43.4708H24L22.4869 44.7787ZM35 4C41.1157 4 46 8.74069 46 14.5H48C48 7.55676 42.1392 2 35 2V4ZM2 14.5C2 8.74069 6.88433 4 13 4V2C5.86084 2 0 7.55676 0 14.5H2ZM43.469 23.984C46.2345 21.699 48 18.3022 48 14.5H46C46 17.6637 44.5341 20.5096 42.1951 22.4423L43.469 23.984ZM35 2C29.6931 2 25.107 5.06172 23.0902 9.4816L24.9098 10.3119C26.598 6.61207 30.468 4 35 4V2ZM13 4C17.532 4 21.402 6.61207 23.0902 10.3119L24.9098 9.4816C22.893 5.06172 18.3069 2 13 2V4ZM25.5131 44.7787L43.5886 23.8671L42.0755 22.5592L24 43.4708L25.5131 44.7787ZM4.41145 23.8671L22.4869 44.7787L24 43.4708L5.92454 22.5592L4.41145 23.8671ZM5.80496 22.4423C3.46589 20.5096 2 17.6637 2 14.5H0C0 18.3022 1.76549 21.699 4.53103 23.9841L5.80496 22.4423Z'
        // fill={props.fill || '#ED3501'}
        // mask='url(#path-1-inside-1)'
      />
    </svg>
  );
};

export default Heart;
