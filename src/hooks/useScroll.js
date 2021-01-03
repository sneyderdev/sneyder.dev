import { useState, useEffect } from 'react';

const useScroll = () => {
  const [header, setHeader] = useState(true);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setHeader(true);
        setBackground(true);

        if (currentScrollPos === 0) {
          setBackground(false);
        }
      } else {
        setHeader(false);
      }

      prevScrollPos = currentScrollPos;
    });
  }, []);

  return {
    header,
    background,
  };
};

export default useScroll;
