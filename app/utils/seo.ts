import { Global } from '~/types';

import { PAGES } from '~/constants/navigation';
import { SEO_TITLE } from '~/constants/seo';

export const getPageTitle = (name: Global.PageNames) => `${PAGES[name].name} ${SEO_TITLE}`;
