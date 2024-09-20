import { useParams } from 'react-router-dom';

import { EditableProfile } from '@/features';
import { PageManager } from '@/widgets';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageManager width='xl'>
      <EditableProfile id={id} />
    </PageManager>
  );
};

export default ProfilePage;
