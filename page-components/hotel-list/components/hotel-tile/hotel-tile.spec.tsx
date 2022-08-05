import { fireEvent, render, screen } from "@testing-library/react";
import { GetHotelsListVM } from "../../../../http-client/hotels-list/models";
import { AppWrapper } from "../../../../test-utils";
import { HotelTile } from "./hotel-tile";

jest.mock('../hotel-gallery', () => ({
  HotelGallery: jest.fn(() => <div data-testid="HotelGallery" />),
}));

jest.mock('../tile-room-list', () => ({
  TileRoomList: jest.fn(() => <div data-testid="TileRoomList" />),
}));

const MOCK_HOTEL = {
  images: [{url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG'}],
  id: '123',
  name: 'Hotel'
} as GetHotelsListVM;

describe('HotelTile', () => {
  it('should render successfully and update show rooms list', () => {
    const { baseElement } = render(<HotelTile hotel={MOCK_HOTEL}/>, { wrapper: AppWrapper });

    expect(baseElement).toBeTruthy();
    expect(screen.queryAllByTestId('HotelGallery')).toHaveLength(1);
    expect(screen.queryAllByTestId('TileRoomList')).toHaveLength(0);

    const button = screen.getByText(/Show rooms/i);

    expect(button).toBeTruthy();
    fireEvent.click(button)

    expect(screen.queryAllByTestId('TileRoomList')).toHaveLength(1);

    const newButton = screen.getByText(/Hide rooms/i);

    expect(newButton).toBeTruthy();
    fireEvent.click(newButton);
    expect(screen.queryAllByTestId('TileRoomList')).toHaveLength(0);
  });
});
