import { connect } from "react-redux";
import TimesheetTable from "../components/TimesheetTable/TimesheetTable";

const mapState = (state) => ({
  accordion: state.accordion,
  timesheetList: state.pagination.timesheetList,
  currentPage: state.pagination.currentPage,
  pageSize: state.pagination.pageSize,
})

const mapDispatch = (dispatch) => ({
  toggleAccordion: (payload) => {
    dispatch({type: 'accordion/toggleAccordion', payload: payload});
  },
  setTimesheetList: (payload) => {
    dispatch({type: 'pagination/setTimesheetList', payload: payload})
  }
})

export default connect(mapState, mapDispatch)(TimesheetTable);