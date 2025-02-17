import type { MetaFunction } from '@remix-run/node';
import { BREADCRUMBS, PAGES } from '~/constants/navigation';
import InnerHeader from '~/features/InnerHeader';
import { getPageTitle } from '~/utils/seo';

export const meta: MetaFunction = () => {
  return [{ title: getPageTitle('blog') }, { name: 'description', content: 'List of my articles' }];
};

export default function Index() {
  return (
    <>
      <InnerHeader title={PAGES.blog.name} breadcrumbs={BREADCRUMBS.blog} />
    </>
  );
}
