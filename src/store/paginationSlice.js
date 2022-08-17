import { createSlice } from "@reduxjs/toolkit";
import { timesheetsDatas } from "./datas/dataList";
import { range } from "./utils";

const defaultPageSize = 3;
export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    timesheetList: timesheetsDatas,
    totalTimesheet: timesheetsDatas.length,
    pageSize: defaultPageSize,
    currentPage: 1,
    totalPageCount: Math.ceil(timesheetsDatas.length / defaultPageSize),
    firstTimesheetIndex: 0,
    lastTimesheetIndex: timesheetsDatas.length,
    siblingCount: 1,
    range: [1, 100],
  },
  reducers: {
    setPageSize: (state, action) => {
      // ----- Page -----
      const isPageSizeChanged = action.payload ? true : false;
  
      if (isPageSizeChanged === true) {
        state.currentPage = 1;
        state.totalPageCount = Math.ceil(timesheetsDatas.length / Number(action.payload.pageSize));
        state.pageSize = Number(action.payload.pageSize);
      } else {
        state.totalPageCount = Math.ceil(timesheetsDatas.length / state.pageSize);
      }

      // ----- Range of datas -----
      state.range = range(1, state.totalPageCount);
    },
    nextPage: (state) => {
      state.currentPage = state.currentPage < Math.max(...state.range) ? state.currentPage + 1 : Math.max(...state.range);
    },
    prevPage: (state) => {
      if (state.currentPage === 1) {
        state.currentPage = 1;
      } else {
        state.currentPage = state.currentPage > 0 ? state.currentPage - 1 : 1;
      }
    },
    lastPage: (state) => {
      state.currentPage = state.totalPageCount;
    },
    firstPage: (state) => {
      state.currentPage = Math.min(...state.range);
    },
    setTimesheetList: (state, action) => {
      const pageSize = action.payload ? Number(action.payload.pageSize) : state.pageSize;

      const firstTimesheetIndex = timesheetsDatas.findIndex((v, k) => k === (state.currentPage - 1) * pageSize);
      state.firstTimesheetIndex = firstTimesheetIndex >= 0 ? firstTimesheetIndex : state.firstTimesheetIndex;

      const lastTimesheetIndex = timesheetsDatas.findIndex((v, k) => k === state.firstTimesheetIndex + pageSize);
      state.lastTimesheetIndex = lastTimesheetIndex >= 0 ? lastTimesheetIndex : timesheetsDatas.length;

      state.timesheetList = timesheetsDatas.slice(state.firstTimesheetIndex, state.lastTimesheetIndex);
    },
  }
})
