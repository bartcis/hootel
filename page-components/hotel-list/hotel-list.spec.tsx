import { render, screen } from '@testing-library/react';
import { AppWrapper } from '../../test-utils';
import { HotelList } from './hotel-list';
import * as UseGetHotelsList from '../../http-client/hotels-list/use-get-hotels-list';
import { GetHotelsListVM } from '../../http-client/hotels-list/models';

jest.mock('@mui/material', () => ({
  CircularProgress: jest.fn(() => <div data-testid='CircularProgress' />),
}));

jest.mock('./components', () => ({
  HotelTile: jest.fn(() => <div data-testid='HotelTile' />),
}));

jest.mock('../../http-client/hotels-list/use-get-hotels-list', () => ({
  __esModule: true,
  // @ts-ignore
  ...jest.requireActual('../../http-client/hotels-list/use-get-hotels-list'),
}));

describe('HotelList', () => {
  it('should render successfully in loading state', () => {
    jest.spyOn(UseGetHotelsList, 'useGetHotelsList').mockReturnValue({ isLoading: true, data: undefined, isError: false });

    const { baseElement } = render(<HotelList />, { wrapper: AppWrapper });

    expect(baseElement).toBeTruthy();
    expect(screen.queryAllByTestId('CircularProgress')).toHaveLength(1);
    expect(screen.queryAllByTestId('HotelTile')).toHaveLength(0);
  });

  it('should render successfully with hotels list', () => {
    jest
      .spyOn(UseGetHotelsList, 'useGetHotelsList')
      .mockReturnValue({ isLoading: false, data: [{ id: '1' }, { id: '2' }] as GetHotelsListVM[], isError: false });

    const { baseElement } = render(<HotelList />, { wrapper: AppWrapper });

    expect(baseElement).toBeTruthy();
    expect(screen.queryAllByTestId('CircularProgress')).toHaveLength(0);
    expect(screen.queryAllByTestId('HotelTile')).toHaveLength(2);
  });
});
