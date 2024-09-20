import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalPros {
  children: ReactNode;
  to?: Element;
}

export const Portal = ({ children, to = document.body }: PortalPros) => {
  return createPortal(children, to);
};
