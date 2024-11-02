import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './UserModal.module.scss';

import successIcon from '@/shared/assets/icons/success.svg';
import { useAppSelector } from '@/shared/lib';
import { AppButton, AppIcon, FlexCol, FlexRow, Modal, Portal } from '@/shared/ui';

import { getSelectedUser, getUsersPrevRole, ModalAction } from '../../model';

interface UserModalProps {
  action?: ModalAction;
  className?: string;
  isOpen: boolean;
  onCloseModal: () => void;
  onDeleteUser: () => void;
}

export const UserModal = memo(function UserModal({
  isOpen,
  onCloseModal,
  onDeleteUser,
  action,
}: UserModalProps) {
  const { t } = useTranslation();

  const selectedUser = useAppSelector(getSelectedUser);
  const prevUserRole = useAppSelector(getUsersPrevRole);

  return (
    <Portal>
      <Modal
        onClose={onCloseModal}
        isOpen={isOpen}
      >
        {action === ModalAction.DELETE ? (
          <FlexCol alignItems='center'>
            Удалить пользователя?
            <div className={styles.modal_btn}>
              <AppButton
                dataTestId='UserModal.Accept'
                onClick={onDeleteUser}
                variant='red'
                round='sm'
                size='lg'
              >
                Да
              </AppButton>
              <AppButton
                onClick={onCloseModal}
                variant='green'
                round='sm'
                size='lg'
              >
                Нет
              </AppButton>
            </div>
          </FlexCol>
        ) : (
          <FlexRow
            dataTestId='UserModal.Success_content'
            alignItems='center'
            gap='gap10'
          >
            <AppIcon
              className={styles.svg}
              src={successIcon}
              width='40px'
            />
            {t(
              `You have changed ${selectedUser?.username}'s access rights from ${prevUserRole} to ${selectedUser?.role}`
            )}
          </FlexRow>
        )}
      </Modal>
    </Portal>
  );
});
