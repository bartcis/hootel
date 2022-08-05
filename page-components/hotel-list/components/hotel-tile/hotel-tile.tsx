import React, { FC }  from 'react';
import { useSelector } from 'react-redux';
import { GetHotelsListVM } from '../../../../http-client/hotels-list/models';

import styles from './hotel-tile.module.css'

type HotelTileProps = {
  hotel: GetHotelsListVM
};

export const HotelTile: FC<HotelTileProps> = ({hotel}) => {
  return (
   <section className={styles.tile}>
    {hotel.name}
   </section>
  );
};
