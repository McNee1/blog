import { ComponentProps, ReactNode, useMemo, useRef } from 'react';

import styles from './PageManager.module.scss';

import { classNames, useIntersectionObserver } from '@/shared/lib';
import { Flex } from '@/shared/ui';

type FlexProps = ComponentProps<typeof Flex>;

interface PageManagerProps extends Partial<Omit<FlexProps, 'children'>> {
  children: ReactNode;
  className?: string;
  onScroll?: () => void;
  width?: 'sm' | 'md' | 'xl';
}

export const PageManager = ({
  children,
  className,
  width = 'md',
  onScroll,
  ...flexProps
}: PageManagerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const observerRef = useMemo(() => {
    return ref;
  }, [ref]);

  useIntersectionObserver(onScroll, observerRef);

  const hasFlexProps = Object.keys(flexProps).length > 0;

  const content = hasFlexProps ? <Flex {...flexProps}>{children}</Flex> : children;
  return (
    <>
      <main className={classNames(styles.Page, styles[width], className)}>{content}</main>

      {onScroll && <div ref={ref}></div>}
    </>
  );
};
