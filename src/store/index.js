import { configureStore } from '@reduxjs/toolkit';
import { accordion } from './accordion';
import { filterTimesheetListSlice } from './filterTimesheetList';

// Store
const store = configureStore({
  reducer: {
    filterTimesheet: filterTimesheetListSlice.reducer,
    accordion: accordion.reducer,
  }
});

// Export
export default store;