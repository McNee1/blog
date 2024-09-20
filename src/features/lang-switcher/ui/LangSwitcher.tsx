import { useTranslation } from 'react-i18next';

import { AppButton, ThemeButton } from '@/shared/ui';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      theme={ThemeButton.GRAY}
      onClick={toggleLang}
      round='sm'
    >
      {t('lang')}
    </AppButton>
  );
};
