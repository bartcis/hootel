import { HOTELS_API } from '../constants';
import { createHttpInstance } from '../http-client';
import { AbortSignalParam } from '../models';
import { GetRoomsListVM } from './models';

type GetRoomsListProps = AbortSignalParam & {
  hotelId: string;
};

export const getRoomsList = async ({ signal, hotelId }: GetRoomsListProps) => {
  const url = `${HOTELS_API}roomRates/OBMNG/${hotelId}`;
  const config = {
    signal,
  };

  const { data } = await createHttpInstance({}).get<{ data: GetRoomsListVM }>({ url, config });

  return data.rooms;
};
