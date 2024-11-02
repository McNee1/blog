import styles from './SmArticle.module.scss';

import { getArticleDetailPath } from '@/shared/lib';
import { AppLink, Card, DateView, FlexRow, Typography, ViewCount } from '@/shared/ui';

import { ArticleType, BadgeList } from '@/entities';

interface SmArticleProps {
  article: ArticleType;
}

export const SmArticle = ({ article }: SmArticleProps) => {
  return (
    <Card className={styles.tile_card}>
      <div className={styles.card_header}>
        <BadgeList types={article.type} />
      </div>
      <div className={styles.card_body}>
        <AppLink
          to={getArticleDetailPath(article.id)}
          className={styles.title}
        >
          {article.title}
        </AppLink>

        <Typography content={article.subtitle} />
      </div>
      <FlexRow
        className={styles.card_footer}
        gap='gap20'
      >
        <ViewCount views={article.views} />
        <DateView
          options={{ dateStyle: 'medium' }}
          date={article.createdAt}
        />
      </FlexRow>
    </Card>
  );
};
