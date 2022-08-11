import { connect } from "react-redux";
import TimesheetTable from "../components/TimesheetTable/TimesheetTable";

const mapState = (state) => ({
  accordion: state.accordion,
  prevId: state.accordion.prevId,
})

const mapDispatch = (dispatch) => ({
  toggleAccordion: (elementID) => {
    dispatch({type: 'accordion/toggleAccordion', payload: elementID});
  }
})

export default connect(mapState, mapDispatch)(TimesheetTable);