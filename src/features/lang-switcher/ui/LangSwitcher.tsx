import { useTranslation } from 'react-i18next';

import { AppButton } from '@/shared/ui';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation('translation');

  const toggleLang = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      onClick={toggleLang}
      variant='gray'
      round='sm'
      size='md'
    >
      {t('lang')}
    </AppButton>
  );
};
