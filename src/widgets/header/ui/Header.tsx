import { memo, useCallback, useState } from 'react';

import styles from './Header.module.scss';

import { classNames } from '@/shared/lib';
import { FlexRow } from '@/shared/ui';

import { LangSwitcher, LoginModal, ThemeSwitcher } from '@/features';

import { HeaderAction } from './header-action';

interface HeaderProps {
  className?: string;
}

export const Header = memo(function Header({ className }: HeaderProps) {
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
        <FlexRow
          className={'container'}
          alignItems='center'
          gap='gap20'
        >
          <LangSwitcher />
          <ThemeSwitcher />
          <HeaderAction onOpenModal={handleOpenModal} />
        </FlexRow>
      </header>
      <LoginModal
        onClose={handleCLoseModal}
        isOpen={isOpenModal}
      />
    </>
  );
});
