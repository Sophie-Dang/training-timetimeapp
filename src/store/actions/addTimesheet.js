export const ADD_TIMESHEET = 'ADD_TIMESHEET'

export const addTimesheet = (payload) => {
  return {
      type: ADD_TIMESHEET,
      payload,
  }
}