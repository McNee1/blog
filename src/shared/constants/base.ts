import type { ArticleCategory } from '@/entities';

export const FORMAT_DATE_OPT: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

export const CATEGORY: ArticleCategory[] = [
  'ALL',
  'ECONOMICS',
  'IT',
  'SCIENCE',
  'TECHNOLOGY',
];
