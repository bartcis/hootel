import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { HotelFilters } from '../hotel-filters';

import styles from './layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <section className={styles.layout}>
      <header className={styles.header}>
        <Link href='/'>
          <a className={styles.logo}>hootel.com</a>
        </Link>
        <HotelFilters />
      </header>
      <section className={styles.content}>{children}</section>
      <footer className={styles.footer}>
        <p>Copyright Hootel</p>
      </footer>
    </section>
  );
};

export const getPersistiveLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export default Layout;
