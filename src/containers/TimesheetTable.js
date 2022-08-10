import { connect } from "react-redux";
import TimesheetTable from "../components/TimesheetTable/TimesheetTable";
import {
  toggleAccordion
} from '../store/actions/accordion';

const mapState = (state) => ({
  accordion: state.accordion,
  show: state.accordion.show,
})

const mapDispatch = (dispatch) => ({
  toggleAccordion: (payload) => {
    dispatch(toggleAccordion(payload));
  }
})

export default connect(mapState, mapDispatch)(TimesheetTable);