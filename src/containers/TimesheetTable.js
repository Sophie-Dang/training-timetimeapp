import { connect } from "react-redux";
import TimesheetTable from "../components/TimesheetTable/TimesheetTable";

const mapState = (state) => ({
  accordion: state.accordion,
  prevId: state.accordion.prevId,
  timesheetList: state.filterTimesheet.timesheetList,
})

const mapDispatch = (dispatch) => ({
  toggleAccordion: (payload) => {
    dispatch({type: 'accordion/toggleAccordion', payload: payload});
  },
  getTimesheetList: () => {
    dispatch({type: 'filterTimesheet/getTimesheetList'})
  }
})

export default connect(mapState, mapDispatch)(TimesheetTable);