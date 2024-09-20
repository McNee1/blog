import { ArticleManager, PageManager } from '@/widgets';

const CreateArticlePage = () => {
  return (
    <PageManager
      direction='col'
      gap='gap10'
    >
      <ArticleManager pageType='new' />
    </PageManager>
  );
};

export default CreateArticlePage;
