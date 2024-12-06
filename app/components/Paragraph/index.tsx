import { motion } from 'motion/react';
import { ReactNode } from 'react';
import animations from './animations';

interface Props {
  className?: string;
  children: ReactNode;
}

const Paragraph = ({ className = '', children }: Props) => {
  return (
    <motion.p className={className} {...animations.paragraph}>
      {children}
    </motion.p>
  );
};

export default Paragraph;
