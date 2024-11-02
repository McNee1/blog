type NumbersMargin = 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22;

export type MarginButtonType = `mb${NumbersMargin}` | 'auto';
export type MarginLeftType = `ml${NumbersMargin}` | 'auto';
export type MarginTopType = `mt${NumbersMargin}` | 'auto';

type NumbersPadding = 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16;

export type PaddingButtonType = `pb${NumbersPadding}`;
export type PaddingLeftType = `pl${NumbersPadding}`;
export type PaddingTopType = `pt${NumbersPadding}`;
export type PaddingType = `p${NumbersPadding}`;
export type PaddingXType = `px${NumbersPadding}`;
export type PaddingYType = `py${NumbersPadding}`;
