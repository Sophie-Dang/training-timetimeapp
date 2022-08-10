import {
  ADD_TIMESHEET,
} from '../actions/addTimesheet';
import {
  TOGGLE_INPUT_BOOLEAN_FILTER,
  APPLY_INPUT_BOOLEAN_FILTER,
} from '../actions/filterTimesheet';

const initialState = {
  active: false,
}

const timesheetList = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TIMESHEET: {
      return {
        ...state, 
      };
    }
    case TOGGLE_INPUT_BOOLEAN_FILTER: {
      return {
        ...state,
        active: !state.active,
      }
    }
    case APPLY_INPUT_BOOLEAN_FILTER: {
      return {
        ...state, 
      };
    }
    default: {
      return state
    }
  }
}

export default timesheetList;