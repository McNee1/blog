import { useTranslation } from 'react-i18next';
import SVG from 'react-inlinesvg';

import styles from './UserModal.module.scss';

import successIcon from '@/shared/assets/icons/success.svg';
import { useAppSelector } from '@/shared/lib';
import { AppButton, FlexGroup, Modal, Portal, ThemeButton } from '@/shared/ui';

import { getSelectedUser, getUsersPrevRole, ModalAction } from '../../model';

interface UserModalProps {
  action?: ModalAction;
  className?: string;
  isOpen: boolean;
  onCloseModal: () => void;
  onDeleteUser: () => void;
}

export const UserModal = ({
  isOpen,
  onCloseModal,
  onDeleteUser,
  action,
}: UserModalProps) => {
  const { t } = useTranslation();

  const selectedUser = useAppSelector(getSelectedUser);
  const prevUserRole = useAppSelector(getUsersPrevRole);

  return (
    <>
      <Portal>
        <Modal
          onClose={onCloseModal}
          isOpen={isOpen}
        >
          {action === ModalAction.DELETE ? (
            <FlexGroup
              alignItems='center'
              direction='col'
            >
              Удалить пользователя?
              <div className={styles.modal_btn}>
                <AppButton
                  theme={ThemeButton.RED}
                  onClick={onDeleteUser}
                  round='sm'
                  size='lg'
                >
                  Да
                </AppButton>
                <AppButton
                  theme={ThemeButton.GREEN}
                  onClick={onCloseModal}
                  round='sm'
                  size='lg'
                >
                  Нет
                </AppButton>
              </div>
            </FlexGroup>
          ) : (
            <FlexGroup
              alignItems='center'
              direction='row'
              gap='gap10'
            >
              <SVG
                className={styles.svg}
                src={successIcon}
                width={40}
              />
              {t(
                `You have changed ${selectedUser?.username}'s access rights from ${prevUserRole} to ${selectedUser?.role}`
              )}
            </FlexGroup>
          )}
        </Modal>
      </Portal>
    </>
  );
};
