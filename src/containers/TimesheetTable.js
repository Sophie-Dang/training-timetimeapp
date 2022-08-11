import { connect } from "react-redux";
import TimesheetTable from "../components/TimesheetTable/TimesheetTable";
import {
  toggleAccordion
} from '../store/actions/accordion';

const mapState = (state) => ({
  accordion: state.accordion,
  prevId: state.accordion.prevId,
})

const mapDispatch = (dispatch) => ({
  toggleAccordion: (elementID) => {
    dispatch(toggleAccordion(elementID));
  }
})

export default connect(mapState, mapDispatch)(TimesheetTable);