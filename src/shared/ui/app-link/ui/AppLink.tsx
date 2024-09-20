import { Link, LinkProps } from 'react-router-dom';

import styles from './AppLink.module.scss';

import { classNames } from '@/shared/lib';

type AppLinkType = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  border?: boolean;
  className?: string;
  type?: AppLinkType;
}

export const AppLink = ({
  to,
  className,
  type = 'primary',
  border,
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
      to={to}
    >
      {children}
    </Link>
  );
};
