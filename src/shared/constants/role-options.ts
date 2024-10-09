import { userRole } from '@/entities';

export const roleOptions = [
  { name: userRole.ADMIN, value: userRole.ADMIN },
  { name: userRole.MODERATOR, value: userRole.MODERATOR },
  { name: userRole.USER, value: userRole.USER },
];
