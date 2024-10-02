import SVG from 'react-inlinesvg';

import styles from './SuccessfullyAdded.module.scss';

import successIcon from '@/shared/assets/icons/success.svg';
import { Card, FlexGroup, Typography } from '@/shared/ui';

export const SuccessfullyAdded = ({ text }: { text: string }) => {
  return (
    <Card>
      <FlexGroup
        alignItems='center'
        direction='col'
        gap='gap12'
      >
        <SVG
          className={styles.svg}
          src={successIcon}
          width={75}
        />
        <Typography
          titleLevel='h2'
          title={text}
        />
      </FlexGroup>
    </Card>
  );
};
