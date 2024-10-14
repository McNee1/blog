import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Modal.module.scss';

import { classNames, useTheme } from '@/shared/lib';
import { TestProps } from '@/shared/types';

interface ModalProps extends TestProps {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = ({
  children,
  onClose,
  isOpen,
  className,
  dataTestId,
}: ModalProps) => {
  const modalRef = useRef(null);

  const { theme } = useTheme();

  const handleCloseModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);

      const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = 'hidden';

      document.body.style.paddingRight = scrollWidth + 'px';
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);

      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen, onKeyDown]);

  return (
    <CSSTransition
      classNames={{ ...styles }}
      nodeRef={modalRef}
      timeout={400}
      in={isOpen}
      unmountOnExit
    >
      <div
        className={classNames(styles.modal, theme, className)}
        onClick={handleCloseModal}
        data-testid={dataTestId}
        ref={modalRef}
      >
        <div className={styles.overlay}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={styles.content}
          >
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
