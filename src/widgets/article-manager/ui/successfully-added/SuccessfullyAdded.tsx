import styles from './SuccessfullyAdded.module.scss';

import successIcon from '@/shared/assets/icons/success.svg';
import { AppIcon, Card, FlexGroup, Typography } from '@/shared/ui';

export const SuccessfullyAdded = ({ text }: { text: string }) => {
  return (
    <Card>
      <FlexGroup
        alignItems='center'
        direction='col'
        gap='gap12'
      >
        <AppIcon
          className={styles.svg}
          src={successIcon}
          width='75px'
        />
        <Typography
          titleLevel='h2'
          title={text}
        />
      </FlexGroup>
    </Card>
  );
};
