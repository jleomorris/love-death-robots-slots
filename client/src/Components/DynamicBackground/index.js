import React, { useEffect, useState } from 'react';
// import example from '../../Images/Episode/Backgrounds/';

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
    source && <img className={props.className} src={source} alt='background' />
  );
};

export default DynamicBackground;
