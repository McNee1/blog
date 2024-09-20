import { UserManager } from '@/features';
import { PageManager } from '@/widgets';

const UsersPage = () => {
  return (
    <PageManager direction='col'>
      <UserManager />
    </PageManager>
  );
};

export default UsersPage;
