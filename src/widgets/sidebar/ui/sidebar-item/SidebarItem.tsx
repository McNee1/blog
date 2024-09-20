import { useTranslation } from 'react-i18next';
import SVG from 'react-inlinesvg';

import styles from './SidebarItem.module.scss';

import { classNames, isAccessToPage, RoutePath, useAppSelector } from '@/shared/lib';
import { AppLink } from '@/shared/ui';

import { getUserData, getUserRole } from '@/entities';

import { SidebarItemsType } from '../../model';

interface SidebarItemProps {
  collapsed: boolean;
  item: SidebarItemsType;
}
export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  const auth = useAppSelector(getUserData);
  const userRole = useAppSelector(getUserRole);

  const isAccess = isAccessToPage(item.requiredRole, userRole);

  if (item.isAuth && !auth?.id) {
    return null;
  }

  if (item.requiredRole && !isAccess) {
    return null;
  }

  return (
    <>
      <AppLink
        to={item.name === 'profile' ? RoutePath.getProfilePath(auth!.id) : item.path}
        className={classNames(styles.link, collapsed && styles.collapsed)}
        type='primary'
      >
        <SVG
          src={item.icon}
          height='20px'
          width='20px'
        />
        <span className={styles.link_text}>{t(item.name)}</span>
      </AppLink>
    </>
  );
};
