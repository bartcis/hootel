import { useGetHotelsList } from '.';
import { HOTELS_API } from '../constants';
import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { AppWrapper } from '../../test-utils';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const data = [
  {
    id: '1',
    name: 'Hotel 1',
    starRating: '1',
  },
  {
    id: '2',
    name: 'Hotel 2',
    starRating: '3',
  },
  {
    id: '3',
    name: 'Hotel 3',
    starRating: '4',
  },
];

afterEach(cleanup);

describe('useGetHotelsList', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet(`${HOTELS_API}hotels?collection-id=OBMNG`).reply(200, data);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should return successfull result for rating 5', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetHotelsList({ rating: 5 }), {
      wrapper: AppWrapper,
    });

    await waitForNextUpdate();

    expect(result.current.data?.length).toEqual(0);
  });

  it('should return successfull result for rating 4', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetHotelsList({ rating: 4 }), {
      wrapper: AppWrapper,
    });

    await waitForNextUpdate();

    expect(result.current.data?.length).toEqual(1);
  });

  it('should return successfull result for rating 3', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetHotelsList({ rating: 3 }), {
      wrapper: AppWrapper,
    });

    await waitForNextUpdate();

    expect(result.current.data?.length).toEqual(2);
  });
});
