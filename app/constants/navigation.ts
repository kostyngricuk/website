import type { Global } from '~/types';

export const PAGES: Global.Navigation = {
  home: {
    name: 'Home',
    path: '/',
  },
  about: {
    name: 'About Me',
    path: '/about',
  },
  services: {
    name: 'Services',
    path: '/services',
  },
  projects: {
    name: 'Projects',
    path: '/projects',
  },
  blog: {
    name: 'Blog',
    path: '/blog',
  },
  contacts: {
    name: 'Contacts',
    path: '/contacts',
  },
};

export const BREADCRUMBS: Global.Breadcrumbs = {
  home: [PAGES.home],
  about: [PAGES.home, PAGES.about],
  services: [PAGES.home, PAGES.services],
  projects: [PAGES.home, PAGES.projects],
  blog: [PAGES.home, PAGES.blog],
  contacts: [PAGES.home, PAGES.contacts],
};
