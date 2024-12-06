import { motion } from 'motion/react';
import Paragraph from '~/components/Paragraph';
import Title from '~/components/Title';
import { TitleTypes } from '~/components/Title/helpers';
import animations from './animations';

export default function Hero() {
  return (
    <motion.section className="bg-black text-white" {...animations.heroSection}>
      <div className="container">
        <Title as={TitleTypes.h1}>Hi, there!</Title>
        <Paragraph>
          My name is <strong>Kanstantsin Hrytsuk.</strong> <br />I am a Frontend Developer.
        </Paragraph>
      </div>
    </motion.section>
  );
}
