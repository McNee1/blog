import { useTranslation } from 'react-i18next';

import styles from './SidebarItem.module.scss';

import { classNames, isAccessToPage, useAppSelector } from '@/shared/lib';
import { AppIcon, AppLink } from '@/shared/ui';

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
        className={classNames(styles.link, collapsed && styles.collapsed)}
        dataTestId={`SidebarItem.Link_${item.name}`}
        to={item.path(auth?.id)}
        type='primary'
      >
        <AppIcon
          src={item.icon}
          height='20px'
          width='20px'
        />
        <span className={styles.link_text}>{t(item.name)}</span>
      </AppLink>
    </>
  );
};
