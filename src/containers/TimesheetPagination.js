import { connect } from "react-redux";
import TimesheetPagination from "../components/TimesheetPagination/TimesheetPagination";

const mapState = (state) => ({
  totalTimesheet: state.pagination.totalTimesheet,
  pageSize: state.pagination.pageSize,
  currentPage: state.pagination.currentPage,
  firstTimesheetIndex: state.pagination.firstTimesheetIndex,
  lastTimesheetIndex: state.pagination.lastTimesheetIndex,
})

const mapDispatch = (dispatch) => ({
  setPageSize: (payload) => {
    dispatch({type: 'pagination/setPageSize', payload: payload});
  },
  nextPage: () => {
    dispatch({type: 'pagination/nextPage'});
  },
  prevPage: () => {
    dispatch({type: 'pagination/prevPage'});
  },
  firstPage: () => {
    dispatch({type: 'pagination/firstPage'});
  },
  lastPage: () => {
    dispatch({type: 'pagination/lastPage'});
  },
})

export default connect(mapState, mapDispatch)(TimesheetPagination);