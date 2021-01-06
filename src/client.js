import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'tljndwv6',
  dataset: 'production',
});

export default client;
