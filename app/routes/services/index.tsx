import type { MetaFunction } from '@remix-run/node';
import { BREADCRUMBS, PAGES } from '~/constants/navigation';
import InnerHeader from '~/features/InnerHeader';
import { getPageTitle } from '~/utils/seo';

export const meta: MetaFunction = () => {
  return [{ title: getPageTitle('services') }, { name: 'description', content: 'List of my services' }];
};

export default function Index() {
  return (
    <>
      <InnerHeader title={PAGES.services.name} breadcrumbs={BREADCRUMBS.services} />
    </>
  );
}
