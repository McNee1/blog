import { Link, LinkProps } from 'react-router-dom';

import styles from './AppLink.module.scss';

import { classNames } from '@/shared/lib';
import { TestProps } from '@/shared/types';

type AppLinkType = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps, TestProps {
  border?: boolean;
  className?: string;
  type?: AppLinkType;
}

export const AppLink = ({
  to,
  className,
  type = 'primary',
  border,
  dataTestId,
  children,
}: AppLinkProps) => {
  return (
    <Link
      className={classNames(
        styles[type],
        styles.link,
        border && styles.border,
        className
      )}
      data-testid={dataTestId}
      to={to}
    >
      {children}
    </Link>
  );
};
