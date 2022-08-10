import { connect } from 'react-redux';

// Import : component
import InputBoolean from '../components/InputBoolean/InputBoolean';

// Import : actions
import {
  toggleInputBooleanFilter,
} from '../store/actions/filterTimesheet';

const mapState = (state) => ({
  timesheetList: state.timesheetList,
  active: state.timesheetList.active,
});

const mapDispatch = (dispatch) => ({
  toggleButton: () => {
    dispatch(toggleInputBooleanFilter());
  }
});

export default connect(mapState, mapDispatch)(InputBoolean);