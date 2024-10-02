import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <div data-testid='MainPage'>{t('Home page')}</div>
    </>
  );
};
export default MainPage;
