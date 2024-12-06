import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { getClassName, TitleTypes } from './helpers';
import animations from './animations';
import classNames from 'classnames';

interface Props {
  className?: string;
  children: ReactNode;
  as?: TitleTypes;
}

const Title = ({ className = '', children, as = TitleTypes.h1 }: Props) => {
  const MotionComponent = motion.create(as, { forwardMotionProps: true });

  return (
    <MotionComponent className={classNames(getClassName(as), className)} {...animations.title}>
      {children}
    </MotionComponent>
  );
};

export default Title;
