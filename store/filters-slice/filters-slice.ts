import { createSlice } from '@reduxjs/toolkit'

export type FiltersSliceType = {
  rating: number;
  adults: number;
  children: number;
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    rating: 0,
    adults: 0,
    children: 0
  },
  reducers: {
    setRating: (state, {payload}) => {
      state.rating = payload
    },
    setAdultsCount: (state, {payload})=> {
      state.adults = payload
    },
    setChildrenCount: (state, {payload}) => {
      state.children = payload
    },
  },
})

export const { setRating, setAdultsCount, setChildrenCount } = filtersSlice.actions

export default filtersSlice.reducer