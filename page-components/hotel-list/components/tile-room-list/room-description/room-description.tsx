import React, { FC }  from 'react';

import { SingleRoom } from '../../../../../http-client/rooms-list/models';

import styles from './room-description.module.css';

type RoomDescriptionProps = {
  room: SingleRoom;
};

export const RoomDescription: FC<RoomDescriptionProps> = ({room}) => {
  return (
    <section className={styles.room}>
      <div className={styles.leftPanel}>
        <p>{room.name}</p>
        <p>Adults: {room.occupancy.maxAdults}</p>
        <p>Children: {room.occupancy.maxChildren}</p>
      </div>
      <p className={styles.rightPanel}>
        {room.longDescription}
      </p>
    </section>
  );
};
