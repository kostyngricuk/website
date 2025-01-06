import { Animations } from '~/types';

const animations: Animations = {
  heroSection: {
    initial: {
      transform: 'translateY(100%)',
      opacity: 0,
    },
    animate: {
      transform: 'translateY(0px)',
      opacity: 1,
    },
    transition: {
      type: 'spring',
    },
  },
};
export default animations;
