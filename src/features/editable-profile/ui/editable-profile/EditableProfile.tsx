import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import styles from './EditableProfile.module.scss';

import { AsyncSliceManager, useAppDispatch, useAppSelector } from '@/shared/lib';

import { ProfileCard, ProfileType, ProfileValidationErrors } from '@/entities';

import { validationInputError } from '../../lib';
import {
  fetchProfile,
  getCanEditProfile,
  getProfileDataFrom,
  getProfileError,
  getProfileIsLoading,
  getProfilerReadonly,
  initUpdate,
  profileAction,
  profileReducer,
} from '../../model';
import { EditButtons } from '../edit-buttons';

interface EditableProfileProps {
  id: string | undefined;
}

const initialReducer = { profile: profileReducer };

export const EditableProfile = ({ id }: EditableProfileProps) => {
  const [inputErrors, setInputError] = useState<ProfileValidationErrors | null>(null);

  const profileData = useAppSelector(getProfileDataFrom);

  const isLoading = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);
  const readonly = useAppSelector(getProfilerReadonly);
  const canEdit = useAppSelector(getCanEditProfile);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && process.env.NODE_ENV !== 'test') {
      void dispatch(fetchProfile(id));
    }
  }, [dispatch, id]);

  const handleEdit = useCallback(() => {
    dispatch(profileAction.cancelReadonly());
  }, [dispatch]);

  const handleCancelEdit = useCallback(() => {
    setInputError(null);
    dispatch(profileAction.setReadonly());
  }, [dispatch]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const errors = validationInputError(
      e.target.name as keyof ProfileType,
      e.target.value
    );

    setInputError((prev) => ({
      ...prev,
      ...errors,
    }));

    dispatch(profileAction.updateProfileForm({ [e.target.name]: e.target.value }));
  };

  const handleChangeSelect = (value: string) => {
    dispatch(profileAction.updateProfileForm({ country: value }));
  };

  const handleSaveChanges = () => {
    void dispatch(initUpdate());
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    if (readonly) return;

    const errors = validationInputError(
      e.target.name as keyof ProfileType,
      e.target.value
    );

    setInputError((prev) => ({
      ...prev,
      ...errors,
    }));
  };

  return (
    <AsyncSliceManager reducers={initialReducer}>
      <ProfileCard
        editProfile={() => (
          <EditButtons
            onSaveChanges={handleSaveChanges}
            className={styles.form_actions}
            onCancelEdit={handleCancelEdit}
            inputErrors={inputErrors}
            readonly={readonly}
            onEdit={handleEdit}
            canEdit={canEdit}
          />
        )}
        onChangeSelect={handleChangeSelect}
        onChangeInput={handleChangeInput}
        username={profileData?.username}
        avatar={profileData?.avatar}
        email={profileData?.email}
        profileData={profileData}
        inputErrors={inputErrors}
        isLoading={isLoading}
        readonly={readonly}
        onBlur={handleBlur}
        error={error}
      />
    </AsyncSliceManager>
  );
};
