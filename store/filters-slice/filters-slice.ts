import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    rating: 0,
    adults: 0,
    children: 0
  },
  reducers: {
    setRating: ({rating}, {payload}) => {
      rating = payload
    },
    setAdultsCount: ({adults}, {payload})=> {
      adults = payload
    },
    setChildrenCount: ({children}, {payload}) => {
      children = payload
    },
  },
})

export const { setRating, setAdultsCount, setChildrenCount } = filtersSlice.actions

export default filtersSlice.reducer