import styles from './SmArticle.module.scss';

import { formatDate, getArticleDetailPath } from '@/shared/lib';
import { AppLink, Card, DateView, FlexGroup, Typography, ViewCount } from '@/shared/ui';

import { ArticleType, BadgeList } from '@/entities';

interface SmArticleProps {
  article: ArticleType;
}

export const SmArticle = ({ article }: SmArticleProps) => {
  return (
    <div>
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

          <Typography text={article.subtitle} />
        </div>
        <FlexGroup
          className={styles.card_footer}
          direction='row'
          gap='gap20'
        >
          <ViewCount views={article.views} />
          <DateView date={formatDate(article.createdAt, { dateStyle: 'medium' })} />
        </FlexGroup>
      </Card>
    </div>
  );
};
