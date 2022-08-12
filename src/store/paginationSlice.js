import { createSlice } from "@reduxjs/toolkit";
import { timesheetsDatas } from "./datas/dataList";

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    timesheetList: timesheetsDatas,
    pageSize: 10,
    currentPage: 1,
    totalCount: timesheetsDatas.length,
    siblingCount: 1,
    countUpTo: 100,
  },
  reducers: {
    getPageSize: (state, action) => {
      state.pageSize = action.payload.pageSize;
    },
    getTimesheetList: (state) => {
      const totalPageCount = Math.ceil(state.totalCount / state.pageSize);
      const totalPageNumbers = state.siblingCount + 5;
      const range = (start, end) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
      };

      if (totalPageNumbers >= totalPageCount) {
        return range(1, totalPageCount);
      }
    },
  }
})
