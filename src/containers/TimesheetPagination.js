import { connect } from "react-redux";
import TimesheetPagination from "../components/TimesheetPagination/TimesheetPagination";

const mapState = (state) => ({
  timesheetList: state.pagination.timesheetList,
  pageSize: state.pagination.pageSize,
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