import React, { FC } from 'react';

import { CircularProgress } from '@mui/material';
import { useGetRoomsList } from '../../../../http-client/rooms-list';
import { useSelector } from 'react-redux';
import { StoreModel } from '../../../../store/store';
import { RoomDescription } from './room-description/room-description';

type TileRoomListProps = {
  hotelId: string;
};

export const TileRoomList: FC<TileRoomListProps> = ({ hotelId }) => {
  const adults = useSelector((state: StoreModel) => state.filters.adults);
  const children = useSelector((state: StoreModel) => state.filters.children);

  const { data, isLoading } = useGetRoomsList({ hotelId, adults, children });

  return (
    <section>
      {isLoading && <CircularProgress />}
      {data &&
        data?.map((room) => (
          <span key={room.id}>
            <RoomDescription room={room} />
          </span>
        ))}
      {!isLoading && !data?.length && <p>Sorry, no rooms found matching your criteria</p>}
    </section>
  );
};
