import { connect } from "react-redux";
import TimesheetFormEvent from "../components/TimesheetFormEvents/TimesheetFormEvent";

const mapState = (state) => ({
  accordion: state.accordion,
  eventListGoogle: state.eventForm.eventListGoogle,
  eventListZoho: state.eventForm.eventListZoho,
})

const mapDispatch = (dispatch) => ({
  toggleAccordion: (payload) => {
    dispatch({type: 'accordion/toggleAccordion', payload: payload});
  },
})

export default connect(mapState, mapDispatch)(TimesheetFormEvent);