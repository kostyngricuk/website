import { ReactNode } from 'react';
import { motion } from 'motion/react';

import { ThemeColors } from 'tailwind.config';

import animations from './animations';

export enum Sizes {
  small = '.5em',
  medium = '.85em',
  base = '1em',
  large = '1.25em',
  extraLarge = '1.5em',
}

interface Props {
  className?: string;
  children: ReactNode;
  color?: ThemeColors;
  size?: Sizes;
  isUnderlined?: boolean;
}

const AccentText = ({
  className = '',
  children,
  color = ThemeColors.black,
  size = Sizes.base,
  isUnderlined = false,
}: Props) => {
  const Tag = motion.create(isUnderlined ? 'u' : 'span');

  return (
    <Tag
      className={className}
      {...animations.accentText}
      style={{
        color,
        fontSize: size,
        fontWeight: 900,
      }}
    >
      {children}
    </Tag>
  );
};

export default AccentText;
