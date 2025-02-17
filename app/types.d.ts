import type { PageName } from '~/types/enum';
import type { ValueOf } from '~/types/helper';

import { MotionProps } from 'motion/react';

declare namespace Global {
  export interface Page {
    name: string;
    path: string;
  }

  export type PageNames = ValueOf<PageName>;

  export type Navigation = Record<PageName, Page>;

  export type Breadcrumbs = Record<PageName, Page[]>;

  export interface Animations {
    [key: string]: MotionProps;
  }
}
