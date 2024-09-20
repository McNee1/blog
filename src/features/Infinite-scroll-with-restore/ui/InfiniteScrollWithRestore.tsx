import { ReactNode, useRef } from 'react';

import { useIntersectionObserver, useScrollRestoration, useThrottle } from '@/shared/lib';

interface InfiniteScrollWithRestoreProps {
  children: ReactNode;
  loadMore: () => void;
}

export const InfiniteScrollWithRestore = ({
  children,
  loadMore,
}: InfiniteScrollWithRestoreProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const positionRef = useRef({ scrollY: 0 });

  useIntersectionObserver(loadMore, ref);

  const handleScroll = useThrottle(() => {
    positionRef.current = {
      scrollY: window.scrollY,
    };
  }, 200);

  useScrollRestoration(handleScroll, positionRef);

  return (
    <div onScroll={handleScroll}>
      {children}
      <div ref={ref}></div>
    </div>
  );
};
