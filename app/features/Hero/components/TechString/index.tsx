import { memo, useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';

import { ThemeColors } from 'tailwind.config';

import AccentText, { Sizes } from '~/components/AccentText';

interface Technology {
  text: string;
  color: ThemeColors;
}

const TECHNOLOGIES = [
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
] as Technology[];

const TechString = memo(function Tech() {
  const [index, setIndex] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (isCompleted) {
      setIndex(indexPrev => (indexPrev < TECHNOLOGIES.length - 1 ? indexPrev + 1 : 0));
      setIsCompleted(false);
    }
  }, [isCompleted]);

  return (
    <AccentText color={TECHNOLOGIES[index].color} size={Sizes.large}>
      <ReactTyped
        strings={[TECHNOLOGIES[index].text]}
        typeSpeed={100}
        backSpeed={150}
        loop
        onLastStringBackspaced={() => {
          setIsCompleted(true);
        }}
      />
    </AccentText>
  );
});

export default TechString;
