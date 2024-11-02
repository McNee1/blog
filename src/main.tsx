import '@/app/styles/index.scss';

import ReactDOM from 'react-dom/client';

import { ThemedApp } from './app/App';
import { AllProvider } from './app/providers';

import './shared/config/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <AllProvider>
    <ThemedApp />
  </AllProvider>
);
