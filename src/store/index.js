import { configureStore } from '@reduxjs/toolkit';
import { accordionSlice } from './accordionSlice';
import { filterTimesheetSlice } from './filterTimesheetSlice';
import { paginationSlice } from './paginationSlice';

// Store
const store = configureStore({
  reducer: {
    filterTimesheet: filterTimesheetSlice.reducer,
    accordion: accordionSlice.reducer,
    pagination: paginationSlice.reducer,
  }
});

// Export
export default store;