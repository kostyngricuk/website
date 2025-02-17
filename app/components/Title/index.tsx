import { motion } from 'motion/react';
import { ReactNode } from 'react';
import animations from './animations';

export enum TitleTypes {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}

interface Props {
  className?: string;
  children: ReactNode;
  as?: `${TitleTypes}`;
}

const Title = ({ className = '', children, as = TitleTypes.h1 }: Props) => {
  const MotionComponent = motion.create(as);

  return (
    <MotionComponent className={className} {...animations.title}>
      {children}
    </MotionComponent>
  );
};

export default Title;
