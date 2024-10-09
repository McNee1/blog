import { createSelector } from '@reduxjs/toolkit';

import { getUsersData } from '../get-users-data';
import { getUsersSelectedId } from '../get-users-selected-id';

export const getSelectedUser = createSelector(
  getUsersData,
  getUsersSelectedId,
  (users, selectedId) => {
    return users?.find((user) => user.id === selectedId);
  }
);
