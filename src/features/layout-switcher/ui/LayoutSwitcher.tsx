import type { ArticleLayoutType } from '@/pages';

import styles from './LayoutSwitcher.module.scss';

import { classNames } from '@/shared/lib';
import { AppIcon, Card } from '@/shared/ui';

import { switcherTypes } from '../model';

interface LayoutSwitcherProps {
  activeLayout: ArticleLayoutType;
  className?: string;
  onActiveLayout: (view: ArticleLayoutType) => void;
}

export const LayoutSwitcher = ({
  activeLayout,
  onActiveLayout,
  className,
}: LayoutSwitcherProps) => {
  const handleSwitch = (type: ArticleLayoutType) => {
    onActiveLayout(type);
  };

  return (
    <Card className={className}>
      <div className={styles.layout_switch}>
        {switcherTypes.map((type) => {
          return (
            <div
              className={classNames(
                styles.switch,
                type.view === activeLayout && styles.active
              )}
              onClick={() => handleSwitch(type.view)}
              key={type.view}
            >
              <AppIcon
                className={classNames(type.svgClass && styles[type.svgClass])}
                src={type.icon}
                height='20px'
                width='20px'
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
};
