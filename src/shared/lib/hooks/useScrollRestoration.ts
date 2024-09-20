import { useCallback, useLayoutEffect } from 'react';

import { SCROLL_Y_LC } from '@/shared/constants';

export const useScrollRestoration = (
  callback: () => void,
  position: React.MutableRefObject<{ scrollY: number }>
) => {
  const scrollYPos = useCallback(() => position.current.scrollY, [position]);

  useLayoutEffect(() => {
    const scrollY = Number(sessionStorage.getItem(SCROLL_Y_LC)) || 0;

    window.scrollTo({ top: scrollY });

    window.addEventListener('scroll', callback);

    return () => {
      window.removeEventListener('scroll', callback);

      sessionStorage.setItem(SCROLL_Y_LC, JSON.stringify(scrollYPos()));
    };
  }, [callback, scrollYPos]);
};
