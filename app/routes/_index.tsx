import type { MetaFunction } from '@remix-run/node';
import { motion } from 'framer-motion';
import Title, { TitleTypes } from '~/components/Title';
import Paragraph from '~/components/Paragraph';
import AccentText from '~/components/AccentText';
import TechString from '~/features/TechString';
import SocialMedia from '~/features/SocialMedia';

import { ThemeColors } from 'tailwind.config';

import animations from './animations';

export const meta: MetaFunction = () => {
  return [{ title: 'Frontend developer | Kanstantsin Hryrtsuk' }, { name: 'description', content: 'Personal website' }];
};

export default function Index() {
  return (
    <motion.section {...animations.heroSection} className="h-screen flex flex-col justify-center">
      <div className="container">
        <Title as={TitleTypes.h1}>Hi, there!</Title>
        <Paragraph>
          I am experienced <AccentText color={ThemeColors.orange}>Frontend Developer</AccentText> with deep knowledge in{' '}
          <TechString />
        </Paragraph>
        <Paragraph>My responsibility includes developing, maintaining, and testing user interfaces</Paragraph>
        <div className="mt-4">
          <Paragraph>Keep in touch with me on social media</Paragraph>
          <SocialMedia className="mt-2" />
        </div>
      </div>
    </motion.section>
  );
}
