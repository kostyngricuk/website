import { motion } from 'motion/react';

import { ThemeColors } from 'tailwind.config';

import Paragraph from '~/components/Paragraph';
import Title, { TitleTypes } from '~/components/Title';
import AccentText from '~/components/AccentText';
import TechString from './components/TechString';

import animations from './animations';

export default function Hero() {
  return (
    <motion.section {...animations.heroSection} className="h-screen flex flex-col justify-center">
      <div className="container">
        <Title as={TitleTypes.h1}>Kanstantsin Hrytsuk</Title>
        <Paragraph>
          <AccentText color={ThemeColors.orange}>Frontend Developer</AccentText> with{' '}
          <AccentText color={ThemeColors.green}>6+ years</AccentText> of experience
          <br />
          Development of modern websites and mobile apps using <TechString />
        </Paragraph>
      </div>
    </motion.section>
  );
}
