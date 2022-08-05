import { HOTELS_API } from '../constants';
import { createHttpInstance } from '../http-client';
import { AbortSignalParam } from '../models';
import { GetHotelsListVM } from './models';

export const getHotelsList = async ({ signal }: AbortSignalParam) => {
  const url = `${HOTELS_API}hotels?collection-id=OBMNG`;
  const config = {
    signal,
  };

  const { data } = await createHttpInstance({}).get<{ data: GetHotelsListVM[] }>({ url, config });

  return data;
};
