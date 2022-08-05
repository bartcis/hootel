import { Rating } from '@mui/material';
import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRating } from '../../../../store/filters-slice/filters-slice';
import { StoreModel } from '../../../../store/store';

import styles from '../../hotel-filters.module.css'

export const RatingFilter: FC = () => {
  const dispatch = useDispatch()

  const rating = useSelector((state: StoreModel) => state.filters.rating);

  const setRatingValue = useCallback((_: React.SyntheticEvent<Element, Event>, newValue: number | null) => dispatch(setRating(newValue)),[]);

  return (
    <div className={styles.filter}>
      <p className={styles.filterLabel}>
        Filter by rating
      </p>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={setRatingValue}
      />
    </div>
  )
};
