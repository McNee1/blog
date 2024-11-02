import { userRole } from '@/entities';

export const ROLE_OPTIONS = [
  { name: userRole.ADMIN, value: userRole.ADMIN },
  { name: userRole.MODERATOR, value: userRole.MODERATOR },
  { name: userRole.USER, value: userRole.USER },
];
