import { memo, useCallback, useState } from 'react';

import styles from './Header.module.scss';

import { classNames } from '@/shared/lib';
import { FlexGroup } from '@/shared/ui';

import { LangSwitcher, LoginModal, ThemeSwitcher } from '@/features';

import { HeaderAction } from './header-action';

interface HeaderProps {
  className?: string;
}

const HeaderComponent = ({ className }: HeaderProps) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCLoseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <>
      <header
        className={classNames(styles.navbar, className)}
        data-testid='Header'
      >
        <div className={classNames('container', styles.navbar_wrap)}>
          <FlexGroup
            className={styles.btn_group}
            direction='row'
          >
            <LangSwitcher />
            <ThemeSwitcher />
            <HeaderAction onOpenModal={handleOpenModal} />
          </FlexGroup>
        </div>
      </header>
      <LoginModal
        onClose={handleCLoseModal}
        isOpen={isOpenModal}
      />
    </>
  );
};

export const Header = memo(HeaderComponent);
