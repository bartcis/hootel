import { getHotelsList } from './get-hotels-list';
import { HootelApiId } from '../models';
import { GetHotelsListVM } from './models';
import { useQuery } from '@tanstack/react-query';

type UseGetHotelsListProps = {
  rating: number;
};

export const useGetHotelsList = ({ rating }: UseGetHotelsListProps) => {
  const { isLoading, data, isError } = useQuery([HootelApiId.hotelsList, rating], ({ signal }) => getHotelsList({ signal }), {
    select: (hotels: GetHotelsListVM[]) => hotels.filter((hotel) => Number(hotel.starRating) >= rating),
  });

  return {
    isLoading,
    data,
    isError,
  };
};

export default useGetHotelsList;

