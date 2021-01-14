import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import project from './documents/project';
import post from './documents/post';
import pinnedMessage from './documents/pinnedMessage';
import asset from './documents/asset';
import tag from './documents/tag';
import author from './documents/author';

import blockContent from './objects/blockContent/blockContent';
import technology from './objects/technology';
import linkList from './objects/linkList/linkList';
import iconList from './objects/iconList/iconList';
import listItem from './objects/listItem';

export default createSchema({
  name: 'portfolio',
  types: schemaTypes.concat([
    project,
    post,
    pinnedMessage,
    asset,
    tag,
    author,
    blockContent,
    technology,
    linkList,
    iconList,
    listItem,
  ]),
});
