import { connect } from 'react-redux';
import AddTimesheet from '../routes/addTimesheet/AddTimesheet';

const mapState = (state) => ({
  templates: state.toolNav.templates,
  types: state.toolNav.types,
});

const mapDispatch = (dispatch) => ({
  setType: (payload) => {
    dispatch({type: 'toolNav/setType', payload: payload});
  },
  setTemplate: (payload) => {
    dispatch({type: 'toolNav/setTemplate', payload: payload});
  },
});

export default connect(mapState, mapDispatch)(AddTimesheet);