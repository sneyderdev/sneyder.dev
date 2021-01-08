import React from 'react';

import { LoaderContainer, LoaderContent } from './Loader.styles';

const Loader = ({ fullScreen }) => {
  return (
    <LoaderContainer fullScreen={fullScreen}>
      <LoaderContent />
    </LoaderContainer>
  );
};

export default Loader;
