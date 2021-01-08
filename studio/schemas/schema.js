import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import project from './project/project';
import post from './post';
import author from './author';
import category from './category';

import blockContent from './blockContent';
import technology from './project/technology';
import linkList from './project/linkList';
import listItem from './project/listItem';

export default createSchema({
  name: 'portfolio',
  types: schemaTypes.concat([
    project,
    post,
    author,
    category,
    blockContent,
    technology,
    linkList,
    listItem,
  ]),
});
