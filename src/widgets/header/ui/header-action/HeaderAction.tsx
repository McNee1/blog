import { useTranslation } from 'react-i18next';
import SVG from 'react-inlinesvg';

import styles from './HeaderAction.module.scss';

import pencilIcon from '@/shared/assets/icons/pencil.svg';
import { RoutePath, useAppSelector } from '@/shared/lib';
import { AppButton, AppImage, AppLink, FlexGroup, ThemeButton } from '@/shared/ui';

import { getUserData } from '@/entities';

import { HeaderMenu } from '../header-menu';

interface HeaderActionProps {
  onOpenModal: () => void;
}

export const HeaderAction = ({ onOpenModal }: HeaderActionProps) => {
  const authData = useAppSelector(getUserData);
  console.log(authData);
  const { t } = useTranslation();

  return (
    <>
      {!authData ? (
        <AppButton
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
            to={RoutePath.getNewArticlePath()}
            className={styles.new_article}
          >
            <SVG
              src={pencilIcon}
              width='22px'
            />
          </AppLink>
          <HeaderMenu
            reference={
              <AppImage
                className={styles.avatar}
                src={authData.avatar}
                round='full'
                size={40}
              />
            }
            profileId={authData.id}
          />
        </FlexGroup>
      )}
    </>
  );
};
