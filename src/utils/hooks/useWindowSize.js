import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fix Instagram in-app browser bug
  useEffect(() => {
    if (window.screen.width < window.innerWidth) {
      setWindowSize({ ...windowSize, width: window.screen.width });
    }
  }, []);

  return windowSize;
};

export default useWindowSize;
