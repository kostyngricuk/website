import { useState } from 'react';
import { motion } from 'motion/react';

import { ThemeColors } from 'tailwind.config';

import Paragraph from '~/components/Paragraph';
import Title, { TitleTypes } from '~/components/Title';
import animations from './animations';
import AccentText, { Sizes } from '~/components/AccentText';
import { ReactTyped } from 'react-typed';

interface Tech {
  text: string;
  color: ThemeColors;
}

const techStack = [
  {
    text: 'React',
    color: ThemeColors.blue,
  },
  {
    text: 'TypeScript',
    color: ThemeColors.orange,
  },
  {
    text: 'React Native',
    color: ThemeColors.blue,
  },
  {
    text: 'JavaScript',
    color: ThemeColors.yellow,
  },
  {
    text: 'HTML + CSS',
    color: ThemeColors.red,
  },
] as Tech[];

export default function Hero() {
  const [indexTech, setIndexTech] = useState<number>(0);

  return (
    <motion.section {...animations.heroSection} className="h-screen flex flex-col justify-center">
      <div className="container">
        <Title as={TitleTypes.h1}>Kanstantsin Hrytsuk</Title>
        <Paragraph>
          <AccentText color={ThemeColors.orange}>Frontend Developer</AccentText> with{' '}
          <AccentText color={ThemeColors.green}>6+ years</AccentText> of experience
          <br />
          Development of modern websites and mobile apps using{' '}
          <AccentText color={techStack[indexTech].color} size={Sizes.large}>
            <ReactTyped
              strings={techStack.map(tech => tech.text)}
              typeSpeed={100}
              backSpeed={150}
              loop
              preStringTyped={strIndex => setIndexTech(strIndex)}
            />
          </AccentText>
        </Paragraph>
      </div>
    </motion.section>
  );
}
