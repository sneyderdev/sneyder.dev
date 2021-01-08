import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import project from './project/project';
import post from './post';
import author from './author';
import category from './category';
import pinnedMessage from './pinnedMessage';

import blockContent from './blockContent';
import technology from './project/technology';
import linkList from './linkList/linkList';
import listItem from './linkList/listItem';

export default createSchema({
  name: 'portfolio',
  types: schemaTypes.concat([
    project,
    post,
    author,
    category,
    pinnedMessage,
    blockContent,
    technology,
    linkList,
    listItem,
  ]),
});
