import { ReactNode, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './HeaderMenu.module.scss';

import { getProfilePath, getUserArticlesPath, useAppDispatch } from '@/shared/lib';
import { AppPopup } from '@/shared/ui';

import { userAction } from '@/entities';

interface HeaderMenuProps {
  profileId: string;
  reference: ReactNode;
  referenceClass?: string;
}

export const HeaderMenu = ({ referenceClass, reference, profileId }: HeaderMenuProps) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const handleLogout = useCallback(() => {
    dispatch(userAction.logoutUser());
  }, [dispatch]);

  const menuItems = useMemo(
    () => [
      {
        content: t('profile'),
        href: getProfilePath(profileId),
      },
      {
        href: getUserArticlesPath(profileId),
        content: t('My articles'),
      },

      {
        content: t('Log out'),
        action: handleLogout,
      },
    ],
    [handleLogout, profileId, t]
  );

  return (
    <AppPopup
      popupClass={styles.header_menu}
      referenceClass={referenceClass}
      dataTestId='HeaderMenu'
      reference={reference}
      items={menuItems}
    />
  );
};
