import { connect } from "react-redux";
import TimesheetPagination from "../components/TimesheetPagination/TimesheetPagination";

const mapState = (state) => ({
  timesheetList: state.filterTimesheet.timesheetList,
  pageSize: state.pagination.pageSize,
})

const mapDispatch = (dispatch) => ({
  getPageSize: (payload) => {
    dispatch({type: 'pagination/getPageSize', payload: payload});
  },
})

export default connect(mapState, mapDispatch)(TimesheetPagination);