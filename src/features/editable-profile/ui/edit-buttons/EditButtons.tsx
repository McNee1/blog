import { AppButton, ThemeButton } from '@/shared/ui';

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
  // TODO
  return (
    <>
      {canEdit && (
        <div className={className}>
          {readonly ? (
            <AppButton
              data-testid='EditButtons.EditBtn'
              theme={ThemeButton.GREEN}
              onClick={onEdit}
              round='sm'
              size='lg'
            >
              Update Profile
            </AppButton>
          ) : (
            <>
              <AppButton
                data-testid='EditButtons.Save'
                theme={ThemeButton.GREEN}
                onClick={onSaveChanges}
                disabled={isError()}
                round='sm'
                size='lg'
              >
                Save
              </AppButton>
              <AppButton
                data-testid='EditButtons.Cancel'
                theme={ThemeButton.RED}
                onClick={onCancelEdit}
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
