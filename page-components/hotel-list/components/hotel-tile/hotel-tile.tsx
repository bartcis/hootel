import React, { FC, useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import { GetHotelsListVM } from '../../../../http-client/hotels-list/models';

import styles from './hotel-tile.module.css';
import { HotelGallery } from '../hotel-gallery';
import { Button, Rating } from '@mui/material';
import Link from 'next/link';
import { TileRoomList } from '../tile-room-list';
import { HotelDescription } from '../hotel-description';

type HotelTileProps = {
  hotel: GetHotelsListVM;
};

export const HotelTile: FC<HotelTileProps> = ({ hotel }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleGallery = useCallback(() => setIsGalleryOpen((state) => !state), []);
  const toggleRoomList = useCallback(() => setIsListOpen((state) => !state), []);

  const buttonLabel = useMemo(() => (isListOpen ? 'Hide rooms' : 'Show rooms'), [isListOpen]);

  return (
    <section className={styles.tile}>
      <div className={styles.flex}>
        <Image src={hotel.images[0].url} className={styles.image} alt={hotel.name} width={200} height={200} onClick={toggleGallery} />
        <HotelDescription hotel={hotel} onListToggle={toggleRoomList} buttonLabel={buttonLabel} />
      </div>
      {isListOpen && <TileRoomList hotelId={hotel.id} />}
      <HotelGallery isOpen={isGalleryOpen} images={hotel.images} handleClose={toggleGallery} />
    </section>
  );
};
