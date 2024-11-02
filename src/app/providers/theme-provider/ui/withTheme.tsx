import { useAppSelector } from '@/shared/lib';

import { getUserSetting } from '@/entities';

import { ThemeProvider } from './ThemeProvider';

export const withTheme = (Component: React.ComponentType) => {
  const WrappedComponent = () => {
    const currTheme = useAppSelector(getUserSetting)?.theme;

    return (
      <ThemeProvider initTheme={currTheme}>
        <Component />
      </ThemeProvider>
    );
  };

  // Установите displayName для улучшения отладки
  WrappedComponent.displayName = 'WithTheme';

  return WrappedComponent;
};
