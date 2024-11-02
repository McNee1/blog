import { useState } from 'react';

import styles from './Sidebar.module.scss';

import { classNames } from '@/shared/lib';
import { AppButton, FlexCol } from '@/shared/ui';

import { sidebarItems } from '../../model';
import { SidebarItem } from '../sidebar-item';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={classNames(styles.sidebar, collapsed && styles.collapsed)}
      data-testid='sidebar'
    >
      <FlexCol
        gap={collapsed ? 'gap14' : 'gap12'}
        className={styles.nav}
      >
        {sidebarItems.map((item) => (
          <SidebarItem
            collapsed={collapsed}
            key={item.name}
            item={item}
          />
        ))}
      </FlexCol>

      <AppButton
        className={styles.sidebar_button}
        onClick={handleToggle}
        data-testid='btn'
        round='full'
      >
        <div className={classNames(styles.lines, [collapsed && styles.active_collapsed])}>
          <i className={styles.line}></i>
          <i className={styles.line}></i>
          <i className={styles.line}></i>
        </div>
      </AppButton>
    </aside>
  );
};
