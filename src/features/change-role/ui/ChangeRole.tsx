import { memo, useCallback } from 'react';

import { roleOptions } from '@/shared/constants';
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
      options={roleOptions}
      className={className}
      disabled={disabled}
      value={userRole}
    />
  );
});
