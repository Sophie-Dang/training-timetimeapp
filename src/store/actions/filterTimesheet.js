export const FILTER_TIMESHEET = 'FILTER_TIMESHEET';
export const TOGGLE_INPUT_BOOLEAN_FILTER = 'TOGGLE_INPUT_BOOLEAN_FILTER';
export const APPLY_INPUT_BOOLEAN_FILTER = 'APPLY_INPUT_BOOLEAN_FILTER';

export const filterTimesheet = (payload) => {
  return {
    type: FILTER_TIMESHEET,
    payload,
  }
}

export const toggleInputBooleanFilter = () =>  {
  return {
    type: TOGGLE_INPUT_BOOLEAN_FILTER,
  }
}

export const applyInputBooleanFilter = (payload) => {
  return {
    type: APPLY_INPUT_BOOLEAN_FILTER,
    payload
  }
}