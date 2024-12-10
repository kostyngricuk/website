import { motion } from 'motion/react';

import { ThemeColors } from 'tailwind.config';

import BackgroundParticles from '../BackgroundParticles';
import Paragraph from '~/components/Paragraph';
import Title, { TitleTypes } from '~/components/Title';
import AccentText from '~/components/AccentText';

import TechString from './components/TechString';

import animations from './animations';

export default function Hero() {
  return (
    <motion.section {...animations.heroSection} className="h-screen flex flex-col justify-center">
      <BackgroundParticles />
      <div className="container">
        <Title as={TitleTypes.h1}>Kanstantsin Hrytsuk</Title>
        <Paragraph>
          I am a <AccentText color={ThemeColors.orange}>Frontend Developer</AccentText> with experience more then{' '}
          <AccentText color={ThemeColors.green}>6+ years</AccentText>
        </Paragraph>
        <Paragraph>
          My responsibilities include teamwork, code review, testing and deployment.
          <br />
          I develop websites and mobile apps using modern technologies like <TechString />
        </Paragraph>
      </div>
    </motion.section>
  );
}
