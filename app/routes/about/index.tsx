import type { MetaFunction } from '@remix-run/node';
import { motion } from 'framer-motion';
import Title, { TitleTypes } from '~/components/Title';
import Paragraph from '~/components/Paragraph';
import AccentText from '~/components/AccentText';
import animations from './animations';
import { ThemeColors } from 'tailwind.config';
import { PATHS } from '~/constants/paths';
import InnerHeader from '~/features/InnerHeader';

const styles = {
  leftCol: 'w-1/2 my-10 pr-10 border-r-2 border-black border-opacity-20 hover:border-opacity-100 hover:border-orange',
  rightCol: 'w-1/2 mr-0 my-10 ml-auto pl-10 border-l-2 border-black border-opacity-20 hover:border-opacity-100 hover:border-orange',
};

export const meta: MetaFunction = () => {
  return [{ title: 'About Me | Kanstantsin Hryrtsuk' }, { name: 'description', content: 'Personal website' }];
};

export default function Index() {
  return (
    <>
      <InnerHeader title="About Me" breadcrumbs={[{ name: 'Home', path: PATHS.home }, { name: 'About Me' }]} />
      <motion.section {...animations.personalInfo} className="flex flex-col pb-20">
        <div className="container">
          <div className={styles.leftCol}>
            <Title as={TitleTypes.h3}>Start point</Title>
            <Paragraph>
              Creating a lot of websites using <AccentText color={ThemeColors.red}>HTML</AccentText>,{' '}
              <AccentText color={ThemeColors.blue}>CSS</AccentText> and{' '}
              <AccentText color={ThemeColors.yellow}>JavaScript</AccentText>.
            </Paragraph>
            <Paragraph>
              Worked with e-commerce platforms like <AccentText color={ThemeColors.black}>WooCommerce</AccentText> and{' '}
              <AccentText color={ThemeColors.black}>OpenCart</AccentText>.
            </Paragraph>
          </div>
          <div className={styles.rightCol}>
            <Title as={TitleTypes.h3}>Codding part</Title>
            <Paragraph>
              Cunfiguring and customizing <AccentText color={ThemeColors.black}>WordPress</AccentText> themes and
              plugins.
            </Paragraph>
            <Paragraph>
              Creating web applications using <AccentText color={ThemeColors.blue}>PHP</AccentText> and{' '}
              <AccentText color={ThemeColors.orange}>Laravel</AccentText>.
            </Paragraph>
          </div>
          <div className={styles.leftCol}>
            <Title as={TitleTypes.h3}>Focus on the interfaces</Title>
            <Paragraph>
              Creating user interfaces using <AccentText color={ThemeColors.blue}>React</AccentText> and{' '}
              <AccentText color={ThemeColors.orange}>TypeScript</AccentText>
            </Paragraph>
            <Paragraph>Work in big teams with a full cycle of development</Paragraph>
          </div>
          <div className={styles.rightCol}>
            <Title as={TitleTypes.h3}>Deep dive</Title>
            <Paragraph>Performance optimization and SEO improvements for web applications</Paragraph>
            <Paragraph>
              Testing web applications using <AccentText color={ThemeColors.red}>Jest</AccentText> and{' '}
              <AccentText color={ThemeColors.yellow}>Playwright</AccentText>
            </Paragraph>
          </div>
          <div className={styles.leftCol}>
            <Title as={TitleTypes.h3}>New Experience</Title>
            <Paragraph>
              Support the team of developers in creating a mobile application using{' '}
              <AccentText color={ThemeColors.blue}>React Native</AccentText>
            </Paragraph>
            <Paragraph>
              Using <AccentText color={ThemeColors.orange}>AI Tools</AccentText> for writing tests and improve the speed
              of creating web applications
            </Paragraph>
          </div>
          <div className={styles.rightCol}>
            <Title as={TitleTypes.h3}>Now</Title>
            <Paragraph>Run the technical part of the interviews for the frontend developers</Paragraph>
            <Paragraph>Write blog posts about web development</Paragraph>
            <Paragraph>Social media activities and creating video content about web development</Paragraph>
          </div>
        </div>
      </motion.section>
    </>
  );
}
