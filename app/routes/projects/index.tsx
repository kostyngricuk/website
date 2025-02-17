import type { MetaFunction } from '@remix-run/node';
import { BREADCRUMBS, PAGES } from '~/constants/navigation';
import InnerHeader from '~/features/InnerHeader';
import { getPageTitle } from '~/utils/seo';

export const meta: MetaFunction = () => {
  return [{ title: getPageTitle('projects') }, { name: 'description', content: 'List of my projects' }];
};

export default function Index() {
  return (
    <>
      <InnerHeader title={PAGES.projects.name} breadcrumbs={BREADCRUMBS.projects} />
    </>
  );
}
