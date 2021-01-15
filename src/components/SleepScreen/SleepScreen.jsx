import React, { useRef, useEffect } from 'react';

import SleepScreenContainer from './SleepScreen.styles';

const SleepScreen = () => {
  const sleepScreen = useRef(null);
  const sleepText = useRef(null);

  useEffect(() => {
    const sleepScreenPhrases = [
      'Welcome back! 😄',
      'Hello again! 👋',
      "It's good to see you again! 🙈",
    ];

    document.addEventListener('visibilitychange', () => {
      const isVisible = document.visibilityState === 'visible';
      const randomPhrase = Math.round(
        Math.random() * (sleepScreenPhrases.length - 1)
      );

      if (isVisible) {
        sleepText.current.innerText = sleepScreenPhrases[randomPhrase];
        sleepScreen.current.classList.add('active');
        sleepText.current.classList.add('slideUp');

        setTimeout(() => {
          sleepScreen.current.classList.remove('active');
          sleepText.current.classList.remove('slideUp');
        }, 2400);
      } else {
        sleepText.current.innerText = '';
        sleepScreen.current.classList.remove('active');
        sleepText.current.classList.remove('slideUp');
      }
    });
  }, []);

  return (
    <SleepScreenContainer ref={sleepScreen}>
      <div className='overflow--hidden'>
        <span ref={sleepText} />
      </div>
    </SleepScreenContainer>
  );
};

export default SleepScreen;
