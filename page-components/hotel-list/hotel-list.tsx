import { CircularProgress } from '@mui/material';
import React  from 'react';
import { useSelector } from 'react-redux';
import { useGetHotelsList } from '../../http-client/hotels-list';
import { StoreModel } from '../../store/store';
import { HotelTile } from './components';

import styles from './hotel-list.module.css'

export const HotelList = () => {
  const rating = useSelector((state: StoreModel) => state.filters.rating);

  const { data, isLoading } = useGetHotelsList({rating});

  return (
    <div className={styles.list}>
      {isLoading && <CircularProgress className={styles.loader}/> }
      {data?.map(hotel => (
        <span key={hotel.id}>
          <HotelTile hotel={hotel} />
        </span>
      ))}
    </div>
  );
};
