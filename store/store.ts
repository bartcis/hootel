import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filters-slice/filters-slice';

export default configureStore({
  reducer: {
    filters: filtersReducer
  },
})