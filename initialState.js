import sneyderDevCover from './src/assets/images/sneyder-dev-1.png';
import platziVideoCover from './src/assets/images/platzi-video-1.png';

export default {
  pinnedMessages: {
    projects: `📌 As practice makes perfect, here’s a list with some of my personal
    projects.`,
    about: `📌 Hey there, I’m Sneyder! First of all, thanks for visiting my personal website.`,
  },
  projects: [
    {
      id: 1,
      name: 'sneyder.dev',
      image: sneyderDevCover,
      codeURL: 'https://github.com/sneyderdev/sneyder.dev',
      previewURL: 'https://sneyder.dev/',
    },
    {
      id: 2,
      name: 'Platzi Video',
      image: platziVideoCover,
      codeURL: 'https://github.com/sneyderdev/platzivideo-vanillajs',
      previewURL: 'https://sneyderdev.github.io/platzivideo-vanillajs/',
    },
  ],
};
