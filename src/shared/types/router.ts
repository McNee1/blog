import { PATCH_NAME } from '../constants';

export type PathNameType = Record<(typeof PATCH_NAME)[keyof typeof PATCH_NAME], string>;

export type PathNameKey = keyof typeof PATCH_NAME;
