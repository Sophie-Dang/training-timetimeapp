import { createSlice } from "@reduxjs/toolkit";
import { timesheetsDatas } from "./datas/dataList";

export const filterTimesheetSlice = createSlice({
  name: 'filterTimesheet',
  initialState: {
    timesheetList: timesheetsDatas,
    inputBoolean: false,
  },
  reducers: {
    toggleInputBooleanFilter: (state) => {
      state.inputBoolean = !state.inputBoolean;
    },
    getTimesheetList: (state) => {
      state.timesheetList = timesheetsDatas;
    },
  }
})