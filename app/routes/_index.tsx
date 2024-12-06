import type { MetaFunction } from '@remix-run/node';
import Counters from '~/features/Counters';
import Hero from '~/features/Hero';

export const meta: MetaFunction = () => {
  return [{ title: 'Kanstantsin Hrytsuk | Frontend Developer' }, { name: 'description', content: 'Personal website' }];
};

export default function Index() {
  return (
    <>
      <Hero />
      <Counters />
    </>
  );
}