import React, { FC }  from 'react';
import { GetHotelsListVM } from '../../../../http-client/hotels-list/models';

import styles from './hotel-description.module.css'
import { Button, Rating } from '@mui/material';
import Link from 'next/link';

type HotelDescriptionProps = {
  hotel: GetHotelsListVM;
  onListToggle: () => void;
  buttonLabel: string;
};

export const HotelDescription: FC<HotelDescriptionProps> = ({hotel, onListToggle, buttonLabel}) => {
  return (
    <div className={styles.tileContent}>
        <div className={styles.flex}>
          <Link href='/'>
            <a>
              <h1 className={styles.title}>{hotel.name}</h1>
            </a>
          </Link>
          <span className={styles.flex}>
            <p>Rating: </p>
            <Rating name="read-only" value={Number(hotel.starRating)} readOnly />
          </span>
        </div>
        <p>{hotel.address1}</p>
        <p>{hotel.address2}</p>
        <p>{hotel.postcode}, {hotel.town}</p>
        <p>{hotel.country}</p>
        <div className={styles.button}>
          <Button variant="text" onClick={onListToggle}>{buttonLabel}</Button>
        </div>
      </div>
  );
};
