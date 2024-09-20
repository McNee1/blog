import { Suspense } from 'react';

import { Modal, Portal, Preloader } from '@/shared/ui';

import { LoginForm } from '../login-form';

interface LoginFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginFormProps) => {
  return (
    <Portal>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
      >
        <Suspense fallback={<Preloader />}>
          <LoginForm onClose={onClose} />
        </Suspense>
      </Modal>
    </Portal>
  );
};
