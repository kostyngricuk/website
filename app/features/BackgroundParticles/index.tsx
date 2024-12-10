import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-named-as-default
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { ThemeColors } from 'tailwind.config';

const options: ISourceOptions = {
  fpsLimit: 120,
  particles: {
    links: {
      color: ThemeColors.lightOrange,
      distance: 200,
      enable: true,
      opacity: 0.65,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: true,
      speed: 2,
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
};

function BackgroundParticles() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setIsLoaded(true);
    });
  }, []);

  return isLoaded ? <Particles options={options} /> : null;
}

export default BackgroundParticles;
