import { connect } from 'react-redux';
import ToolNav from '../components/ToolNav/ToolNav';

const mapState = (state) => ({
  currentTemplate: state.toolNav.currentTemplate,
  templates: state.toolNav.templates,
  currentType: state.toolNav.currentType,
  types: state.toolNav.types,
  cardOpened: state.card.cardOpened,
});

const mapDispatch = (dispatch) => ({
  toggleCard: (payload) => {
    dispatch({type: 'card/toggleCard', payload: payload});
  },
  setType: (payload) => {
    dispatch({type: 'toolNav/setType', payload: payload});
  },
  setTemplate: (payload) => {
    dispatch({type: 'toolNav/setTemplate', payload: payload});
  },
});

export default connect(mapState, mapDispatch)(ToolNav);