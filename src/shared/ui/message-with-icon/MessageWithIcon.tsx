import styles from './MessageWithIcon.module.scss';

import { AppIcon, Card, FlexCol, Typography } from '@/shared/ui';

interface MessageWithIconProps {
  srcIcon: string;
  text: string;
}
// wrapp
export const MessageWithIcon = ({ text, srcIcon }: MessageWithIconProps) => {
  return (
    <Card>
      <FlexCol
        alignItems='center'
        gap='gap12'
      >
        <AppIcon
          className={styles.svg}
          src={srcIcon}
          width='75px'
        />
        <Typography
          content={text}
          as='h2'
        />
      </FlexCol>
    </Card>
  );
};
