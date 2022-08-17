import { connect } from 'react-redux';
import Select from '../components/Select/Select';

const mapState = (state) => ({
  selects: state.customInput.selects,
});

const mapDispatch = (dispatch) => ({
  addSelect: (payload) => {
    dispatch({type: 'customInput/addSelect', payload: payload});
  },
  toggleOptions: (payload) => {
    dispatch({type: 'customInput/toggleOptions', payload: payload});
  },
  setSelect: (payload) => {
    dispatch({type: 'customInput/setSelect', payload: payload});
  }
});

export default connect(mapState, mapDispatch)(Select);