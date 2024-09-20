import type { ArticleCategory } from '@/entities';

export const getTypeColor = (type: ArticleCategory) => {
  switch (type) {
    case 'ECONOMICS':
      return 'success';

    case 'IT':
      return 'primary';
    case 'SCIENCE':
      return 'info';
    case 'TECHNOLOGY':
      return 'warning';
    default:
      return 'success';
  }
};
