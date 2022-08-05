import { configureStore } from '@reduxjs/toolkit';
import filtersReducer, { FiltersSliceType } from './filters-slice/filters-slice';

export type StoreModel = {
  filters: FiltersSliceType;
};

export default configureStore({
  reducer: {
    filters: filtersReducer,
  },
});
