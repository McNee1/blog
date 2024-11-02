import { createSelector } from '@reduxjs/toolkit';

import { getUserData } from '../get-user-data';

export const getUserId = createSelector(getUserData, (userData) => userData?.id);
