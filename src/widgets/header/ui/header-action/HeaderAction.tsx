import { useTranslation } from 'react-i18next';

import styles from './HeaderAction.module.scss';

import pencilIcon from '@/shared/assets/icons/pencil.svg';
import { getNewArticlePath, useAppSelector } from '@/shared/lib';
import {
  AppButton,
  AppIcon,
  AppImage,
  AppLink,
  FlexGroup,
  Skeleton,
  ThemeButton,
} from '@/shared/ui';

import { getUserData } from '@/entities';

import { HeaderMenu } from '../header-menu';

interface HeaderActionProps {
  onOpenModal: () => void;
}

export const HeaderAction = ({ onOpenModal }: HeaderActionProps) => {
  const authData = useAppSelector(getUserData);

  const { t } = useTranslation();

  return (
    <>
      {!authData ? (
        <AppButton
          dataTestId='HeaderAction.btn_login'
          className={styles.btn_login}
          theme={ThemeButton.BLUE}
          onClick={onOpenModal}
          round='md'
          size='lg'
        >
          {t('Log in')}
        </AppButton>
      ) : (
        <FlexGroup
          alignItems='center'
          spaceLeft='auto'
          direction='row'
          gap='gap20'
        >
          <AppLink
            className={styles.new_article}
            to={getNewArticlePath()}
          >
            <AppIcon
              src={pencilIcon}
              height='22px'
              width='22px'
            />
          </AppLink>
          <HeaderMenu
            reference={
              <AppButton
                dataTestId='HeaderAction.btn_avatar'
                className={styles.btn_avatar}
                round='full'
              >
                <AppImage
                  fallback={
                    <Skeleton
                      height='40px'
                      border='100%'
                      width='40px'
                    />
                  }
                  src={authData.avatar}
                  round='full'
                />
              </AppButton>
            }
            profileId={authData.id}
          />
        </FlexGroup>
      )}
    </>
  );
};
