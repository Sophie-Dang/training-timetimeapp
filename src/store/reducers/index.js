// Forward imports
import { combineReducers } from 'redux';

// Reducers import (Local)
import timesheetList from './timesheetList';
import accordion from './accordion';

// Export
export default combineReducers({
  timesheetList,
  accordion,
})