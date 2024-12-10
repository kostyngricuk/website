import { useEffect, useMemo, useState } from 'react';
// eslint-disable-next-line import/no-named-as-default
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { ThemeColors } from 'tailwind.config';

function BackgroundParticles() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setIsLoaded(true);
    });
  }, []);

  const options = useMemo(
    (): ISourceOptions => ({
      fpsLimit: 120,
      particles: {
        links: {
          color: ThemeColors.lightOrange,
          distance: 300,
          enable: true,
          opacity: 0.55,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0,
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return isLoaded ? <Particles options={options} /> : null;
}

export default BackgroundParticles;
