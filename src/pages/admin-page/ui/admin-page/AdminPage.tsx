import { PageManager } from '@/widgets';

import { UserManager } from '../user-manager';

const AdminPage = () => {
  return (
    <PageManager>
      <UserManager />
    </PageManager>
  );
};

export default AdminPage;
