import { Global } from '~/types';

const animations: Global.Animations = {
  personalInfo: {
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
