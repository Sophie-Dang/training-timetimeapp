import { configureStore } from '@reduxjs/toolkit';
import { accordionSlice } from './accordionSlice';
import { customInputSlice } from './customInputSlice';
import { eventFormSlice } from './eventFormSlice';
import { filterTimesheetSlice } from './filterTimesheetSlice';
import { paginationSlice } from './paginationSlice';

// Store
const store = configureStore({
  reducer: {
    filterTimesheet: filterTimesheetSlice.reducer,
    accordion: accordionSlice.reducer,
    pagination: paginationSlice.reducer,
    customInput: customInputSlice.reducer,
    eventForm: eventFormSlice.reducer,
  }
});

// Export
export default store;