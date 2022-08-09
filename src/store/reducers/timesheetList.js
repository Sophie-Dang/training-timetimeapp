import {
  ADD_TIMESHEET,
} from '../actions/addTimesheet';

const timesheetList = (state = [], action) => {
  switch (action.type) {
    case ADD_TIMESHEET: {
      return [...state.timesheets, action.timesheets];
    }
    default: {
      return state
    }
  }
}

export default timesheetList;