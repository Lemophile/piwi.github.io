import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children, title = 'Piwi - Full-Stack Developer', description = 'Full-Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences' }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111827" />
      </Head>

      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
