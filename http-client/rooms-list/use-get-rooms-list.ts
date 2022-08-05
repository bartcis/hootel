import { getRoomsList } from './get-rooms-list';
import { HootelApiId } from '../models';
import { useQuery } from '@tanstack/react-query';
import { SingleRoom } from './models';

type useGetRoomsListProps = {
  adults: number;
  children: number;
  hotelId: string;
};

export const useGetRoomsList = ({ adults, children, hotelId }: useGetRoomsListProps) => {
  const { isLoading, data, isError } = useQuery([HootelApiId.roomsList, adults, children], ({ signal }) => getRoomsList({ signal, hotelId }), {
    select: (rooms: SingleRoom[]) => rooms.filter(({ occupancy }) => occupancy.maxAdults >= adults && occupancy.maxChildren >= children),
  });

  return {
    isLoading,
    data,
    isError,
  };
};
