import { ArticleManager, PageManager } from '@/widgets';

const EditArticlePage = () => {
  return (
    <PageManager
      direction='col'
      gap='gap10'
    >
      <ArticleManager pageType='edit' />
    </PageManager>
  );
};

export default EditArticlePage;
