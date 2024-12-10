import { Animations } from '~/types';

const animations: Animations = {
  scene: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      type: 'spring',
    },
  },
};
export default animations;
