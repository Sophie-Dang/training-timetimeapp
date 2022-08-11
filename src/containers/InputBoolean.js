import { connect } from 'react-redux';
import InputBoolean from '../components/InputBoolean/InputBoolean';

const mapState = (state) => ({
  timesheetList: state.filterTimesheet.timesheetList,
  isActive: state.filterTimesheet.inputBoolean,
});

const mapDispatch = (dispatch) => ({
  toggleButton: () => {
    dispatch({type: 'filterTimesheet/toggleInputBooleanFilter'});
  }
});

export default connect(mapState, mapDispatch)(InputBoolean);