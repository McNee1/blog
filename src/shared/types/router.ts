import { PathName } from '../constants';

export type PathNameType = Record<(typeof PathName)[keyof typeof PathName], string>;

export type PathNameKey = keyof typeof PathName;
