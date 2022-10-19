import { connect } from 'react-redux';
import Home from '../routes/home/Home';

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

export default connect(mapState, mapDispatch)(Home);