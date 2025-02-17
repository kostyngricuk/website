import type { MetaFunction } from '@remix-run/node';
import { BREADCRUMBS, PAGES } from '~/constants/navigation';
import InnerHeader from '~/features/InnerHeader';
import { getPageTitle } from '~/utils/seo';

export const meta: MetaFunction = () => {
  return [{ title: getPageTitle('contacts') }, { name: 'description', content: 'Contact me' }];
};

export default function Index() {
  return (
    <>
      <InnerHeader title={PAGES.contacts.name} breadcrumbs={BREADCRUMBS.contacts} />
    </>
  );
}
