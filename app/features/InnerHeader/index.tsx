import { motion } from 'framer-motion';
import Title, { TitleTypes } from '~/components/Title';
import Breadcrumbs, { Breadcrumb } from '~/components/Breadcrumbs';

import animations from './animations';

function InnerHeader({ title, breadcrumbs }: { title: string; breadcrumbs: Breadcrumb[] }) {
  return (
    <motion.section {...animations.wrapper} className="flex flex-col pt-40 pb-10">
      <div className="container text-center">
        <Breadcrumbs paths={breadcrumbs} />
        <Title as={TitleTypes.h1}>{title}</Title>
      </div>
    </motion.section>
  );
}

export default InnerHeader;
