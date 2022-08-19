import { configureStore } from '@reduxjs/toolkit';
import { accordionSlice } from './accordionSlice';
import { cardSlice } from './cardSlice';
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
    card: cardSlice.reducer,
  }
});

// Export
export default store;