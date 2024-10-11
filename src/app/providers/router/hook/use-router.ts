import { createBrowserRouter } from 'react-router-dom';

import { routerConfig } from '../lib';

export const useRouter = () => createBrowserRouter(routerConfig);
