import { useTranslation } from 'react-i18next';

import { Card, Typography } from '@/shared/ui';

export const Description = ({ className }: { className?: string }) => {
  const { t } = useTranslation('article');

  return (
    <Card className={className}>
      <Typography
        content={t('article list')}
        variant='secondary'
        size='lg'
        as='h1'
      />
      <Typography
        content={t(
          "discover the world's knowledge with our collection of articles on a wide variety of topics. Here you will find in-depth analysis, inspiring stories and the latest news from the world of science, technology, culture and art. Immerse yourself in reading and expand your horizons!"
        )}
        variant='secondary'
      />
    </Card>
  );
};
