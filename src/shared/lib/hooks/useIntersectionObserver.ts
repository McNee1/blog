import { RefObject, useEffect } from 'react';

const options = {
  rootMargin: '20px',
  threshold: 0.1,
};

export const useIntersectionObserver = (
  callbackFn: (() => void) | undefined,
  observable: RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    if (!callbackFn) {
      return;
    }

    const callback = function (
      entries: IntersectionObserverEntry[]
      // observer: IntersectionObserver
    ) {
      if (entries[0].isIntersecting) {
        console.log(entries[0].target);
        callbackFn();
      }
    };
    const observer = new IntersectionObserver(callback, options);

    if (observable.current) {
      observer.observe(observable.current);
    }

    return () => observer.disconnect();
  }, [callbackFn, observable]);
};
