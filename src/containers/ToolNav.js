import { connect } from 'react-redux';
import ToolNav from '../components/ToolNav/ToolNav';

const mapState = (state) => ({
  cards: state.card.cards,
});

const mapDispatch = (dispatch) => ({
  toggleCard: (payload) => {
    dispatch({type: 'card/toggleCard', payload: payload});
  },
});

export default connect(mapState, mapDispatch)(ToolNav);