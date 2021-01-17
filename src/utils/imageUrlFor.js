import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../sanityClient';

const imageBuilder = imageUrlBuilder(sanityClient);

const imageUrlFor = (source) => imageBuilder.image(source);

export default imageUrlFor;
