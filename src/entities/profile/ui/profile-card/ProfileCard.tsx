import { ChangeEvent, memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ProfileCard.module.scss';

import { AppImage, Card, Preloader, Skeleton, Typography } from '@/shared/ui';

import { inputNames, ProfileType, ProfileValidationErrors } from '../../model';
import { ProfileForm } from '../profile-form';

interface ProfileCardProps {
  avatar?: string;
  editProfile: () => ReactNode;
  email?: string;

  error: string | null;
  inputErrors: ProfileValidationErrors | null;
  isLoading: boolean;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (e: string) => void;
  profileData: ProfileType | null;

  readonly: boolean;
  username?: string;
}

const ProfileCardComponent = ({
  avatar,
  email,
  username,
  inputErrors,
  profileData,
  readonly,
  onBlur,
  onChangeInput,
  onChangeSelect,
  editProfile,
  error,
  isLoading,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return <Preloader height='full' />;
  }

  if (error) {
    return (
      <Typography
        theme='error'
        text={error}
      />
    );
  }
  return (
    <div className={styles.profile}>
      <Card
        className={styles.profile_card}
        padding={false}
      >
        <AppImage
          fallback={<Skeleton height='200px' />}
          src={avatar}
        />
        <div className={styles.card_body}>
          <p
            data-testid='ProfileCard.UserName'
            className='card-text'
          >
            {t(inputNames.USERNAME)}: {username}
          </p>
          <p
            data-testid='ProfileCard.Email'
            className='card-text'
          >
            {t(inputNames.EMAIL)}: {email}
          </p>
        </div>
      </Card>

      <Card
        className={styles.profile_form}
        overflow='visible'
      >
        <ProfileForm
          onChangeSelect={onChangeSelect}
          onChangeInput={onChangeInput}
          inputErrors={inputErrors}
          profileData={profileData}
          readonly={readonly}
          onBlur={onBlur}
        />
        {editProfile()}
      </Card>
    </div>
  );
};

export const ProfileCard = memo(ProfileCardComponent);
