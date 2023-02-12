import { useState, useEffect } from 'react';

const useMediaQuery = query => {
  const [matches, setMatcehs] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatcehs(media.matches);
    }
    const listener = () => setMatcehs(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);
  
  return matches;
};

export default useMediaQuery;