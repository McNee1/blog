import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <div>{t('Home page')}</div>
    </>
  );
};
export default MainPage;
