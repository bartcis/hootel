export type SingleRoom = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
  };
  disabledAccess: boolean;
  bedConfiguration: string;
  images: {
    url: string;
    alt: string;
  }[];
  facilities: {
    code: string;
    name: string;
  }[];
};

export type GetRoomsListVM = {
  rooms: SingleRoom[];
  ratePlans: Record<string, unknown>[];
};
