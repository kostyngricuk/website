import { MotionProps } from 'motion/react';

export interface Animations {
  [key: string]: MotionProps;
}

export interface Paths {
  home: string;
  about: string;
  blog: string;
  contact: string;
}
