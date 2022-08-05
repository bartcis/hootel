import { useRouter } from 'next/router';
import React, { FC, useMemo } from 'react';
import { RoutePaths } from '../../models/router';
import { ClientsFilter, RatingFilter } from './components';

import styles from './hotel-filters.module.css';

export const HotelFilters: FC = () => {
  const { pathname } = useRouter();

  const isListPage = useMemo(() => pathname === RoutePaths.LIST, [pathname]);

  return (
    <section className={styles.filters}>
      {isListPage && <RatingFilter />}
      <ClientsFilter />
    </section>
  );
};
