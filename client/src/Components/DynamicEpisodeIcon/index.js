import React, { useEffect, useState, Suspense } from 'react';

const formatName = (name) => {
  const remove_ = name.split('_');
  const capitalized = remove_.map(
    (word) => word.charAt(0).toUpperCase() + word.substr(1)
  );
  const joined = capitalized.join('');

  return joined;
};

const DynamicEpisodeIcon = (props) => {
  const formattedName = formatName(props.fileName);
  const EpisodeIcon = React.lazy(() => import(`../Icons/${formattedName}.js`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EpisodeIcon />
    </Suspense>
  );
};

export default DynamicEpisodeIcon;
