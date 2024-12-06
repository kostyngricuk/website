import { motion } from 'motion/react';
import animations from './animations';
import Counter from '~/components/Counter';

export default function Counters() {
  return (
    <motion.section {...animations.heroSection}>
      <div className="container">
        <Counter title="Web Sites" value={60} />
        <Counter title="Mobile Apps" value={3} />
        <Counter title="Modules and Plugins" value={8} />
      </div>
    </motion.section>
  );
}
