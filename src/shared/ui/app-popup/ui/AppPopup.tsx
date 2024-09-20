import { ReactNode, useRef, useState } from 'react';
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';

import cls from './AppPopup.module.scss';

import { classNames } from '@/shared/lib';

import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react';

export interface PopupItems {
  action?: () => void;
  content: ReactNode;
  href?: string;
  src?: string;
}

interface AppPopupProps {
  bgColor?: string;
  isArrow?: boolean;
  itemClass?: string;
  items: PopupItems[];
  popupClass?: string;
  reference: ReactNode;
  referenceClass?: string;
}

const ARROW_HEIGHT = 7;
const GAP = 2;
const ARROW_WIDTH = 14;

export const AppPopup = ({
  items,
  reference,
  popupClass,
  referenceClass,
  isArrow = true,
  itemClass,
  bgColor,
}: AppPopupProps) => {
  const [isOpenPopup, setPopup] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open: isOpenPopup,

    onOpenChange: setPopup,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      shift({ padding: 5, crossAxis: true }),
      offset(isArrow ? ARROW_HEIGHT + GAP : 0),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);

  const arrowX = middlewareData.arrow?.x ?? 0;
  const arrowY = middlewareData.arrow?.y ?? 0;
  const transformX = arrowX + ARROW_WIDTH / 2;
  const transformY = arrowY + ARROW_HEIGHT;

  const { isMounted, styles } = useTransitionStyles(context, {
    initial: {
      transform: 'scale(0)',
    },
    common: ({ side }) => ({
      transformOrigin: {
        top: isArrow ? `${transformX}px calc(100% + ${ARROW_HEIGHT}px)` : 'bottom',
        bottom: isArrow ? `${transformX}px ${-ARROW_HEIGHT}px` : 'top',
        left: isArrow ? `calc(100% + ${ARROW_HEIGHT}px) ${transformY}px` : 'right',
        right: isArrow ? `${-ARROW_HEIGHT}px ${transformY}px` : 'left',
      }[side],
    }),
  });

  const itemClasses = classNames(cls.item, itemClass);

  return (
    <>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className={referenceClass}
      >
        {reference}
      </div>

      {isMounted && (
        <>
          <div
            style={{ ...floatingStyles }}
            ref={refs.setFloating}
            {...getFloatingProps()}
          >
            <div
              style={{ ...styles, backgroundColor: bgColor }}
              className={classNames(cls.popup, popupClass)}
            >
              {items.map((item, id) => {
                if (item.href) {
                  return (
                    <Link
                      className={itemClasses}
                      to={item.href}
                      key={id}
                    >
                      {item.content}
                    </Link>
                  );
                }
                if (item.action) {
                  return (
                    <button
                      className={itemClasses}
                      onClick={item.action}
                      key={id}
                    >
                      {item.src && (
                        <SVG
                          src={item.src}
                          width='21'
                        />
                      )}
                      {item.content}
                    </button>
                  );
                } else {
                  return item.content;
                }
              })}
              {isArrow && (
                <FloatingArrow
                  height={ARROW_HEIGHT}
                  width={ARROW_WIDTH}
                  context={context}
                  ref={arrowRef}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
