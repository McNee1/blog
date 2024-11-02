import { ChangeEvent, memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ProfileForm.module.scss';

import { classNames } from '@/shared/lib';
import { CustomSelect, FlexRow, Label, TextError, TextField } from '@/shared/ui';

import { countries } from '@/entities';

import { inputNames, ProfileType, ProfileValidationErrors } from '../../model';

interface ProfileFormProps {
  inputErrors: ProfileValidationErrors | null;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (e: string) => void;
  profileData: ProfileType | null;
  readonly: boolean;
}

const getErrorClass = (error: string | undefined) =>
  error ? styles.input_error : styles.input_wrap;

export const ProfileForm = memo(function ProfileForm({
  inputErrors,
  readonly,
  onBlur,
  onChangeInput,
  onChangeSelect,
  profileData,
}: ProfileFormProps) {
  const { t } = useTranslation('profile');

  return (
    <>
      <div className={classNames(getErrorClass(inputErrors?.username))}>
        <TextField
          data-testid='ProfileForm.UserName'
          label={t(inputNames.USERNAME)}
          value={profileData?.username}
          error={inputErrors?.username}
          name={inputNames.USERNAME}
          onChange={onChangeInput}
          readOnly={readonly}
          onBlur={onBlur}
        />

        <TextError
          data-testid='ProfileForm.UserNameError'
          error={inputErrors?.username}
          name={inputNames.USERNAME}
        />
      </div>
      <div className={classNames(getErrorClass(inputErrors?.firstName))}>
        <TextField
          data-testid='ProfileForm.FirstName'
          label={t(inputNames.FIRST_NAME)}
          value={profileData?.firstName}
          error={inputErrors?.firstName}
          name={inputNames.FIRST_NAME}
          onChange={onChangeInput}
          readOnly={readonly}
          onBlur={onBlur}
        />

        <TextError
          data-testid='ProfileForm.FirstNameError'
          error={t(inputErrors?.firstName ?? '')}
          name={t(inputNames.FIRST_NAME ?? '')}
        />
      </div>
      <div
        className={classNames(styles.input_wrap, getErrorClass(profileData?.lastName))}
      >
        <TextField
          data-testid='ProfileForm.LastName'
          label={t(inputNames.LAST_NAME)}
          value={profileData?.lastName}
          error={inputErrors?.lastName}
          name={inputNames.LAST_NAME}
          onChange={onChangeInput}
          readOnly={readonly}
          onBlur={onBlur}
        />
        <TextError
          data-testid='ProfileForm.LastNameError'
          error={t(inputErrors?.lastName ?? '')}
          name={t(inputNames.LAST_NAME ?? '')}
        />
      </div>
      <div className={classNames(getErrorClass(inputErrors?.email))}>
        <TextField
          data-testid='ProfileForm.Email'
          label={t(inputNames.EMAIL)}
          value={profileData?.email}
          error={inputErrors?.email}
          onChange={onChangeInput}
          name={inputNames.EMAIL}
          readOnly={readonly}
          onBlur={onBlur}
        />
        <TextError
          data-testid='ProfileForm.EmailError'
          error={t(inputErrors?.email ?? '')}
          name={t(inputNames.EMAIL ?? '')}
        />
      </div>
      <FlexRow
        className={classNames(getErrorClass(inputErrors?.age ?? inputErrors?.avatar))}
        gap='gap10'
      >
        <div className={styles.age_input}>
          <TextField
            data-testid='ProfileForm.Age'
            label={t(inputNames.AGE)}
            value={profileData?.age}
            onChange={onChangeInput}
            error={inputErrors?.age}
            name={inputNames.AGE}
            readOnly={readonly}
            onBlur={onBlur}
            type='number'
          />
          <TextError
            data-testid='ProfileForm.AgeError'
            error={t(inputErrors?.age ?? '')}
            name={t(inputNames.AGE ?? '')}
          />
        </div>
        <div className={styles.avatar_input}>
          <TextField
            value={profileData?.avatar ?? ''}
            data-testid='ProfileForm.Avatar'
            label={t(inputNames.AVATAR)}
            error={inputErrors?.avatar}
            onChange={onChangeInput}
            name={inputNames.AVATAR}
            readOnly={readonly}
            onBlur={onBlur}
          />
          <TextError
            data-testid='ProfileForm.AvatarError'
            error={t(inputErrors?.avatar ?? '')}
            name={t(inputNames.AVATAR ?? '')}
          />
        </div>
      </FlexRow>
      <FlexRow gap='gap10'>
        <div className={styles.select}>
          <Label label='Select country' />
          <CustomSelect
            value={profileData?.country}
            placeholder='Select country'
            onChange={onChangeSelect}
            options={countries}
            disabled={readonly}
          />
        </div>

        <div className={styles.city_input}>
          <TextField
            data-testid='ProfileForm.City'
            label={t(inputNames.CITY)}
            value={profileData?.city}
            error={inputErrors?.city}
            onChange={onChangeInput}
            name={inputNames.CITY}
            readOnly={readonly}
            onBlur={onBlur}
          />
          <TextError
            data-testid='ProfileForm.CityError'
            error={t(inputErrors?.city ?? '')}
            name={t(inputNames.CITY ?? '')}
          />
        </div>
      </FlexRow>
    </>
  );
});
