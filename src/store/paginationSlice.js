import { createSlice } from "@reduxjs/toolkit";
import { timesheetsDatas } from "./datas/dataList";
import { range } from "./utils";

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    timesheetList: timesheetsDatas,
    pageSize: 3,
    currentPage: 1,
    totalCount: timesheetsDatas.length,
    firstTimesheetIndex: 0,
    lastTimesheetIndex: timesheetsDatas.length,
    siblingCount: 1,
    range: [1, 100],
  },
  reducers: {
    setPageSize: (state, action) => {
      state.pageSize = Number(action.payload.pageSize);
    },
    nextPage: (state) => {
      state.currentPage = state.currentPage < state.totalCount ? state.currentPage + 1 : state.totalCount;
    },
    prevPage: (state) => {
      state.currentPage = state.currentPage > 0 ? state.currentPage - 1 : 1;
    },
    lastPage: (state) => {
      state.currentPage = state.totalCount;
    },
    firstPage: (state) => {
      const totalPageCount = Math.ceil(state.totalCount / state.pageSize);
      const totalPageNumbers = state.siblingCount + 5;

      if (totalPageNumbers >= totalPageCount) {
        state.range = range(1, totalPageCount);
      }
      state.currentPage = state.firstTimesheetIndex;
    },
    setTimesheetList: (state, action) => {
      const pageSize = action.payload ? Number(action.payload.pageSize) : state.pageSize;
      const firstTimesheetIndex = timesheetsDatas.findIndex((v, k) => k === (state.currentPage - 1) * pageSize);
      const lastTimesheetIndex = timesheetsDatas.findIndex((v, k) => k === state.firstTimesheetIndex + pageSize);

      state.firstTimesheetIndex = firstTimesheetIndex >= 0 ? firstTimesheetIndex : state.firstTimesheetIndex;
      state.lastTimesheetIndex = lastTimesheetIndex >= 0 ? lastTimesheetIndex : timesheetsDatas.length;
      
      state.timesheetList = timesheetsDatas.slice(state.firstTimesheetIndex, state.lastTimesheetIndex);
    },
  }
})
