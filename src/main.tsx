import '@/app/styles/index.scss';

import ReactDOM from 'react-dom/client';

import { Provider } from './app';

import './shared/config/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root') as Element).render(<Provider />);
