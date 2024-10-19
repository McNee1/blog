import styles from './MessageWithIcon.module.scss';

import { AppIcon, Card, FlexGroup, Typography } from '@/shared/ui';

interface MessageWithIconProps {
  srcIcon: string;
  text: string;
}

export const MessageWithIcon = ({ text, srcIcon }: MessageWithIconProps) => {
  return (
    <Card>
      <FlexGroup
        alignItems='center'
        direction='col'
        gap='gap12'
      >
        <AppIcon
          className={styles.svg}
          src={srcIcon}
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
