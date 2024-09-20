import { getUserData } from '@/entities';
import { createSelector } from '@reduxjs/toolkit';

import { getProfileData } from '../get-profile-data';

export const getCanEditProfile = createSelector(
  getUserData,
  getProfileData,
  (authData, profileData) => {
    if (!authData || !profileData) {
      return false;
    }
    return authData.id === profileData.id;
  }
);
