import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';

const IconLinkRenderer = ({ children }) => {
  return (
    <span>
      {children} <BiLinkExternal />
    </span>
  );
};

export default IconLinkRenderer;
