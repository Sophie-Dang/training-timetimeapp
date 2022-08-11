import { createSlice } from "@reduxjs/toolkit";
import { timesheetsDatas } from "./datas/dataList";

export const filterTimesheetListSlice = createSlice({
  name: 'filterTimesheet',
  initialState: {
    timesheetList: timesheetsDatas,
    inputBoolean: false,
  },
  reducers: {
    toggleInputBooleanFilter: (state) => {
      state.inputBoolean = !state.inputBoolean;
    }
  }
})