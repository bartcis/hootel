import { Rating } from '@mui/material';
import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonFilter } from '../../..';
import { setAdultsCount, setChildrenCount } from '../../../../store/filters-slice/filters-slice';
import { StoreModel } from '../../../../store/store';

import styles from '../../hotel-filters.module.css'

export const ClientsFilter: FC = () => {
  const dispatch = useDispatch()

  const adults = useSelector((state: StoreModel) => state.filters.adults);
  const children = useSelector((state: StoreModel) => state.filters.children);

  const addAdult = useCallback(() => dispatch(setAdultsCount(adults + 1)),[adults]);
  const removeAdult = useCallback(() => dispatch(setAdultsCount(adults > 0 ? adults - 1 : adults)),[adults]);
  const addChild = useCallback(() => dispatch(setChildrenCount(children + 1)),[children]);
  const removeChild = useCallback(() => dispatch(setChildrenCount(children > 0 ? children - 1 : children)),[children]);

  return (
    <div>
      <p className={styles.filterLabel}>
        Filter by customers
      </p>
      <div className={styles.filters}>
        <ButtonFilter value={adults} label='Adults' onIncrement={addAdult} onDecrement={removeAdult} />
        <ButtonFilter value={children} label='Children' onIncrement={addChild} onDecrement={removeChild} />
      </div>
    </div>
  )
};
