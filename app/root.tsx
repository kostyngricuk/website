import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import { motion } from 'framer-motion';

import Header from './features/Header';
import BackgroundParticles from './features/BackgroundParticles';

import './tailwind.css';
import Paragraph from './components/Paragraph';
import Title from './components/Title';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap',
  },
];

export function ErrorBoundary() {
  const error = useRouteError();

  const errorMessage = error instanceof Error ? error.message : 'Unknown Error';

  return (
    <motion.section className="h-screen flex flex-col justify-center">
      <div className="container">
        <Title as="h2">Oops...</Title>
        <Paragraph>{isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : errorMessage}</Paragraph>
      </div>
    </motion.section>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <BackgroundParticles />
        <Header />
        <main>
          {children}
          <ScrollRestoration />
        </main>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
