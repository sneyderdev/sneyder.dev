import React, { useState, useRef, useEffect } from 'react';

import SleepScreenContainer from './SleepScreen.styles';

const SleepScreen = () => {
  const sleepScreen = useRef(null);
  const sleepText = useRef(null);

  const [sleep, setSleep] = useState(false);

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
        setSleep(!sleep);

        setTimeout(() => {
          sleepScreen.current.classList.remove('active');
          sleepText.current.classList.remove('slideUp');
        }, 2400);
      } else {
        sleepText.current.innerText = '';
        setSleep(false);
      }
    });
  }, []);

  return (
    <SleepScreenContainer
      ref={sleepScreen}
      className={`${sleep ? 'active' : ''}`}
    >
      <div className='overflow--hidden'>
        <span ref={sleepText} className={`${sleep ? 'slideUp' : ''}`} />
      </div>
    </SleepScreenContainer>
  );
};

export default SleepScreen;
