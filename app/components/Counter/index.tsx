import { motion } from 'motion/react';
import animations from './animations';
import Title, { TitleTypes } from '../Title';
import Paragraph from '../Paragraph';

interface Props {
  title: string;
  value: number;
}

const Counter = ({ title, value }: Props) => {
  return (
    <motion.div className="flex flex-col justify-center items-center" {...animations.counter}>
      <Title as={TitleTypes.h3}>{title}</Title>
      <Paragraph>{value}</Paragraph>
    </motion.div>
  );
};

export default Counter;
