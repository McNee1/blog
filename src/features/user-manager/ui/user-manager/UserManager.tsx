import { useEffect, useState } from 'react';

import { AsyncSliceManager, useAppDispatch, useAppSelector } from '@/shared/lib';

import { Role } from '@/entities';

import {
  deleteUser,
  fetchUsers,
  getUsersData,
  getUsersError,
  getUsersIsLoading,
  ModalAction,
  updateUser,
  usersSliceAction,
  usersSliceReducer,
} from '../../model';
import { UserModal } from '../user-modal';
import { UsersList } from '../users-list';

interface ModalState {
  action?: ModalAction;
  isOpen: boolean;
}

const initialModalState: ModalState = {
  isOpen: false,
  action: ModalAction.INFO,
};

const initialReducer = usersSliceReducer;

export const UserManager = () => {
  const [modalState, setModalState] = useState(initialModalState);

  const dispatch = useAppDispatch();

  const users = useAppSelector(getUsersData);
  const error = useAppSelector(getUsersError);
  const isLoading = useAppSelector(getUsersIsLoading);

  const handleOpenModal = (action: ModalAction) => {
    setModalState({ isOpen: true, action });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, action: modalState.action });
  };

  const handleDeleteUser = () => {
    void dispatch(deleteUser());
    handleCloseModal();
  };

  const handleChangeRole = (id: string, role: Role) => {
    dispatch(usersSliceAction.setSelectedId(id));

    void dispatch(updateUser({ role, id })).then((e) => {
      if (e.meta.requestStatus === 'fulfilled') {
        handleOpenModal(ModalAction.INFO);
      }
    });
  };

  const handleOpenDeleteModal = (id: string) => {
    console.log(id);
    dispatch(usersSliceAction.setSelectedId(id));
    handleOpenModal(ModalAction.DELETE);
  };

  useEffect(() => {
    void dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <AsyncSliceManager
        reducer={initialReducer}
        name='users'
      >
        <UsersList
          onOpenDeleteModal={handleOpenDeleteModal}
          onChangeRole={handleChangeRole}
          isLoading={isLoading}
          error={error}
          users={users}
        />

        <UserModal
          onDeleteUser={handleDeleteUser}
          onCloseModal={handleCloseModal}
          action={modalState.action}
          isOpen={modalState.isOpen}
        />
      </AsyncSliceManager>
    </>
  );
};
