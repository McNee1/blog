import type { ArticleLayoutType } from '@/pages';

import list from '@/shared/assets/icons/list.svg';
import tile from '@/shared/assets/icons/tile.svg';

interface SwitcherTypes {
  icon: string;
  svgClass?: string;
  view: ArticleLayoutType;
}

export const switcherTypes: SwitcherTypes[] = [
  { view: 'card', icon: list, svgClass: 'svg_list' },
  { view: 'tile', icon: tile, svgClass: 'svg_tile' },
];
