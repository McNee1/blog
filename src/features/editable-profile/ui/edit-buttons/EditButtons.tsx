import { AppButton } from '@/shared/ui';

import { ProfileValidationErrors } from '@/entities';

interface EditButtonsProps {
  canEdit: boolean;
  className?: string;
  inputErrors: ProfileValidationErrors | null;
  onCancelEdit?: () => void;
  onEdit?: () => void;
  onSaveChanges?: () => void;
  readonly: boolean;
}

export const EditButtons = ({
  onCancelEdit,
  onEdit,
  onSaveChanges,
  canEdit,
  readonly,
  inputErrors,
  className,
}: EditButtonsProps) => {
  const isError = () => {
    if (inputErrors) {
      return !Object.values(inputErrors).every((error) => error.length === 0);
    } else {
      return false;
    }
  };

  return (
    <>
      {canEdit && (
        <div className={className}>
          {readonly ? (
            <AppButton
              data-testid='EditButtons.EditBtn'
              onClick={onEdit}
              variant='green'
              round='sm'
              size='lg'
            >
              Update Profile
            </AppButton>
          ) : (
            <>
              <AppButton
                data-testid='EditButtons.Save'
                onClick={onSaveChanges}
                disabled={isError()}
                variant='green'
                round='sm'
                size='lg'
              >
                Save
              </AppButton>
              <AppButton
                data-testid='EditButtons.Cancel'
                onClick={onCancelEdit}
                variant='red'
                round='sm'
                size='lg'
              >
                Cancel
              </AppButton>
            </>
          )}
        </div>
      )}
    </>
  );
};
