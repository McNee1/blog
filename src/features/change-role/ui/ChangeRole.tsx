import { memo, useCallback } from 'react';

import { ROLE_OPTIONS } from '@/shared/constants';
import { CustomSelect } from '@/shared/ui';

import { Role } from '@/entities';

interface RoleEditorProps {
  className?: string;
  disabled?: boolean;
  onChangeRole: (role: Role) => void;
  userRole?: string;
}

export const ChangeRole = memo(function RoleEditor({
  userRole,
  className,
  onChangeRole,
  disabled,
}: RoleEditorProps) {
  const handleChangeRole = useCallback(
    (value: Role) => {
      onChangeRole(value);
    },
    [onChangeRole]
  );

  return (
    <CustomSelect
      placeholder='Change user role'
      onChange={handleChangeRole}
      dataTestId='RoleEditor'
      options={ROLE_OPTIONS}
      className={className}
      disabled={disabled}
      value={userRole}
    />
  );
});
